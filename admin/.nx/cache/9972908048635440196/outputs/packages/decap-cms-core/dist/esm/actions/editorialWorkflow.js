import _get from "lodash/get";
import { Map, List } from 'immutable';
import { EDITORIAL_WORKFLOW_ERROR } from 'decap-cms-lib-util';
import { currentBackend, slugFromCustomPath } from '../backend';
import { selectPublishedSlugs, selectUnpublishedSlugs, selectEntry, selectUnpublishedEntry } from '../reducers';
import { selectEditingDraft } from '../reducers/entries';
import { EDITORIAL_WORKFLOW, status } from '../constants/publishModes';
import { loadEntry, entryDeleted, getMediaAssets, createDraftFromEntry, loadEntries, getSerializedEntry } from './entries';
import { createAssetProxy } from '../valueObjects/AssetProxy';
import { addAssets } from './media';
import { loadMedia } from './mediaLibrary';
import ValidationErrorTypes from '../constants/validationErrorTypes';
import { navigateToEntry } from '../routing/history';
import { addNotification } from './notifications';
/*
 * Constant Declarations
 */
export const UNPUBLISHED_ENTRY_REQUEST = 'UNPUBLISHED_ENTRY_REQUEST';
export const UNPUBLISHED_ENTRY_SUCCESS = 'UNPUBLISHED_ENTRY_SUCCESS';
export const UNPUBLISHED_ENTRY_REDIRECT = 'UNPUBLISHED_ENTRY_REDIRECT';
export const UNPUBLISHED_ENTRIES_REQUEST = 'UNPUBLISHED_ENTRIES_REQUEST';
export const UNPUBLISHED_ENTRIES_SUCCESS = 'UNPUBLISHED_ENTRIES_SUCCESS';
export const UNPUBLISHED_ENTRIES_FAILURE = 'UNPUBLISHED_ENTRIES_FAILURE';
export const UNPUBLISHED_ENTRY_PERSIST_REQUEST = 'UNPUBLISHED_ENTRY_PERSIST_REQUEST';
export const UNPUBLISHED_ENTRY_PERSIST_SUCCESS = 'UNPUBLISHED_ENTRY_PERSIST_SUCCESS';
export const UNPUBLISHED_ENTRY_PERSIST_FAILURE = 'UNPUBLISHED_ENTRY_PERSIST_FAILURE';
export const UNPUBLISHED_ENTRY_STATUS_CHANGE_REQUEST = 'UNPUBLISHED_ENTRY_STATUS_CHANGE_REQUEST';
export const UNPUBLISHED_ENTRY_STATUS_CHANGE_SUCCESS = 'UNPUBLISHED_ENTRY_STATUS_CHANGE_SUCCESS';
export const UNPUBLISHED_ENTRY_STATUS_CHANGE_FAILURE = 'UNPUBLISHED_ENTRY_STATUS_CHANGE_FAILURE';
export const UNPUBLISHED_ENTRY_PUBLISH_REQUEST = 'UNPUBLISHED_ENTRY_PUBLISH_REQUEST';
export const UNPUBLISHED_ENTRY_PUBLISH_SUCCESS = 'UNPUBLISHED_ENTRY_PUBLISH_SUCCESS';
export const UNPUBLISHED_ENTRY_PUBLISH_FAILURE = 'UNPUBLISHED_ENTRY_PUBLISH_FAILURE';
export const UNPUBLISHED_ENTRY_DELETE_REQUEST = 'UNPUBLISHED_ENTRY_DELETE_REQUEST';
export const UNPUBLISHED_ENTRY_DELETE_SUCCESS = 'UNPUBLISHED_ENTRY_DELETE_SUCCESS';
export const UNPUBLISHED_ENTRY_DELETE_FAILURE = 'UNPUBLISHED_ENTRY_DELETE_FAILURE';

/*
 * Simple Action Creators (Internal)
 */

function unpublishedEntryLoading(collection, slug) {
  return {
    type: UNPUBLISHED_ENTRY_REQUEST,
    payload: {
      collection: collection.get('name'),
      slug
    }
  };
}
function unpublishedEntryLoaded(collection, entry) {
  return {
    type: UNPUBLISHED_ENTRY_SUCCESS,
    payload: {
      collection: collection.get('name'),
      entry
    }
  };
}
function unpublishedEntryRedirected(collection, slug) {
  return {
    type: UNPUBLISHED_ENTRY_REDIRECT,
    payload: {
      collection: collection.get('name'),
      slug
    }
  };
}
function unpublishedEntriesLoading() {
  return {
    type: UNPUBLISHED_ENTRIES_REQUEST
  };
}
function unpublishedEntriesLoaded(entries, pagination) {
  return {
    type: UNPUBLISHED_ENTRIES_SUCCESS,
    payload: {
      entries,
      pages: pagination
    }
  };
}
function unpublishedEntriesFailed(error) {
  return {
    type: UNPUBLISHED_ENTRIES_FAILURE,
    error: 'Failed to load entries',
    payload: error
  };
}
function unpublishedEntryPersisting(collection, slug) {
  return {
    type: UNPUBLISHED_ENTRY_PERSIST_REQUEST,
    payload: {
      collection: collection.get('name'),
      slug
    }
  };
}
function unpublishedEntryPersisted(collection, entry) {
  return {
    type: UNPUBLISHED_ENTRY_PERSIST_SUCCESS,
    payload: {
      collection: collection.get('name'),
      entry
    }
  };
}
function unpublishedEntryPersistedFail(error, collection, slug) {
  return {
    type: UNPUBLISHED_ENTRY_PERSIST_FAILURE,
    payload: {
      error,
      collection: collection.get('name'),
      slug
    },
    error
  };
}
function unpublishedEntryStatusChangeRequest(collection, slug) {
  return {
    type: UNPUBLISHED_ENTRY_STATUS_CHANGE_REQUEST,
    payload: {
      collection,
      slug
    }
  };
}
function unpublishedEntryStatusChangePersisted(collection, slug, newStatus) {
  return {
    type: UNPUBLISHED_ENTRY_STATUS_CHANGE_SUCCESS,
    payload: {
      collection,
      slug,
      newStatus
    }
  };
}
function unpublishedEntryStatusChangeError(collection, slug) {
  return {
    type: UNPUBLISHED_ENTRY_STATUS_CHANGE_FAILURE,
    payload: {
      collection,
      slug
    }
  };
}
function unpublishedEntryPublishRequest(collection, slug) {
  return {
    type: UNPUBLISHED_ENTRY_PUBLISH_REQUEST,
    payload: {
      collection,
      slug
    }
  };
}
function unpublishedEntryPublished(collection, slug) {
  return {
    type: UNPUBLISHED_ENTRY_PUBLISH_SUCCESS,
    payload: {
      collection,
      slug
    }
  };
}
function unpublishedEntryPublishError(collection, slug) {
  return {
    type: UNPUBLISHED_ENTRY_PUBLISH_FAILURE,
    payload: {
      collection,
      slug
    }
  };
}
function unpublishedEntryDeleteRequest(collection, slug) {
  return {
    type: UNPUBLISHED_ENTRY_DELETE_REQUEST,
    payload: {
      collection,
      slug
    }
  };
}
function unpublishedEntryDeleted(collection, slug) {
  return {
    type: UNPUBLISHED_ENTRY_DELETE_SUCCESS,
    payload: {
      collection,
      slug
    }
  };
}
function unpublishedEntryDeleteError(collection, slug) {
  return {
    type: UNPUBLISHED_ENTRY_DELETE_FAILURE,
    payload: {
      collection,
      slug
    }
  };
}

/*
 * Exported Thunk Action Creators
 */

export function loadUnpublishedEntry(collection, slug) {
  return async (dispatch, getState) => {
    const state = getState();
    const backend = currentBackend(state.config);
    const entriesLoaded = _get(state.editorialWorkflow.toJS(), 'pages.ids', false);
    //run possible unpublishedEntries migration
    if (!entriesLoaded) {
      try {
        const {
          entries,
          pagination
        } = await backend.unpublishedEntries(state.collections);
        dispatch(unpublishedEntriesLoaded(entries, pagination));
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
    dispatch(unpublishedEntryLoading(collection, slug));
    try {
      const entry = await backend.unpublishedEntry(state, collection, slug);
      const assetProxies = await Promise.all(entry.mediaFiles.filter(file => file.draft).map(({
        url,
        file,
        path
      }) => createAssetProxy({
        path,
        url,
        file
      })));
      dispatch(addAssets(assetProxies));
      dispatch(unpublishedEntryLoaded(collection, entry));
      dispatch(createDraftFromEntry(entry));
    } catch (error) {
      if (error.name === EDITORIAL_WORKFLOW_ERROR && error.notUnderEditorialWorkflow) {
        dispatch(unpublishedEntryRedirected(collection, slug));
        dispatch(loadEntry(collection, slug));
      } else {
        dispatch(addNotification({
          message: {
            key: 'ui.toast.onFailToLoadEntries',
            details: error
          },
          type: 'error',
          dismissAfter: 8000
        }));
      }
    }
  };
}
export function loadUnpublishedEntries(collections) {
  return (dispatch, getState) => {
    const state = getState();
    const backend = currentBackend(state.config);
    const entriesLoaded = _get(state.editorialWorkflow.toJS(), 'pages.ids', false);
    if (state.config.publish_mode !== EDITORIAL_WORKFLOW || entriesLoaded) {
      return;
    }
    dispatch(unpublishedEntriesLoading());
    backend.unpublishedEntries(collections).then(response => dispatch(unpublishedEntriesLoaded(response.entries, response.pagination))).catch(error => {
      dispatch(addNotification({
        message: {
          key: 'ui.toast.onFailToLoadEntries',
          details: error
        },
        type: 'error',
        dismissAfter: 8000
      }));
      dispatch(unpublishedEntriesFailed(error));
      Promise.reject(error);
    });
  };
}
export function persistUnpublishedEntry(collection, existingUnpublishedEntry) {
  return async (dispatch, getState) => {
    const state = getState();
    const entryDraft = state.entryDraft;
    const fieldsErrors = entryDraft.get('fieldsErrors');
    const unpublishedSlugs = selectUnpublishedSlugs(state, collection.get('name'));
    const publishedSlugs = selectPublishedSlugs(state, collection.get('name'));
    const usedSlugs = publishedSlugs.concat(unpublishedSlugs);
    const entriesLoaded = _get(state.editorialWorkflow.toJS(), 'pages.ids', false);

    //load unpublishedEntries
    !entriesLoaded && dispatch(loadUnpublishedEntries(state.collections));

    // Early return if draft contains validation errors
    if (!fieldsErrors.isEmpty()) {
      const hasPresenceErrors = fieldsErrors.some(errors => errors.some(error => error.type && error.type === ValidationErrorTypes.PRESENCE));
      if (hasPresenceErrors) {
        dispatch(addNotification({
          message: {
            key: 'ui.toast.missingRequiredField'
          },
          type: 'error',
          dismissAfter: 8000
        }));
      }
      return Promise.reject();
    }
    const backend = currentBackend(state.config);
    const entry = entryDraft.get('entry');
    const assetProxies = getMediaAssets({
      entry
    });
    const serializedEntry = getSerializedEntry(collection, entry);
    const serializedEntryDraft = entryDraft.set('entry', serializedEntry);
    dispatch(unpublishedEntryPersisting(collection, entry.get('slug')));
    const persistAction = existingUnpublishedEntry ? backend.persistUnpublishedEntry : backend.persistEntry;
    try {
      const newSlug = await persistAction.call(backend, {
        config: state.config,
        collection,
        entryDraft: serializedEntryDraft,
        assetProxies,
        usedSlugs
      });
      dispatch(addNotification({
        message: {
          key: 'ui.toast.entrySaved'
        },
        type: 'success',
        dismissAfter: 4000
      }));
      dispatch(unpublishedEntryPersisted(collection, serializedEntry));
      if (entry.get('slug') !== newSlug) {
        await dispatch(loadUnpublishedEntry(collection, newSlug));
        navigateToEntry(collection.get('name'), newSlug);
      }
    } catch (error) {
      dispatch(addNotification({
        message: {
          key: 'ui.toast.onFailToPersist',
          details: error
        },
        type: 'error',
        dismissAfter: 8000
      }));
      return Promise.reject(dispatch(unpublishedEntryPersistedFail(error, collection, entry.get('slug'))));
    }
  };
}
export function updateUnpublishedEntryStatus(collection, slug, oldStatus, newStatus) {
  return (dispatch, getState) => {
    if (oldStatus === newStatus) return;
    const state = getState();
    const backend = currentBackend(state.config);
    dispatch(unpublishedEntryStatusChangeRequest(collection, slug));
    backend.updateUnpublishedEntryStatus(collection, slug, newStatus).then(() => {
      dispatch(addNotification({
        message: {
          key: 'ui.toast.entryUpdated'
        },
        type: 'success',
        dismissAfter: 4000
      }));
      dispatch(unpublishedEntryStatusChangePersisted(collection, slug, newStatus));
    }).catch(error => {
      dispatch(addNotification({
        message: {
          key: 'ui.toast.onFailToUpdateStatus',
          details: error
        },
        type: 'error',
        dismissAfter: 8000
      }));
      dispatch(unpublishedEntryStatusChangeError(collection, slug));
    });
  };
}
export function deleteUnpublishedEntry(collection, slug) {
  return (dispatch, getState) => {
    const state = getState();
    const backend = currentBackend(state.config);
    dispatch(unpublishedEntryDeleteRequest(collection, slug));
    return backend.deleteUnpublishedEntry(collection, slug).then(() => {
      dispatch(addNotification({
        message: {
          key: 'ui.toast.onDeleteUnpublishedChanges'
        },
        type: 'success',
        dismissAfter: 4000
      }));
      dispatch(unpublishedEntryDeleted(collection, slug));
    }).catch(error => {
      dispatch(addNotification({
        message: {
          key: 'ui.toast.onDeleteUnpublishedChanges',
          details: error
        },
        type: 'error',
        dismissAfter: 8000
      }));
      dispatch(unpublishedEntryDeleteError(collection, slug));
    });
  };
}
export function publishUnpublishedEntry(collectionName, slug) {
  return async (dispatch, getState) => {
    const state = getState();
    const collections = state.collections;
    const backend = currentBackend(state.config);
    const entry = selectUnpublishedEntry(state, collectionName, slug);
    dispatch(unpublishedEntryPublishRequest(collectionName, slug));
    try {
      await backend.publishUnpublishedEntry(entry);
      // re-load media after entry was published
      dispatch(loadMedia());
      dispatch(addNotification({
        message: {
          key: 'ui.toast.entryPublished'
        },
        type: 'success',
        dismissAfter: 4000
      }));
      dispatch(unpublishedEntryPublished(collectionName, slug));
      const collection = collections.get(collectionName);
      if (collection.has('nested')) {
        dispatch(loadEntries(collection));
        const newSlug = slugFromCustomPath(collection, entry.get('path'));
        loadEntry(collection, newSlug);
        if (slug !== newSlug && selectEditingDraft(state.entryDraft)) {
          navigateToEntry(collection.get('name'), newSlug);
        }
      } else {
        return dispatch(loadEntry(collection, slug));
      }
    } catch (error) {
      dispatch(addNotification({
        message: {
          key: 'ui.toast.onFailToPublishEntry',
          details: error
        },
        type: 'error',
        dismissAfter: 8000
      }));
      dispatch(unpublishedEntryPublishError(collectionName, slug));
    }
  };
}
export function unpublishPublishedEntry(collection, slug) {
  return (dispatch, getState) => {
    const state = getState();
    const backend = currentBackend(state.config);
    const entry = selectEntry(state, collection.get('name'), slug);
    const entryDraft = Map().set('entry', entry);
    dispatch(unpublishedEntryPersisting(collection, slug));
    return backend.deleteEntry(state, collection, slug).then(() => backend.persistEntry({
      config: state.config,
      collection,
      entryDraft,
      assetProxies: [],
      usedSlugs: List(),
      status: status.get('PENDING_PUBLISH')
    })).then(() => {
      dispatch(unpublishedEntryPersisted(collection, entry));
      dispatch(entryDeleted(collection, slug));
      dispatch(loadUnpublishedEntry(collection, slug));
      dispatch(addNotification({
        message: {
          key: 'ui.toast.entryUnpublished'
        },
        type: 'success',
        dismissAfter: 4000
      }));
    }).catch(error => {
      dispatch(addNotification({
        message: {
          key: 'ui.toast.onFailToUnpublishEntry',
          details: error
        },
        type: 'error',
        dismissAfter: 8000
      }));
      dispatch(unpublishedEntryPersistedFail(error, collection, entry.get('slug')));
    });
  };
}