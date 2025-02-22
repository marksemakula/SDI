import _trimStart from "lodash/trimStart";
import _trimEnd from "lodash/trimEnd";
import _partialRight from "lodash/partialRight";
import _flow from "lodash/flow";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { stringTemplate } from 'decap-cms-lib-widgets';
import { stripIndent } from 'common-tags';
import { selectIdentifier, selectField, selectInferredField, getFileFromSlug } from '../reducers/collections';
import { sanitizeSlug } from './urlHelper';
import { FILES } from '../constants/collectionTypes';
import { COMMIT_AUTHOR, COMMIT_DATE } from '../constants/commitProps';
const {
  compileStringTemplate,
  parseDateFromEntry,
  SLUG_MISSING_REQUIRED_DATE,
  keyToPathArray,
  addFileTemplateFields
} = stringTemplate;
const commitMessageTemplates = {
  create: 'Create {{collection}} “{{slug}}”',
  update: 'Update {{collection}} “{{slug}}”',
  delete: 'Delete {{collection}} “{{slug}}”',
  uploadMedia: 'Upload “{{path}}”',
  deleteMedia: 'Delete “{{path}}”',
  openAuthoring: '{{message}}'
};
const variableRegex = /\{\{([^}]+)\}\}/g;
export function commitMessageFormatter(type, config, {
  slug,
  path,
  collection,
  authorLogin,
  authorName
}, isOpenAuthoring) {
  const templates = _objectSpread(_objectSpread({}, commitMessageTemplates), config.backend.commit_messages || {});
  const commitMessage = templates[type].replace(variableRegex, (_, variable) => {
    switch (variable) {
      case 'slug':
        return slug || '';
      case 'path':
        return path || '';
      case 'collection':
        return collection ? collection.get('label_singular') || collection.get('label') : '';
      case 'author-login':
        return authorLogin || '';
      case 'author-name':
        return authorName || '';
      default:
        console.warn(`Ignoring unknown variable “${variable}” in commit message template.`);
        return '';
    }
  });
  if (!isOpenAuthoring) {
    return commitMessage;
  }
  const message = templates.openAuthoring.replace(variableRegex, (_, variable) => {
    switch (variable) {
      case 'message':
        return commitMessage;
      case 'author-login':
        return authorLogin || '';
      case 'author-name':
        return authorName || '';
      default:
        console.warn(`Ignoring unknown variable “${variable}” in open authoring message template.`);
        return '';
    }
  });
  return message;
}
export function prepareSlug(slug) {
  return slug.trim()
  // Convert slug to lower-case
  .toLocaleLowerCase()

  // Remove single quotes.
  .replace(/[']/g, '')

  // Replace periods with dashes.
  .replace(/[.]/g, '-');
}
export function getProcessSegment(slugConfig, ignoreValues) {
  return value => ignoreValues && ignoreValues.includes(value) ? value : _flow([value => String(value), prepareSlug, _partialRight(sanitizeSlug, slugConfig)])(value);
}
export function slugFormatter(collection, entryData, slugConfig) {
  const slugTemplate = collection.get('slug') || '{{slug}}';
  const identifier = entryData.getIn(keyToPathArray(selectIdentifier(collection)));
  if (!identifier) {
    throw new Error('Collection must have a field name that is a valid entry identifier, or must have `identifier_field` set');
  }
  const processSegment = getProcessSegment(slugConfig);
  const date = new Date();
  const slug = compileStringTemplate(slugTemplate, date, identifier, entryData, processSegment);
  if (!collection.has('path')) {
    return slug;
  } else {
    const pathTemplate = prepareSlug(collection.get('path'));
    return compileStringTemplate(pathTemplate, date, slug, entryData, value => value === slug ? value : processSegment(value));
  }
}
export function previewUrlFormatter(baseUrl, collection, slug, entry, slugConfig) {
  /**
   * Preview URL can't be created without `baseUrl`. This makes preview URLs
   * optional for backends that don't support them.
   */
  if (!baseUrl) {
    return;
  }
  const basePath = _trimEnd(baseUrl, '/');
  const isFileCollection = collection.get('type') === FILES;
  const file = isFileCollection ? getFileFromSlug(collection, entry.get('slug')) : undefined;
  function getPathTemplate() {
    var _file$get;
    return (_file$get = file === null || file === void 0 ? void 0 : file.get('preview_path')) !== null && _file$get !== void 0 ? _file$get : collection.get('preview_path');
  }
  function getDateField() {
    var _file$get2;
    return (_file$get2 = file === null || file === void 0 ? void 0 : file.get('preview_path_date_field')) !== null && _file$get2 !== void 0 ? _file$get2 : collection.get('preview_path_date_field');
  }

  /**
   * If a `previewPath` is provided for the collection/file, use it to construct the
   * URL path.
   */
  const pathTemplate = getPathTemplate();

  /**
   * Without a `previewPath` for the collection/file (via config), the preview URL
   * will be the URL provided by the backend.
   */
  if (!pathTemplate) {
    return baseUrl;
  }
  let fields = entry.get('data');
  fields = addFileTemplateFields(entry.get('path'), fields, collection.get('folder'));
  const dateFieldName = getDateField() || selectInferredField(collection, 'date');
  const date = parseDateFromEntry(entry, dateFieldName);

  // Prepare and sanitize slug variables only, leave the rest of the
  // `preview_path` template as is.
  const processSegment = getProcessSegment(slugConfig, [fields.get('dirname')]);
  let compiledPath;
  try {
    compiledPath = compileStringTemplate(pathTemplate, date, slug, fields, processSegment);
  } catch (err) {
    // Print an error and ignore `preview_path` if both:
    //   1. Date is invalid (according to DayJs), and
    //   2. A date expression (eg. `{{year}}`) is used in `preview_path`
    if (err.name === SLUG_MISSING_REQUIRED_DATE) {
      console.error(stripIndent`
        Collection "${collection.get('name')}" configuration error:
          \`preview_path_date_field\` must be a field with a valid date. Ignoring \`preview_path\`.
      `);
      return basePath;
    }
    throw err;
  }
  const previewPath = _trimStart(compiledPath, ' /');
  return `${basePath}/${previewPath}`;
}
export function summaryFormatter(summaryTemplate, entry, collection) {
  let entryData = entry.get('data');
  const date = parseDateFromEntry(entry, selectInferredField(collection, 'date')) || null;
  const identifier = entryData.getIn(keyToPathArray(selectIdentifier(collection)));
  entryData = addFileTemplateFields(entry.get('path'), entryData, collection.get('folder'));
  // allow commit information in summary template
  if (entry.get('author') && !selectField(collection, COMMIT_AUTHOR)) {
    entryData = entryData.set(COMMIT_AUTHOR, entry.get('author'));
  }
  if (entry.get('updatedOn') && !selectField(collection, COMMIT_DATE)) {
    entryData = entryData.set(COMMIT_DATE, entry.get('updatedOn'));
  }
  const summary = compileStringTemplate(summaryTemplate, date, identifier, entryData);
  return summary;
}
export function folderFormatter(folderTemplate, entry, collection, defaultFolder, folderKey, slugConfig) {
  if (!entry || !entry.get('data')) {
    return folderTemplate;
  }
  let fields = entry.get('data').set(folderKey, defaultFolder);
  fields = addFileTemplateFields(entry.get('path'), fields, collection.get('folder'));
  const date = parseDateFromEntry(entry, selectInferredField(collection, 'date')) || null;
  const identifier = fields.getIn(keyToPathArray(selectIdentifier(collection)));
  const processSegment = getProcessSegment(slugConfig, [defaultFolder, fields.get('dirname')]);
  const mediaFolder = compileStringTemplate(folderTemplate, date, identifier, fields, processSegment);
  return mediaFolder;
}