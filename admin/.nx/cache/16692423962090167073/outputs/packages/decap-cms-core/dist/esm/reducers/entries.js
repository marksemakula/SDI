import _groupBy from "lodash/groupBy";
import _orderBy from "lodash/orderBy";
import _set from "lodash/set";
import _sortBy from "lodash/sortBy";
import _once from "lodash/once";
import _trim from "lodash/trim";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { Map, List, fromJS, OrderedMap, Set } from 'immutable';
import { dirname, join } from 'path';
import { isAbsolutePath, basename } from 'decap-cms-lib-util';
import { stringTemplate } from 'decap-cms-lib-widgets';
import { SortDirection } from '../types/redux';
import { folderFormatter } from '../lib/formatters';
import { selectSortDataPath } from './collections';
import { SEARCH_ENTRIES_SUCCESS } from '../actions/search';
import { ENTRY_REQUEST, ENTRY_SUCCESS, ENTRY_FAILURE, ENTRIES_REQUEST, ENTRIES_SUCCESS, ENTRIES_FAILURE, ENTRY_DELETE_SUCCESS, SORT_ENTRIES_REQUEST, SORT_ENTRIES_SUCCESS, SORT_ENTRIES_FAILURE, FILTER_ENTRIES_REQUEST, FILTER_ENTRIES_SUCCESS, FILTER_ENTRIES_FAILURE, GROUP_ENTRIES_REQUEST, GROUP_ENTRIES_SUCCESS, GROUP_ENTRIES_FAILURE, CHANGE_VIEW_STYLE } from '../actions/entries';
import { VIEW_STYLE_LIST } from '../constants/collectionViews';
import { joinUrlPath } from '../lib/urlHelper';
const {
  keyToPathArray
} = stringTemplate;
let collection;
let loadedEntries;
let append;
let page;
let slug;
const storageSortKey = 'decap-cms.entries.sort';
const viewStyleKey = 'decap-cms.entries.viewStyle';
const loadSort = _once(() => {
  const sortString = localStorage.getItem(storageSortKey);
  if (sortString) {
    try {
      const sort = JSON.parse(sortString);
      let map = Map();
      Object.entries(sort).forEach(([collection, sort]) => {
        let orderedMap = OrderedMap();
        _sortBy(Object.values(sort), ['index']).forEach(value => {
          const {
            key,
            direction
          } = value;
          orderedMap = orderedMap.set(key, fromJS({
            key,
            direction
          }));
        });
        map = map.set(collection, orderedMap);
      });
      return map;
    } catch (e) {
      return Map();
    }
  }
  return Map();
});
function clearSort() {
  localStorage.removeItem(storageSortKey);
}
function persistSort(sort) {
  if (sort) {
    const storageSort = {};
    sort.keySeq().forEach(key => {
      const collection = key;
      const sortObjects = sort.get(collection).valueSeq().toJS().map((value, index) => _objectSpread(_objectSpread({}, value), {}, {
        index
      }));
      sortObjects.forEach(value => {
        _set(storageSort, [collection, value.key], value);
      });
    });
    localStorage.setItem(storageSortKey, JSON.stringify(storageSort));
  } else {
    clearSort();
  }
}
const loadViewStyle = _once(() => {
  const viewStyle = localStorage.getItem(viewStyleKey);
  if (viewStyle) {
    return viewStyle;
  }
  localStorage.setItem(viewStyleKey, VIEW_STYLE_LIST);
  return VIEW_STYLE_LIST;
});
function clearViewStyle() {
  localStorage.removeItem(viewStyleKey);
}
function persistViewStyle(viewStyle) {
  if (viewStyle) {
    localStorage.setItem(viewStyleKey, viewStyle);
  } else {
    clearViewStyle();
  }
}
function entries(state = Map({
  entities: Map(),
  pages: Map(),
  sort: loadSort(),
  viewStyle: loadViewStyle()
}), action) {
  switch (action.type) {
    case ENTRY_REQUEST:
      {
        const payload = action.payload;
        return state.setIn(['entities', `${payload.collection}.${payload.slug}`, 'isFetching'], true);
      }
    case ENTRY_SUCCESS:
      {
        const payload = action.payload;
        collection = payload.collection;
        slug = payload.entry.slug;
        return state.withMutations(map => {
          map.setIn(['entities', `${collection}.${slug}`], fromJS(payload.entry));
          const ids = map.getIn(['pages', collection, 'ids'], List());
          if (!ids.includes(slug)) {
            map.setIn(['pages', collection, 'ids'], ids.unshift(slug));
          }
        });
      }
    case ENTRIES_REQUEST:
      {
        const payload = action.payload;
        const newState = state.withMutations(map => {
          map.setIn(['pages', payload.collection, 'isFetching'], true);
        });
        return newState;
      }
    case ENTRIES_SUCCESS:
      {
        const payload = action.payload;
        collection = payload.collection;
        loadedEntries = payload.entries;
        append = payload.append;
        page = payload.page;
        return state.withMutations(map => {
          loadedEntries.forEach(entry => map.setIn(['entities', `${collection}.${entry.slug}`], fromJS(entry).set('isFetching', false)));
          const ids = List(loadedEntries.map(entry => entry.slug));
          map.setIn(['pages', collection], Map({
            page,
            ids: append ? map.getIn(['pages', collection, 'ids'], List()).concat(ids) : ids
          }));
        });
      }
    case ENTRIES_FAILURE:
      return state.setIn(['pages', action.meta.collection, 'isFetching'], false);
    case ENTRY_FAILURE:
      {
        const payload = action.payload;
        return state.withMutations(map => {
          map.setIn(['entities', `${payload.collection}.${payload.slug}`, 'isFetching'], false);
          map.setIn(['entities', `${payload.collection}.${payload.slug}`, 'error'], payload.error.message);
        });
      }
    case SEARCH_ENTRIES_SUCCESS:
      {
        const payload = action.payload;
        loadedEntries = payload.entries;
        return state.withMutations(map => {
          loadedEntries.forEach(entry => map.setIn(['entities', `${entry.collection}.${entry.slug}`], fromJS(entry).set('isFetching', false)));
        });
      }
    case ENTRY_DELETE_SUCCESS:
      {
        const payload = action.payload;
        return state.withMutations(map => {
          map.deleteIn(['entities', `${payload.collectionName}.${payload.entrySlug}`]);
          map.updateIn(['pages', payload.collectionName, 'ids'], ids => ids.filter(id => id !== payload.entrySlug));
        });
      }
    case SORT_ENTRIES_REQUEST:
      {
        const payload = action.payload;
        const {
          collection,
          key,
          direction
        } = payload;
        const newState = state.withMutations(map => {
          const sort = OrderedMap({
            [key]: Map({
              key,
              direction
            })
          });
          map.setIn(['sort', collection], sort);
          map.setIn(['pages', collection, 'isFetching'], true);
          map.deleteIn(['pages', collection, 'page']);
        });
        persistSort(newState.get('sort'));
        return newState;
      }
    case GROUP_ENTRIES_SUCCESS:
    case FILTER_ENTRIES_SUCCESS:
    case SORT_ENTRIES_SUCCESS:
      {
        const payload = action.payload;
        const {
          collection,
          entries
        } = payload;
        loadedEntries = entries;
        const newState = state.withMutations(map => {
          loadedEntries.forEach(entry => map.setIn(['entities', `${entry.collection}.${entry.slug}`], fromJS(entry).set('isFetching', false)));
          map.setIn(['pages', collection, 'isFetching'], false);
          const ids = List(loadedEntries.map(entry => entry.slug));
          map.setIn(['pages', collection], Map({
            page: 1,
            ids
          }));
        });
        return newState;
      }
    case SORT_ENTRIES_FAILURE:
      {
        const payload = action.payload;
        const {
          collection,
          key
        } = payload;
        const newState = state.withMutations(map => {
          map.deleteIn(['sort', collection, key]);
          map.setIn(['pages', collection, 'isFetching'], false);
        });
        persistSort(newState.get('sort'));
        return newState;
      }
    case FILTER_ENTRIES_REQUEST:
      {
        const payload = action.payload;
        const {
          collection,
          filter
        } = payload;
        const newState = state.withMutations(map => {
          const current = map.getIn(['filter', collection, filter.id], fromJS(filter));
          map.setIn(['filter', collection, current.get('id')], current.set('active', !current.get('active')));
        });
        return newState;
      }
    case FILTER_ENTRIES_FAILURE:
      {
        const payload = action.payload;
        const {
          collection,
          filter
        } = payload;
        const newState = state.withMutations(map => {
          map.deleteIn(['filter', collection, filter.id]);
          map.setIn(['pages', collection, 'isFetching'], false);
        });
        return newState;
      }
    case GROUP_ENTRIES_REQUEST:
      {
        const payload = action.payload;
        const {
          collection,
          group
        } = payload;
        const newState = state.withMutations(map => {
          const current = map.getIn(['group', collection, group.id], fromJS(group));
          map.deleteIn(['group', collection]);
          map.setIn(['group', collection, current.get('id')], current.set('active', !current.get('active')));
        });
        return newState;
      }
    case GROUP_ENTRIES_FAILURE:
      {
        const payload = action.payload;
        const {
          collection,
          group
        } = payload;
        const newState = state.withMutations(map => {
          map.deleteIn(['group', collection, group.id]);
          map.setIn(['pages', collection, 'isFetching'], false);
        });
        return newState;
      }
    case CHANGE_VIEW_STYLE:
      {
        const payload = action.payload;
        const {
          style
        } = payload;
        const newState = state.withMutations(map => {
          map.setIn(['viewStyle'], style);
        });
        persistViewStyle(newState.get('viewStyle'));
        return newState;
      }
    default:
      return state;
  }
}
export function selectEntriesSort(entries, collection) {
  const sort = entries.get('sort');
  return sort === null || sort === void 0 ? void 0 : sort.get(collection);
}
export function selectEntriesFilter(entries, collection) {
  const filter = entries.get('filter');
  return (filter === null || filter === void 0 ? void 0 : filter.get(collection)) || Map();
}
export function selectEntriesGroup(entries, collection) {
  const group = entries.get('group');
  return (group === null || group === void 0 ? void 0 : group.get(collection)) || Map();
}
export function selectEntriesGroupField(entries, collection) {
  const groups = selectEntriesGroup(entries, collection);
  const value = groups === null || groups === void 0 ? void 0 : groups.valueSeq().find(v => (v === null || v === void 0 ? void 0 : v.get('active')) === true);
  return value;
}
export function selectEntriesSortFields(entries, collection) {
  const sort = selectEntriesSort(entries, collection);
  const values = (sort === null || sort === void 0 ? void 0 : sort.valueSeq().filter(v => (v === null || v === void 0 ? void 0 : v.get('direction')) !== SortDirection.None).toArray()) || [];
  return values;
}
export function selectEntriesFilterFields(entries, collection) {
  const filter = selectEntriesFilter(entries, collection);
  const values = (filter === null || filter === void 0 ? void 0 : filter.valueSeq().filter(v => (v === null || v === void 0 ? void 0 : v.get('active')) === true).toArray()) || [];
  return values;
}
export function selectViewStyle(entries) {
  return entries.get('viewStyle');
}
export function selectEntry(state, collection, slug) {
  return state.getIn(['entities', `${collection}.${slug}`]);
}
export function selectPublishedSlugs(state, collection) {
  return state.getIn(['pages', collection, 'ids'], List());
}
function getPublishedEntries(state, collectionName) {
  const slugs = selectPublishedSlugs(state, collectionName);
  const entries = slugs && slugs.map(slug => selectEntry(state, collectionName, slug));
  return entries;
}
export function selectEntries(state, collection) {
  const collectionName = collection.get('name');
  let entries = getPublishedEntries(state, collectionName);
  const sortFields = selectEntriesSortFields(state, collectionName);
  if (sortFields && sortFields.length > 0) {
    const keys = sortFields.map(v => selectSortDataPath(collection, v.get('key')));
    const orders = sortFields.map(v => v.get('direction') === SortDirection.Ascending ? 'asc' : 'desc');
    entries = fromJS(_orderBy(entries.toJS(), keys, orders));
  }
  const filters = selectEntriesFilterFields(state, collectionName);
  if (filters && filters.length > 0) {
    entries = entries.filter(e => {
      const allMatched = filters.every(f => {
        const pattern = f.get('pattern');
        const field = f.get('field');
        const data = e.get('data') || Map();
        const toMatch = data.getIn(keyToPathArray(field));
        const matched = toMatch !== undefined && new RegExp(String(pattern)).test(String(toMatch));
        return matched;
      });
      return allMatched;
    }).toList();
  }
  return entries;
}
function getGroup(entry, selectedGroup) {
  const label = selectedGroup.get('label');
  const field = selectedGroup.get('field');
  const fieldData = entry.getIn(['data', ...keyToPathArray(field)]);
  if (fieldData === undefined) {
    return {
      id: 'missing_value',
      label,
      value: fieldData
    };
  }
  const dataAsString = String(fieldData);
  if (selectedGroup.has('pattern')) {
    const pattern = selectedGroup.get('pattern');
    let value = '';
    try {
      const regex = new RegExp(pattern);
      const matched = dataAsString.match(regex);
      if (matched) {
        value = matched[0];
      }
    } catch (e) {
      console.warn(`Invalid view group pattern '${pattern}' for field '${field}'`, e);
    }
    return {
      id: `${label}${value}`,
      label,
      value
    };
  }
  return {
    id: `${label}${fieldData}`,
    label,
    value: typeof fieldData === 'boolean' ? fieldData : dataAsString
  };
}
export function selectGroups(state, collection) {
  const collectionName = collection.get('name');
  const entries = getPublishedEntries(state, collectionName);
  const selectedGroup = selectEntriesGroupField(state, collectionName);
  if (selectedGroup === undefined) {
    return [];
  }
  let groups = {};
  const groupedEntries = _groupBy(entries.toArray(), entry => {
    const group = getGroup(entry, selectedGroup);
    groups = _objectSpread(_objectSpread({}, groups), {}, {
      [group.id]: group
    });
    return group.id;
  });
  const groupsArray = Object.entries(groupedEntries).map(([id, entries]) => {
    return _objectSpread(_objectSpread({}, groups[id]), {}, {
      paths: Set(entries.map(entry => entry.get('path')))
    });
  });
  return groupsArray;
}
export function selectEntryByPath(state, collection, path) {
  const slugs = selectPublishedSlugs(state, collection);
  const entries = slugs && slugs.map(slug => selectEntry(state, collection, slug));
  return entries && entries.find(e => (e === null || e === void 0 ? void 0 : e.get('path')) === path);
}
export function selectEntriesLoaded(state, collection) {
  return !!state.getIn(['pages', collection]);
}
export function selectIsFetching(state, collection) {
  return state.getIn(['pages', collection, 'isFetching'], false);
}
const DRAFT_MEDIA_FILES = 'DRAFT_MEDIA_FILES';
function getFileField(collectionFiles, slug) {
  const file = collectionFiles.find(f => (f === null || f === void 0 ? void 0 : f.get('name')) === slug);
  return file;
}
function hasCustomFolder(folderKey, collection, slug, field) {
  if (!collection) {
    return false;
  }
  if (field && field.has(folderKey)) {
    return true;
  }
  if (collection.has('files')) {
    const file = getFileField(collection.get('files'), slug);
    if (file && file.has(folderKey)) {
      return true;
    }
  }
  if (collection.has(folderKey)) {
    return true;
  }
  return false;
}
function traverseFields(folderKey, config, collection, entryMap, field, fields, currentFolder) {
  const matchedField = fields.filter(f => f === field)[0];
  if (matchedField) {
    return folderFormatter(matchedField.has(folderKey) ? matchedField.get(folderKey) : `{{${folderKey}}}`, entryMap, collection, currentFolder, folderKey, config.slug);
  }
  for (let f of fields) {
    if (!f.has(folderKey)) {
      // add identity template if doesn't exist
      f = f.set(folderKey, `{{${folderKey}}}`);
    }
    const folder = folderFormatter(f.get(folderKey), entryMap, collection, currentFolder, folderKey, config.slug);
    let fieldFolder = null;
    if (f.has('fields')) {
      fieldFolder = traverseFields(folderKey, config, collection, entryMap, field, f.get('fields').toArray(), folder);
    } else if (f.has('field')) {
      fieldFolder = traverseFields(folderKey, config, collection, entryMap, field, [f.get('field')], folder);
    } else if (f.has('types')) {
      fieldFolder = traverseFields(folderKey, config, collection, entryMap, field, f.get('types').toArray(), folder);
    }
    if (fieldFolder != null) {
      return fieldFolder;
    }
  }
  return null;
}
function evaluateFolder(folderKey, config, collection, entryMap, field) {
  let currentFolder = config[folderKey];

  // add identity template if doesn't exist
  if (!collection.has(folderKey)) {
    collection = collection.set(folderKey, `{{${folderKey}}}`);
  }
  if (collection.has('files')) {
    // files collection evaluate the collection template
    // then move on to the specific file configuration denoted by the slug
    currentFolder = folderFormatter(collection.get(folderKey), entryMap, collection, currentFolder, folderKey, config.slug);
    let file = getFileField(collection.get('files'), entryMap === null || entryMap === void 0 ? void 0 : entryMap.get('slug'));
    if (file) {
      if (!file.has(folderKey)) {
        // add identity template if doesn't exist
        file = file.set(folderKey, `{{${folderKey}}}`);
      }

      // evaluate the file template and keep evaluating until we match our field
      currentFolder = folderFormatter(file.get(folderKey), entryMap, collection, currentFolder, folderKey, config.slug);
      if (field) {
        const fieldFolder = traverseFields(folderKey, config, collection, entryMap, field, file.get('fields').toArray(), currentFolder);
        if (fieldFolder !== null) {
          currentFolder = fieldFolder;
        }
      }
    }
  } else {
    // folder collection, evaluate the collection template
    // and keep evaluating until we match our field
    currentFolder = folderFormatter(collection.get(folderKey), entryMap, collection, currentFolder, folderKey, config.slug);
    if (field) {
      const fieldFolder = traverseFields(folderKey, config, collection, entryMap, field, collection.get('fields').toArray(), currentFolder);
      if (fieldFolder !== null) {
        currentFolder = fieldFolder;
      }
    }
  }
  return currentFolder;
}
export function selectMediaFolder(config, collection, entryMap, field) {
  const name = 'media_folder';
  let mediaFolder = config[name];
  const customFolder = hasCustomFolder(name, collection, entryMap === null || entryMap === void 0 ? void 0 : entryMap.get('slug'), field);
  if (customFolder) {
    const folder = evaluateFolder(name, config, collection, entryMap, field);
    if (folder.startsWith('/')) {
      // return absolute paths as is
      mediaFolder = join(folder);
    } else {
      const entryPath = entryMap === null || entryMap === void 0 ? void 0 : entryMap.get('path');
      mediaFolder = entryPath ? join(dirname(entryPath), folder) : join(collection.get('folder'), DRAFT_MEDIA_FILES);
    }
  }
  return _trim(mediaFolder, '/');
}
export function selectMediaFilePath(config, collection, entryMap, mediaPath, field) {
  if (isAbsolutePath(mediaPath)) {
    return mediaPath;
  }
  const mediaFolder = selectMediaFolder(config, collection, entryMap, field);
  return join(mediaFolder, basename(mediaPath));
}
export function selectMediaFilePublicPath(config, collection, mediaPath, entryMap, field) {
  if (isAbsolutePath(mediaPath)) {
    return mediaPath;
  }
  const name = 'public_folder';
  let publicFolder = config[name];
  const customFolder = hasCustomFolder(name, collection, entryMap === null || entryMap === void 0 ? void 0 : entryMap.get('slug'), field);
  if (customFolder) {
    publicFolder = evaluateFolder(name, config, collection, entryMap, field);
  }
  if (isAbsolutePath(publicFolder)) {
    return joinUrlPath(publicFolder, basename(mediaPath));
  }
  return join(publicFolder, basename(mediaPath));
}
export function selectEditingDraft(state) {
  const entry = state.get('entry');
  const workflowDraft = entry && !entry.isEmpty();
  return workflowDraft;
}
export default entries;