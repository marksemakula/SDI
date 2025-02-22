import _trimStart from "lodash/trimStart";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import semaphore from 'semaphore';
import { stripIndent } from 'common-tags';
import { CURSOR_COMPATIBILITY_SYMBOL, filterByExtension, unsentRequest, basename, getBlobSHA, entriesByFolder, entriesByFiles, getMediaDisplayURL, getMediaAsBlob, unpublishedEntries, runWithLock, asyncLock, getPreviewStatus, getLargeMediaPatternsFromGitAttributesFile, getPointerFileForMediaFileObj, getLargeMediaFilteredMediaFiles, blobToFileObj, contentKeyFromBranch, generateContentKey, localForage, allEntriesByFolder, AccessTokenError, branchFromContentKey } from 'decap-cms-lib-util';
import { NetlifyAuthenticator } from 'decap-cms-lib-auth';
import AuthenticationPage from './AuthenticationPage';
import API, { API_NAME } from './API';
import { GitLfsClient } from './git-lfs-client';
const MAX_CONCURRENT_DOWNLOADS = 10;
const STATUS_PAGE = 'https://bitbucket.status.atlassian.com';
const BITBUCKET_STATUS_ENDPOINT = `${STATUS_PAGE}/api/v2/components.json`;
const BITBUCKET_OPERATIONAL_UNITS = ['API', 'Authentication and user management', 'Git LFS'];
const {
  fetchWithTimeout: fetch
} = unsentRequest;

// Implementation wrapper class
export default class BitbucketBackend {
  constructor(config, options = {}) {
    _defineProperty(this, "lock", void 0);
    _defineProperty(this, "api", void 0);
    _defineProperty(this, "updateUserCredentials", void 0);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "repo", void 0);
    _defineProperty(this, "isBranchConfigured", void 0);
    _defineProperty(this, "branch", void 0);
    _defineProperty(this, "apiRoot", void 0);
    _defineProperty(this, "baseUrl", void 0);
    _defineProperty(this, "siteId", void 0);
    _defineProperty(this, "token", void 0);
    _defineProperty(this, "mediaFolder", void 0);
    _defineProperty(this, "refreshToken", void 0);
    _defineProperty(this, "refreshedTokenPromise", void 0);
    _defineProperty(this, "authenticator", void 0);
    _defineProperty(this, "_mediaDisplayURLSem", void 0);
    _defineProperty(this, "squashMerges", void 0);
    _defineProperty(this, "cmsLabelPrefix", void 0);
    _defineProperty(this, "previewContext", void 0);
    _defineProperty(this, "largeMediaURL", void 0);
    _defineProperty(this, "_largeMediaClientPromise", void 0);
    _defineProperty(this, "authType", void 0);
    _defineProperty(this, "requestFunction", async req => {
      const token = await this.getToken();
      const authorizedRequest = unsentRequest.withHeaders({
        Authorization: `Bearer ${token}`
      }, req);
      return unsentRequest.performRequest(authorizedRequest);
    });
    _defineProperty(this, "apiRequestFunction", async req => {
      const token = this.refreshedTokenPromise ? await this.refreshedTokenPromise : this.token;
      const authorizedRequest = unsentRequest.withHeaders({
        Authorization: `Bearer ${token}`
      }, req);
      const response = await unsentRequest.performRequest(authorizedRequest);
      if (response.status === 401) {
        const json = await response.json().catch(() => null);
        if (json && json.type === 'error' && /^access token expired/i.test(json.error.message)) {
          const newToken = await this.getRefreshedAccessToken();
          const reqWithNewToken = unsentRequest.withHeaders({
            Authorization: `Bearer ${newToken}`
          }, req);
          return unsentRequest.performRequest(reqWithNewToken);
        }
      }
      return response;
    });
    this.options = _objectSpread({
      proxied: false,
      API: null,
      updateUserCredentials: async () => null,
      initialWorkflowStatus: ''
    }, options);
    if (!this.options.proxied && (config.backend.repo === null || config.backend.repo === undefined)) {
      throw new Error('The BitBucket backend needs a "repo" in the backend configuration.');
    }
    this.api = this.options.API || null;
    this.updateUserCredentials = this.options.updateUserCredentials;
    this.repo = config.backend.repo || '';
    this.branch = config.backend.branch || 'master';
    this.isBranchConfigured = config.backend.branch ? true : false;
    this.apiRoot = config.backend.api_root || 'https://api.bitbucket.org/2.0';
    this.baseUrl = config.base_url || '';
    this.siteId = config.site_id || '';
    this.largeMediaURL = config.backend.large_media_url || `https://bitbucket.org/${config.backend.repo}/info/lfs`;
    this.token = '';
    this.mediaFolder = config.media_folder;
    this.squashMerges = config.backend.squash_merges || false;
    this.cmsLabelPrefix = config.backend.cms_label_prefix || '';
    this.previewContext = config.backend.preview_context || '';
    this.lock = asyncLock();
    this.authType = config.backend.auth_type || '';
  }
  isGitBackend() {
    return true;
  }
  async status() {
    const api = await fetch(BITBUCKET_STATUS_ENDPOINT).then(res => res.json()).then(res => {
      return res['components'].filter(statusComponent => BITBUCKET_OPERATIONAL_UNITS.includes(statusComponent.name)).every(statusComponent => statusComponent.status === 'operational');
    }).catch(e => {
      console.warn('Failed getting BitBucket status', e);
      return true;
    });
    let auth = false;
    // no need to check auth if api is down
    if (api) {
      var _this$api;
      auth = (await ((_this$api = this.api) === null || _this$api === void 0 ? void 0 : _this$api.user().then(user => !!user).catch(e => {
        console.warn('Failed getting Bitbucket user', e);
        return false;
      }))) || false;
    }
    return {
      auth: {
        status: auth
      },
      api: {
        status: api,
        statusPage: STATUS_PAGE
      }
    };
  }
  authComponent() {
    return AuthenticationPage;
  }
  setUser(user) {
    this.token = user.token;
    this.api = new API({
      requestFunction: this.apiRequestFunction,
      branch: this.branch,
      repo: this.repo,
      squashMerges: this.squashMerges,
      cmsLabelPrefix: this.cmsLabelPrefix,
      initialWorkflowStatus: this.options.initialWorkflowStatus
    });
  }
  restoreUser(user) {
    return this.authenticate(user);
  }
  async authenticate(state) {
    this.token = state.token;
    if (!this.isBranchConfigured) {
      const repo = await fetch(`${this.apiRoot}/repositories/${this.repo}`, {
        headers: {
          Authorization: `token ${this.token}`
        }
      }).then(res => res.json()).catch(() => null);
      if (repo) {
        this.branch = repo.mainbranch.name;
      }
    }
    this.refreshToken = state.refresh_token;
    this.api = new API({
      requestFunction: this.apiRequestFunction,
      branch: this.branch,
      repo: this.repo,
      apiRoot: this.apiRoot,
      squashMerges: this.squashMerges,
      cmsLabelPrefix: this.cmsLabelPrefix,
      initialWorkflowStatus: this.options.initialWorkflowStatus
    });
    const isCollab = await this.api.hasWriteAccess().catch(error => {
      error.message = stripIndent`
        Repo "${this.repo}" not found.

        Please ensure the repo information is spelled correctly.

        If the repo is private, make sure you're logged into a Bitbucket account with access.
      `;
      throw error;
    });

    // Unauthorized user
    if (!isCollab) {
      throw new Error('Your BitBucket user account does not have access to this repo.');
    }
    // if (!this.isBranchConfigured) {
    //   const defaultBranchName = await getDefaultBranchName({
    //     backend: 'bitbucket',
    //     repo: this.repo,
    //     token: this.token,
    //   });
    //   if (defaultBranchName) {
    //     this.branch = defaultBranchName;
    //   }
    // }
    const user = await this.api.user();

    // Authorized user
    return _objectSpread(_objectSpread({}, user), {}, {
      name: user.display_name,
      login: user.username,
      token: state.token,
      avatar_url: user.links.avatar.href,
      refresh_token: state.refresh_token
    });
  }
  getRefreshedAccessToken() {
    if (this.authType === 'implicit') {
      throw new AccessTokenError(`Can't refresh access token when using implicit auth`);
    }
    if (this.refreshedTokenPromise) {
      return this.refreshedTokenPromise;
    }

    // instantiating a new Authenticator on each refresh isn't ideal,
    if (!this.authenticator) {
      const cfg = {
        base_url: this.baseUrl,
        site_id: this.siteId
      };
      this.authenticator = new NetlifyAuthenticator(cfg);
    }
    this.refreshedTokenPromise = this.authenticator.refresh({
      provider: 'bitbucket',
      refresh_token: this.refreshToken
    }).then(({
      token,
      refresh_token
    }) => {
      this.token = token;
      this.refreshToken = refresh_token;
      this.refreshedTokenPromise = undefined;
      this.updateUserCredentials({
        token,
        refresh_token
      });
      return token;
    });
    return this.refreshedTokenPromise;
  }
  logout() {
    this.token = null;
    return;
  }
  getToken() {
    if (this.refreshedTokenPromise) {
      return this.refreshedTokenPromise;
    }
    return Promise.resolve(this.token);
  }
  async entriesByFolder(folder, extension, depth) {
    let cursor;
    const listFiles = () => this.api.listFiles(folder, depth, 20, this.branch).then(({
      entries,
      cursor: c
    }) => {
      cursor = c.mergeMeta({
        extension
      });
      return entries.filter(e => filterByExtension(e, extension));
    });
    const head = await this.api.defaultBranchCommitSha();
    const readFile = (path, id) => {
      return this.api.readFile(path, id, {
        head
      });
    };
    const files = await entriesByFolder(listFiles, readFile, this.api.readFileMetadata.bind(this.api), API_NAME);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    files[CURSOR_COMPATIBILITY_SYMBOL] = cursor;
    return files;
  }
  async listAllFiles(folder, extension, depth) {
    const files = await this.api.listAllFiles(folder, depth, this.branch);
    const filtered = files.filter(file => filterByExtension(file, extension));
    return filtered;
  }
  async allEntriesByFolder(folder, extension, depth) {
    const head = await this.api.defaultBranchCommitSha();
    const readFile = (path, id) => {
      return this.api.readFile(path, id, {
        head
      });
    };
    const files = await allEntriesByFolder({
      listAllFiles: () => this.listAllFiles(folder, extension, depth),
      readFile,
      readFileMetadata: this.api.readFileMetadata.bind(this.api),
      apiName: API_NAME,
      branch: this.branch,
      localForage,
      folder,
      extension,
      depth,
      getDefaultBranch: () => Promise.resolve({
        name: this.branch,
        sha: head
      }),
      isShaExistsInBranch: this.api.isShaExistsInBranch.bind(this.api),
      getDifferences: (source, destination) => this.api.getDifferences(source, destination),
      getFileId: path => Promise.resolve(this.api.getFileId(head, path)),
      filterFile: file => filterByExtension(file, extension)
    });
    return files;
  }
  async entriesByFiles(files) {
    const head = await this.api.defaultBranchCommitSha();
    const readFile = (path, id) => {
      return this.api.readFile(path, id, {
        head
      });
    };
    return entriesByFiles(files, readFile, this.api.readFileMetadata.bind(this.api), API_NAME);
  }
  getEntry(path) {
    return this.api.readFile(path).then(data => ({
      file: {
        path,
        id: null
      },
      data: data
    }));
  }
  getMedia(mediaFolder = this.mediaFolder) {
    return this.api.listAllFiles(mediaFolder, 1, this.branch).then(files => files.map(({
      id,
      name,
      path
    }) => ({
      id,
      name,
      path,
      displayURL: {
        id,
        path
      }
    })));
  }
  getLargeMediaClient() {
    if (!this._largeMediaClientPromise) {
      this._largeMediaClientPromise = (async () => {
        const patterns = await this.api.readFile('.gitattributes').then(attributes => getLargeMediaPatternsFromGitAttributesFile(attributes)).catch(err => {
          if (err.status === 404) {
            console.log('This 404 was expected and handled appropriately.');
          } else {
            console.error(err);
          }
          return [];
        });
        return new GitLfsClient(!!(this.largeMediaURL && patterns.length > 0), this.largeMediaURL, patterns, this.requestFunction);
      })();
    }
    return this._largeMediaClientPromise;
  }
  getMediaDisplayURL(displayURL) {
    this._mediaDisplayURLSem = this._mediaDisplayURLSem || semaphore(MAX_CONCURRENT_DOWNLOADS);
    return getMediaDisplayURL(displayURL, this.api.readFile.bind(this.api), this._mediaDisplayURLSem);
  }
  async getMediaFile(path) {
    const name = basename(path);
    const blob = await getMediaAsBlob(path, null, this.api.readFile.bind(this.api));
    const fileObj = blobToFileObj(name, blob);
    const url = URL.createObjectURL(fileObj);
    const id = await getBlobSHA(fileObj);
    return {
      id,
      displayURL: url,
      path,
      name,
      size: fileObj.size,
      file: fileObj,
      url
    };
  }
  async persistEntry(entry, options) {
    const client = await this.getLargeMediaClient();
    // persistEntry is a transactional operation
    return runWithLock(this.lock, async () => this.api.persistFiles(entry.dataFiles, client.enabled ? await getLargeMediaFilteredMediaFiles(client, entry.assets) : entry.assets, options), 'Failed to acquire persist entry lock');
  }
  async persistMedia(mediaFile, options) {
    const {
      fileObj,
      path
    } = mediaFile;
    const displayURL = fileObj ? URL.createObjectURL(fileObj) : '';
    const client = await this.getLargeMediaClient();
    const fixedPath = path.startsWith('/') ? path.slice(1) : path;
    if (!client.enabled || !client.matchPath(fixedPath)) {
      return this._persistMedia(mediaFile, options);
    }
    const persistMediaArgument = await getPointerFileForMediaFileObj(client, fileObj, path);
    return _objectSpread(_objectSpread({}, await this._persistMedia(persistMediaArgument, options)), {}, {
      displayURL
    });
  }
  async _persistMedia(mediaFile, options) {
    const fileObj = mediaFile.fileObj;
    const [id] = await Promise.all([getBlobSHA(fileObj), this.api.persistFiles([], [mediaFile], options)]);
    const url = URL.createObjectURL(fileObj);
    return {
      displayURL: url,
      path: _trimStart(mediaFile.path, '/k'),
      name: fileObj.name,
      size: fileObj.size,
      id,
      file: fileObj,
      url
    };
  }
  deleteFiles(paths, commitMessage) {
    return this.api.deleteFiles(paths, commitMessage);
  }
  traverseCursor(cursor, action) {
    return this.api.traverseCursor(cursor, action).then(async ({
      entries,
      cursor: newCursor
    }) => {
      var _cursor$meta;
      const extension = (_cursor$meta = cursor.meta) === null || _cursor$meta === void 0 ? void 0 : _cursor$meta.get('extension');
      if (extension) {
        entries = entries.filter(e => filterByExtension(e, extension));
        newCursor = newCursor.mergeMeta({
          extension
        });
      }
      const head = await this.api.defaultBranchCommitSha();
      const readFile = (path, id) => {
        return this.api.readFile(path, id, {
          head
        });
      };
      const entriesWithData = await entriesByFiles(entries, readFile, this.api.readFileMetadata.bind(this.api), API_NAME);
      return {
        entries: entriesWithData,
        cursor: newCursor
      };
    });
  }
  async loadMediaFile(path, id, {
    branch
  }) {
    const readFile = async (path, id, {
      parseText
    }) => {
      const content = await this.api.readFile(path, id, {
        branch,
        parseText
      });
      return content;
    };
    const blob = await getMediaAsBlob(path, id, readFile);
    const name = basename(path);
    const fileObj = blobToFileObj(name, blob);
    return {
      id: path,
      displayURL: URL.createObjectURL(fileObj),
      path,
      name,
      size: fileObj.size,
      file: fileObj
    };
  }
  async unpublishedEntries() {
    const listEntriesKeys = () => this.api.listUnpublishedBranches().then(branches => branches.map(branch => contentKeyFromBranch(branch)));
    const ids = await unpublishedEntries(listEntriesKeys);
    return ids;
  }
  async unpublishedEntry({
    id,
    collection,
    slug
  }) {
    if (id) {
      const data = await this.api.retrieveUnpublishedEntryData(id);
      return data;
    } else if (collection && slug) {
      const entryId = generateContentKey(collection, slug);
      const data = await this.api.retrieveUnpublishedEntryData(entryId);
      return data;
    } else {
      throw new Error('Missing unpublished entry id or collection and slug');
    }
  }
  getBranch(collection, slug) {
    const contentKey = generateContentKey(collection, slug);
    const branch = branchFromContentKey(contentKey);
    return branch;
  }
  async unpublishedEntryDataFile(collection, slug, path, id) {
    const branch = this.getBranch(collection, slug);
    const data = await this.api.readFile(path, id, {
      branch
    });
    return data;
  }
  async unpublishedEntryMediaFile(collection, slug, path, id) {
    const branch = this.getBranch(collection, slug);
    const mediaFile = await this.loadMediaFile(path, id, {
      branch
    });
    return mediaFile;
  }
  async updateUnpublishedEntryStatus(collection, slug, newStatus) {
    // updateUnpublishedEntryStatus is a transactional operation
    return runWithLock(this.lock, () => this.api.updateUnpublishedEntryStatus(collection, slug, newStatus), 'Failed to acquire update entry status lock');
  }
  async deleteUnpublishedEntry(collection, slug) {
    // deleteUnpublishedEntry is a transactional operation
    return runWithLock(this.lock, () => this.api.deleteUnpublishedEntry(collection, slug), 'Failed to acquire delete entry lock');
  }
  async publishUnpublishedEntry(collection, slug) {
    // publishUnpublishedEntry is a transactional operation
    return runWithLock(this.lock, () => this.api.publishUnpublishedEntry(collection, slug), 'Failed to acquire publish entry lock');
  }
  async getDeployPreview(collection, slug) {
    try {
      const statuses = await this.api.getStatuses(collection, slug);
      const deployStatus = getPreviewStatus(statuses, this.previewContext);
      if (deployStatus) {
        const {
          target_url: url,
          state
        } = deployStatus;
        return {
          url,
          status: state
        };
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }
}