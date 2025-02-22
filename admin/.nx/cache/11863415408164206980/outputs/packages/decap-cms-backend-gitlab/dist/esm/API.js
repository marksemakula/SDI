import _trimStart from "lodash/trimStart";
import _result from "lodash/result";
import _partial from "lodash/partial";
import _flow from "lodash/flow";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { localForage, parseLinkHeader, unsentRequest, then, APIError, Cursor, readFile, CMS_BRANCH_PREFIX, generateContentKey, isCMSLabel, EditorialWorkflowError, labelToStatus, statusToLabel, DEFAULT_PR_BODY, MERGE_COMMIT_MESSAGE, responseParser, PreviewState, parseContentKey, branchFromContentKey, requestWithBackoff, readFileMetadata, throwOnConflictingBranches } from 'decap-cms-lib-util';
import { Base64 } from 'js-base64';
import { Map } from 'immutable';
import { dirname } from 'path';
const NO_CACHE = 'no-cache';
import * as queries from './queries';
export const API_NAME = 'GitLab';
var CommitAction = /*#__PURE__*/function (CommitAction) {
  CommitAction["CREATE"] = "create";
  CommitAction["DELETE"] = "delete";
  CommitAction["MOVE"] = "move";
  CommitAction["UPDATE"] = "update";
  return CommitAction;
}(CommitAction || {});
var GitLabCommitStatuses = /*#__PURE__*/function (GitLabCommitStatuses) {
  GitLabCommitStatuses["Pending"] = "pending";
  GitLabCommitStatuses["Running"] = "running";
  GitLabCommitStatuses["Success"] = "success";
  GitLabCommitStatuses["Failed"] = "failed";
  GitLabCommitStatuses["Canceled"] = "canceled";
  return GitLabCommitStatuses;
}(GitLabCommitStatuses || {});
export function getMaxAccess(groups) {
  return groups.reduce((previous, current) => {
    if (current.group_access_level > previous.group_access_level) {
      return current;
    }
    return previous;
  }, groups[0]);
}
function batch(items, maxPerBatch, action) {
  for (let index = 0; index < items.length; index = index + maxPerBatch) {
    const itemsSlice = items.slice(index, index + maxPerBatch);
    action(itemsSlice);
  }
}
export default class API {
  constructor(config) {
    _defineProperty(this, "apiRoot", void 0);
    _defineProperty(this, "graphQLAPIRoot", void 0);
    _defineProperty(this, "token", void 0);
    _defineProperty(this, "branch", void 0);
    _defineProperty(this, "useOpenAuthoring", void 0);
    _defineProperty(this, "repo", void 0);
    _defineProperty(this, "repoURL", void 0);
    _defineProperty(this, "commitAuthor", void 0);
    _defineProperty(this, "squashMerges", void 0);
    _defineProperty(this, "initialWorkflowStatus", void 0);
    _defineProperty(this, "cmsLabelPrefix", void 0);
    _defineProperty(this, "graphQLClient", void 0);
    _defineProperty(this, "withAuthorizationHeaders", req => {
      const withHeaders = unsentRequest.withHeaders(this.token ? {
        Authorization: `Bearer ${this.token}`
      } : {}, req);
      return Promise.resolve(withHeaders);
    });
    _defineProperty(this, "buildRequest", async req => {
      const withRoot = unsentRequest.withRoot(this.apiRoot)(req);
      const withAuthorizationHeaders = await this.withAuthorizationHeaders(withRoot);
      if (withAuthorizationHeaders.has('cache')) {
        return withAuthorizationHeaders;
      } else {
        const withNoCache = unsentRequest.withNoCache(withAuthorizationHeaders);
        return withNoCache;
      }
    });
    _defineProperty(this, "request", async req => {
      try {
        return requestWithBackoff(this, req);
      } catch (err) {
        throw new APIError(err.message, null, API_NAME);
      }
    });
    _defineProperty(this, "responseToJSON", responseParser({
      format: 'json',
      apiName: API_NAME
    }));
    _defineProperty(this, "responseToBlob", responseParser({
      format: 'blob',
      apiName: API_NAME
    }));
    _defineProperty(this, "responseToText", responseParser({
      format: 'text',
      apiName: API_NAME
    }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _defineProperty(this, "requestJSON", req => this.request(req).then(this.responseToJSON));
    _defineProperty(this, "requestText", req => this.request(req).then(this.responseToText));
    _defineProperty(this, "user", () => this.requestJSON('/user'));
    _defineProperty(this, "WRITE_ACCESS", 30);
    _defineProperty(this, "MAINTAINER_ACCESS", 40);
    _defineProperty(this, "hasWriteAccess", async () => {
      const {
        shared_with_groups: sharedWithGroups,
        permissions
      } = await this.requestJSON(this.repoURL);
      const {
        project_access: projectAccess,
        group_access: groupAccess
      } = permissions;
      if (projectAccess && projectAccess.access_level >= this.WRITE_ACCESS) {
        return true;
      }
      if (groupAccess && groupAccess.access_level >= this.WRITE_ACCESS) {
        return true;
      }
      // check for group write permissions
      if (sharedWithGroups && sharedWithGroups.length > 0) {
        const maxAccess = getMaxAccess(sharedWithGroups);
        // maintainer access
        if (maxAccess.group_access_level >= this.MAINTAINER_ACCESS) {
          return true;
        }
        // developer access
        if (maxAccess.group_access_level >= this.WRITE_ACCESS) {
          // check permissions to merge and push
          try {
            const branch = await this.getDefaultBranch();
            if (branch.developers_can_merge && branch.developers_can_push) {
              return true;
            }
          } catch (e) {
            console.log('Failed getting default branch', e);
          }
        }
      }
      return false;
    });
    _defineProperty(this, "readFile", async (path, sha, {
      parseText = true,
      branch = this.branch
    } = {}) => {
      const fetchContent = async () => {
        const content = await this.request({
          url: `${this.repoURL}/repository/files/${encodeURIComponent(path)}/raw`,
          params: {
            ref: branch
          },
          cache: 'no-store'
        }).then(parseText ? this.responseToText : this.responseToBlob);
        return content;
      };
      const content = await readFile(sha, fetchContent, localForage, parseText);
      return content;
    });
    _defineProperty(this, "getCursorFromHeaders", headers => {
      const page = parseInt(headers.get('X-Page'), 10);
      const pageCount = parseInt(headers.get('X-Total-Pages'), 10);
      const pageSize = parseInt(headers.get('X-Per-Page'), 10);
      const count = parseInt(headers.get('X-Total'), 10);
      const links = parseLinkHeader(headers.get('Link'));
      const actions = Map(links).keySeq().flatMap(key => key === 'prev' && page > 1 || key === 'next' && page < pageCount || key === 'first' && page > 1 || key === 'last' && page < pageCount ? [key] : []);
      return Cursor.create({
        actions,
        meta: {
          page,
          count,
          pageSize,
          pageCount
        },
        data: {
          links
        }
      });
    });
    _defineProperty(this, "getCursor", ({
      headers
    }) => this.getCursorFromHeaders(headers));
    // Gets a cursor without retrieving the entries by using a HEAD
    // request
    _defineProperty(this, "fetchCursor", req => _flow([unsentRequest.withMethod('HEAD'), this.request, then(this.getCursor)])(req));
    _defineProperty(this, "fetchCursorAndEntries", req => _flow([unsentRequest.withMethod('GET'), this.request, p => Promise.all([p.then(this.getCursor), p.then(this.responseToJSON).catch(e => {
      if (e.status === 404) {
        return [];
      } else {
        throw e;
      }
    })]), then(([cursor, entries]) => ({
      cursor,
      entries
    }))])(req));
    _defineProperty(this, "listFiles", async (path, recursive = false) => {
      const {
        entries,
        cursor
      } = await this.fetchCursorAndEntries({
        url: `${this.repoURL}/repository/tree`,
        params: {
          path,
          ref: this.branch,
          recursive
        }
      });
      return {
        files: entries.filter(({
          type
        }) => type === 'blob'),
        cursor
      };
    });
    _defineProperty(this, "traverseCursor", async (cursor, action) => {
      const link = cursor.data.getIn(['links', action]);
      const {
        entries,
        cursor: newCursor
      } = await this.fetchCursorAndEntries(link);
      return {
        entries: entries.filter(({
          type
        }) => type === 'blob'),
        cursor: newCursor
      };
    });
    _defineProperty(this, "listAllFilesGraphQL", async (path, recursive, branch) => {
      const files = [];
      let blobsPaths;
      let cursor;
      do {
        blobsPaths = await this.graphQLClient.query({
          query: queries.files,
          variables: {
            repo: this.repo,
            branch,
            path,
            recursive,
            cursor
          }
        });
        files.push(...blobsPaths.data.project.repository.tree.blobs.nodes);
        cursor = blobsPaths.data.project.repository.tree.blobs.pageInfo.endCursor;
      } while (blobsPaths.data.project.repository.tree.blobs.pageInfo.hasNextPage);
      return files;
    });
    _defineProperty(this, "readFilesGraphQL", async files => {
      const paths = files.map(({
        path
      }) => path);
      const blobPromises = [];
      batch(paths, 90, slice => {
        blobPromises.push(this.graphQLClient.query({
          query: queries.blobs,
          variables: {
            repo: this.repo,
            branch: this.branch,
            paths: slice
          },
          fetchPolicy: 'cache-first'
        }));
      });
      const commitPromises = [];
      batch(paths, 8, slice => {
        commitPromises.push(this.graphQLClient.query({
          query: queries.lastCommits(slice),
          variables: {
            repo: this.repo,
            branch: this.branch
          },
          fetchPolicy: 'cache-first'
        }));
      });
      const [blobsResults, commitsResults] = await Promise.all([(await Promise.all(blobPromises)).map(result => result.data.project.repository.blobs.nodes), (await Promise.all(commitPromises)).map(result => Object.values(result.data.project.repository).map(({
        lastCommit
      }) => lastCommit).filter(Boolean))]);
      const blobs = blobsResults.flat().map(result => result.data);
      const metadata = commitsResults.flat().map(({
        author,
        authoredDate,
        authorName
      }) => ({
        author: author ? author.name || author.username || author.publicEmail : authorName,
        updatedOn: authoredDate
      }));
      const filesWithData = files.map((file, index) => ({
        file: _objectSpread(_objectSpread({}, file), metadata[index]),
        data: blobs[index]
      }));
      return filesWithData;
    });
    _defineProperty(this, "listAllFiles", async (path, recursive = false, branch = this.branch) => {
      if (this.graphQLClient) {
        return await this.listAllFilesGraphQL(path, recursive, branch);
      }
      const entries = [];
      // eslint-disable-next-line prefer-const
      let {
        cursor,
        entries: initialEntries
      } = await this.fetchCursorAndEntries({
        url: `${this.repoURL}/repository/tree`,
        // Get the maximum number of entries per page
        params: {
          path,
          ref: branch,
          per_page: 100,
          recursive
        }
      });
      entries.push(...initialEntries);
      while (cursor && cursor.actions.has('next')) {
        const link = cursor.data.getIn(['links', 'next']);
        const {
          cursor: newCursor,
          entries: newEntries
        } = await this.fetchCursorAndEntries(link);
        entries.push(...newEntries);
        cursor = newCursor;
      }
      return entries.filter(({
        type
      }) => type === 'blob');
    });
    _defineProperty(this, "toBase64", str => Promise.resolve(Base64.encode(str)));
    _defineProperty(this, "fromBase64", str => Base64.decode(str));
    _defineProperty(this, "deleteFiles", (paths, commitMessage) => {
      const branch = this.branch;
      const commitParams = {
        commit_message: commitMessage,
        branch
      };
      if (this.commitAuthor) {
        const {
          name,
          email
        } = this.commitAuthor;
        commitParams.author_name = name;
        commitParams.author_email = email;
      }
      const items = paths.map(path => ({
        path,
        action: CommitAction.DELETE
      }));
      return this.uploadAndCommit(items, {
        commitMessage
      });
    });
    this.apiRoot = config.apiRoot || 'https://gitlab.com/api/v4';
    this.graphQLAPIRoot = config.graphQLAPIRoot || 'https://gitlab.com/api/graphql';
    this.token = config.token || false;
    this.branch = config.branch || 'master';
    this.repo = config.repo || '';
    this.repoURL = `/projects/${encodeURIComponent(this.repo)}`;
    this.squashMerges = config.squashMerges;
    this.initialWorkflowStatus = config.initialWorkflowStatus;
    this.cmsLabelPrefix = config.cmsLabelPrefix;
    if (config.useGraphQL === true) {
      this.graphQLClient = this.getApolloClient();
    }
  }
  getApolloClient() {
    const authLink = setContext((_, {
      headers
    }) => {
      return {
        headers: _objectSpread(_objectSpread({
          'Content-Type': 'application/json; charset=utf-8'
        }, headers), {}, {
          authorization: this.token ? `token ${this.token}` : ''
        })
      };
    });
    const httpLink = createHttpLink({
      uri: this.graphQLAPIRoot
    });
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: NO_CACHE,
          errorPolicy: 'ignore'
        },
        query: {
          fetchPolicy: NO_CACHE,
          errorPolicy: 'all'
        }
      }
    });
  }
  reset() {
    var _this$graphQLClient;
    return (_this$graphQLClient = this.graphQLClient) === null || _this$graphQLClient === void 0 ? void 0 : _this$graphQLClient.resetStore();
  }
  async readFileMetadata(path, sha) {
    const fetchFileMetadata = async () => {
      try {
        const result = await this.requestJSON({
          url: `${this.repoURL}/repository/commits`,
          params: {
            path,
            ref_name: this.branch
          }
        });
        const commit = result[0];
        return {
          author: commit.author_name || commit.author_email,
          updatedOn: commit.authored_date
        };
      } catch (e) {
        return {
          author: '',
          updatedOn: ''
        };
      }
    };
    const fileMetadata = await readFileMetadata(sha, fetchFileMetadata, localForage);
    return fileMetadata;
  }
  async getBranch(branchName) {
    const branch = await this.requestJSON(`${this.repoURL}/repository/branches/${encodeURIComponent(branchName)}`);
    return branch;
  }
  async uploadAndCommit(items, {
    commitMessage = '',
    branch = this.branch,
    newBranch = false
  }) {
    const actions = items.map(item => _objectSpread(_objectSpread({
      action: item.action,
      file_path: item.path
    }, item.oldPath ? {
      previous_path: item.oldPath
    } : {}), item.base64Content !== undefined ? {
      content: item.base64Content,
      encoding: 'base64'
    } : {}));
    const commitParams = _objectSpread({
      branch,
      commit_message: commitMessage,
      actions
    }, newBranch ? {
      start_branch: this.branch
    } : {});
    if (this.commitAuthor) {
      const {
        name,
        email
      } = this.commitAuthor;
      commitParams.author_name = name;
      commitParams.author_email = email;
    }
    try {
      const result = await this.requestJSON({
        url: `${this.repoURL}/repository/commits`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(commitParams)
      });
      return result;
    } catch (error) {
      const message = error.message || '';
      if (newBranch && message.includes(`Could not update ${branch}`)) {
        await throwOnConflictingBranches(branch, name => this.getBranch(name), API_NAME);
      }
      throw error;
    }
  }
  async getCommitItems(files, branch) {
    const items = await Promise.all(files.map(async file => {
      const [base64Content, fileExists] = await Promise.all([_result(file, 'toBase64', _partial(this.toBase64, file.raw)), this.isFileExists(file.path, branch)]);
      let action = CommitAction.CREATE;
      let path = _trimStart(file.path, '/');
      let oldPath = undefined;
      if (fileExists) {
        oldPath = file.newPath && path;
        action = file.newPath && file.newPath !== oldPath ? CommitAction.MOVE : CommitAction.UPDATE;
        path = file.newPath ? _trimStart(file.newPath, '/') : path;
      }
      return {
        action,
        base64Content,
        path,
        oldPath
      };
    }));

    // move children
    for (const item of items.filter(i => i.oldPath && i.action === CommitAction.MOVE)) {
      const sourceDir = dirname(item.oldPath);
      const destDir = dirname(item.path);
      const children = await this.listAllFiles(sourceDir, true, branch);
      children.filter(f => f.path !== item.oldPath).forEach(file => {
        items.push({
          action: CommitAction.MOVE,
          path: file.path.replace(sourceDir, destDir),
          oldPath: file.path
        });
      });
    }
    return items;
  }
  async persistFiles(dataFiles, mediaFiles, options) {
    const files = [...dataFiles, ...mediaFiles];
    if (options.useWorkflow) {
      const slug = dataFiles[0].slug;
      return this.editorialWorkflowGit(files, slug, options);
    } else {
      const items = await this.getCommitItems(files, this.branch);
      return this.uploadAndCommit(items, {
        commitMessage: options.commitMessage
      });
    }
  }
  async getMergeRequests(sourceBranch) {
    const mergeRequests = await this.requestJSON({
      url: `${this.repoURL}/merge_requests`,
      params: _objectSpread({
        state: 'opened',
        labels: 'Any',
        per_page: 100,
        target_branch: this.branch
      }, sourceBranch ? {
        source_branch: sourceBranch
      } : {})
    });
    return mergeRequests.filter(mr => mr.source_branch.startsWith(CMS_BRANCH_PREFIX) && mr.labels.some(l => isCMSLabel(l, this.cmsLabelPrefix)));
  }
  async listUnpublishedBranches() {
    console.log('%c Checking for Unpublished entries', 'line-height: 30px;text-align: center;font-weight: bold');
    const mergeRequests = await this.getMergeRequests();
    const branches = mergeRequests.map(mr => mr.source_branch);
    return branches;
  }
  async getFileId(path, branch) {
    const request = await this.request({
      method: 'HEAD',
      url: `${this.repoURL}/repository/files/${encodeURIComponent(path)}`,
      params: {
        ref: branch
      }
    });
    const blobId = request.headers.get('X-Gitlab-Blob-Id');
    return blobId;
  }
  async isFileExists(path, branch) {
    const fileExists = await this.requestText({
      method: 'HEAD',
      url: `${this.repoURL}/repository/files/${encodeURIComponent(path)}`,
      params: {
        ref: branch
      }
    }).then(() => true).catch(error => {
      if (error instanceof APIError && error.status === 404) {
        return false;
      }
      throw error;
    });
    return fileExists;
  }
  async getBranchMergeRequest(branch) {
    const mergeRequests = await this.getMergeRequests(branch);
    if (mergeRequests.length <= 0) {
      throw new EditorialWorkflowError('content is not under editorial workflow', true);
    }
    return mergeRequests[0];
  }
  async getDifferences(to, from = this.branch) {
    if (to === from) {
      return [];
    }
    const result = await this.requestJSON({
      url: `${this.repoURL}/repository/compare`,
      params: {
        from,
        to
      }
    });
    if (result.diffs.length >= 1000) {
      throw new APIError('Diff limit reached', null, API_NAME);
    }
    return result.diffs.map(d => {
      let status = 'modified';
      if (d.new_file) {
        status = 'added';
      } else if (d.deleted_file) {
        status = 'deleted';
      } else if (d.renamed_file) {
        status = 'renamed';
      }
      return {
        status,
        oldPath: d.old_path,
        newPath: d.new_path,
        newFile: d.new_file,
        path: d.new_path || d.old_path,
        binary: d.diff.startsWith('Binary') || /.svg$/.test(d.new_path)
      };
    });
  }
  async retrieveUnpublishedEntryData(contentKey) {
    const {
      collection,
      slug
    } = parseContentKey(contentKey);
    const branch = branchFromContentKey(contentKey);
    const mergeRequest = await this.getBranchMergeRequest(branch);
    const diffs = await this.getDifferences(mergeRequest.sha);
    const diffsWithIds = await Promise.all(diffs.map(async d => {
      const {
        path,
        newFile
      } = d;
      const id = await this.getFileId(path, branch);
      return {
        id,
        path,
        newFile
      };
    }));
    const label = mergeRequest.labels.find(l => isCMSLabel(l, this.cmsLabelPrefix));
    const status = labelToStatus(label, this.cmsLabelPrefix);
    const updatedAt = mergeRequest.updated_at;
    const pullRequestAuthor = mergeRequest.author.name;
    return {
      collection,
      slug,
      status,
      diffs: diffsWithIds,
      updatedAt,
      pullRequestAuthor
    };
  }
  async rebaseMergeRequest(mergeRequest) {
    let rebase = await this.requestJSON({
      method: 'PUT',
      url: `${this.repoURL}/merge_requests/${mergeRequest.iid}/rebase?skip_ci=true`
    });
    let i = 1;
    while (rebase.rebase_in_progress) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      rebase = await this.requestJSON({
        url: `${this.repoURL}/merge_requests/${mergeRequest.iid}`,
        params: {
          include_rebase_in_progress: true
        }
      });
      if (!rebase.rebase_in_progress || i > 30) {
        break;
      }
      i++;
    }
    if (rebase.rebase_in_progress) {
      throw new APIError('Timed out rebasing merge request', null, API_NAME);
    } else if (rebase.merge_error) {
      throw new APIError(`Rebase error: ${rebase.merge_error}`, null, API_NAME);
    }
  }
  async createMergeRequest(branch, commitMessage, status) {
    await this.requestJSON({
      method: 'POST',
      url: `${this.repoURL}/merge_requests`,
      params: {
        source_branch: branch,
        target_branch: this.branch,
        title: commitMessage,
        description: DEFAULT_PR_BODY,
        labels: statusToLabel(status, this.cmsLabelPrefix),
        remove_source_branch: true,
        squash: this.squashMerges
      }
    });
  }
  async editorialWorkflowGit(files, slug, options) {
    const contentKey = generateContentKey(options.collectionName, slug);
    const branch = branchFromContentKey(contentKey);
    const unpublished = options.unpublished || false;
    if (!unpublished) {
      const items = await this.getCommitItems(files, this.branch);
      await this.uploadAndCommit(items, {
        commitMessage: options.commitMessage,
        branch,
        newBranch: true
      });
      await this.createMergeRequest(branch, options.commitMessage, options.status || this.initialWorkflowStatus);
    } else {
      const mergeRequest = await this.getBranchMergeRequest(branch);
      await this.rebaseMergeRequest(mergeRequest);
      const [items, diffs] = await Promise.all([this.getCommitItems(files, branch), this.getDifferences(branch)]);
      // mark files for deletion
      for (const diff of diffs.filter(d => d.binary)) {
        if (!items.some(item => item.path === diff.path)) {
          items.push({
            action: CommitAction.DELETE,
            path: diff.newPath
          });
        }
      }
      await this.uploadAndCommit(items, {
        commitMessage: options.commitMessage,
        branch
      });
    }
  }
  async updateMergeRequestLabels(mergeRequest, labels) {
    await this.requestJSON({
      method: 'PUT',
      url: `${this.repoURL}/merge_requests/${mergeRequest.iid}`,
      params: {
        labels: labels.join(',')
      }
    });
  }
  async updateUnpublishedEntryStatus(collection, slug, newStatus) {
    const contentKey = generateContentKey(collection, slug);
    const branch = branchFromContentKey(contentKey);
    const mergeRequest = await this.getBranchMergeRequest(branch);
    const labels = [...mergeRequest.labels.filter(label => !isCMSLabel(label, this.cmsLabelPrefix)), statusToLabel(newStatus, this.cmsLabelPrefix)];
    await this.updateMergeRequestLabels(mergeRequest, labels);
  }
  async mergeMergeRequest(mergeRequest) {
    await this.requestJSON({
      method: 'PUT',
      url: `${this.repoURL}/merge_requests/${mergeRequest.iid}/merge`,
      params: {
        merge_commit_message: MERGE_COMMIT_MESSAGE,
        squash_commit_message: MERGE_COMMIT_MESSAGE,
        squash: this.squashMerges,
        should_remove_source_branch: true
      }
    });
  }
  async publishUnpublishedEntry(collectionName, slug) {
    const contentKey = generateContentKey(collectionName, slug);
    const branch = branchFromContentKey(contentKey);
    const mergeRequest = await this.getBranchMergeRequest(branch);
    await this.mergeMergeRequest(mergeRequest);
  }
  async closeMergeRequest(mergeRequest) {
    await this.requestJSON({
      method: 'PUT',
      url: `${this.repoURL}/merge_requests/${mergeRequest.iid}`,
      params: {
        state_event: 'close'
      }
    });
  }
  async getDefaultBranch() {
    const branch = await this.getBranch(this.branch);
    return branch;
  }
  async isShaExistsInBranch(branch, sha) {
    const refs = await this.requestJSON({
      url: `${this.repoURL}/repository/commits/${sha}/refs`,
      params: {
        type: 'branch'
      }
    });
    return refs.some(r => r.name === branch);
  }
  async deleteBranch(branch) {
    await this.request({
      method: 'DELETE',
      url: `${this.repoURL}/repository/branches/${encodeURIComponent(branch)}`
    });
  }
  async deleteUnpublishedEntry(collectionName, slug) {
    const contentKey = generateContentKey(collectionName, slug);
    const branch = branchFromContentKey(contentKey);
    const mergeRequest = await this.getBranchMergeRequest(branch);
    await this.closeMergeRequest(mergeRequest);
    await this.deleteBranch(branch);
  }
  async getMergeRequestStatues(mergeRequest, branch) {
    const statuses = await this.requestJSON({
      url: `${this.repoURL}/repository/commits/${mergeRequest.sha}/statuses`,
      params: {
        ref: branch
      }
    });
    return statuses;
  }
  async getStatuses(collectionName, slug) {
    const contentKey = generateContentKey(collectionName, slug);
    const branch = branchFromContentKey(contentKey);
    const mergeRequest = await this.getBranchMergeRequest(branch);
    const statuses = await this.getMergeRequestStatues(mergeRequest, branch);
    return statuses.map(({
      name,
      status,
      target_url
    }) => ({
      context: name,
      state: status === GitLabCommitStatuses.Success ? PreviewState.Success : PreviewState.Other,
      target_url
    }));
  }
  async getUnpublishedEntrySha(collection, slug) {
    const contentKey = generateContentKey(collection, slug);
    const branch = branchFromContentKey(contentKey);
    const mergeRequest = await this.getBranchMergeRequest(branch);
    return mergeRequest.sha;
  }
}