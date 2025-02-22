function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { GitHubBackend } from 'decap-cms-backend-github';
import AuthenticationPage from './AuthenticationPage';
import { jsx as ___EmotionJSX } from "@emotion/react";
export default class AwsCognitoGitHubProxyBackend extends GitHubBackend {
  constructor(config, options = {}) {
    super(config, options);
    this.bypassWriteAccessCheckForAppTokens = true;
    this.tokenKeyword = 'Bearer';
  }
  authComponent() {
    const wrappedAuthenticationPage = props => ___EmotionJSX(AuthenticationPage, _extends({}, props, {
      backend: this
    }));
    wrappedAuthenticationPage.displayName = 'AuthenticationPage';
    return wrappedAuthenticationPage;
  }
  async currentUser({
    token
  }) {
    if (!this._currentUserPromise) {
      this._currentUserPromise = fetch(this.baseUrl + '/oauth2/userInfo', {
        headers: {
          Authorization: `${this.tokenKeyword} ${token}`
        }
      }).then(async res => {
        if (res.status == 401) {
          this.logout();
          return Promise.reject('Token expired');
        }
        const userInfo = await res.json();
        const owner = this.originRepo.split('/')[1];
        return {
          name: userInfo.email,
          login: owner,
          avatar_url: `https://github.com/${owner}.png`
        };
      });
    }
    return this._currentUserPromise;
  }
  async getPullRequestAuthor(pullRequest) {
    var _pullRequest$user;
    return (_pullRequest$user = pullRequest.user) === null || _pullRequest$user === void 0 ? void 0 : _pullRequest$user.login;
  }
}