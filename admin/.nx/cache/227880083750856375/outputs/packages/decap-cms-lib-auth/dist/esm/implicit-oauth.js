const _excluded = ["access_token"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Map } from 'immutable';
import trim from 'lodash/trim';
import trimEnd from 'lodash/trimEnd';
import { createNonce, validateNonce, isInsecureProtocol } from './utils';
export default class ImplicitAuthenticator {
  constructor(config = {}) {
    const baseURL = trimEnd(config.base_url, '/');
    const authEndpoint = trim(config.auth_endpoint, '/');
    this.auth_url = `${baseURL}/${authEndpoint}`;
    this.appID = config.app_id;
    this.clearHash = config.clearHash;
  }
  authenticate(options, cb) {
    if (isInsecureProtocol()) {
      return cb(new Error('Cannot authenticate over insecure protocol!'));
    }
    const authURL = new URL(this.auth_url);
    authURL.searchParams.set('client_id', this.appID);
    authURL.searchParams.set('redirect_uri', document.location.origin + document.location.pathname);
    authURL.searchParams.set('response_type', 'token');
    authURL.searchParams.set('scope', options.scope);
    if (options.prompt != null && options.prompt != undefined) {
      authURL.searchParams.set('prompt', options.prompt);
    }
    if (options.resource != null && options.resource != undefined) {
      authURL.searchParams.set('resource', options.resource);
    }
    const state = JSON.stringify({
      auth_type: 'implicit',
      nonce: createNonce()
    });
    authURL.searchParams.set('state', state);
    document.location.assign(authURL.href);
  }

  /**
   * Complete authentication if we were redirected back to from the provider.
   */
  completeAuth(cb) {
    const hashParams = new URLSearchParams(document.location.hash.replace(/^#?\/?/, ''));
    if (!hashParams.has('access_token') && !hashParams.has('error')) {
      return;
    }
    // Remove tokens from hash so that token does not remain in browser history.
    this.clearHash();
    const params = Map(hashParams.entries());
    const {
      nonce
    } = JSON.parse(params.get('state'));
    const validNonce = validateNonce(nonce);
    if (!validNonce) {
      return cb(new Error('Invalid nonce'));
    }
    if (params.has('error')) {
      return cb(new Error(`${params.get('error')}: ${params.get('error_description')}`));
    }
    if (params.has('access_token')) {
      const _params$toJS = params.toJS(),
        {
          access_token: token
        } = _params$toJS,
        data = _objectWithoutProperties(_params$toJS, _excluded);
      cb(null, _objectSpread({
        token
      }, data));
    }
  }
}