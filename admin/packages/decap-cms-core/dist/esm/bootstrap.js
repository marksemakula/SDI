import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import { GlobalStyles } from 'decap-cms-ui-default';
import { I18n } from 'react-polyglot';
import { store } from './redux';
import { history } from './routing/history';
import { loadConfig } from './actions/config';
import { authenticateUser } from './actions/auth';
import { getPhrases } from './lib/phrases';
import { selectLocale } from './reducers/config';
import { ErrorBoundary } from './components/UI';
import App from './components/App/App';
import './components/EditorWidgets';
import './mediaLibrary';
import 'what-input';
import { jsx as ___EmotionJSX } from "@emotion/react";
const ROOT_ID = 'nc-root';
function TranslatedApp({
  locale,
  config
}) {
  return ___EmotionJSX(I18n, {
    locale: locale,
    messages: getPhrases(locale)
  }, ___EmotionJSX(ErrorBoundary, {
    showBackup: true,
    config: config
  }, ___EmotionJSX(Router, {
    history: history
  }, ___EmotionJSX(Route, {
    component: App
  }))));
}
function mapDispatchToProps(state) {
  return {
    locale: selectLocale(state.config),
    config: state.config
  };
}
const ConnectedTranslatedApp = connect(mapDispatchToProps)(TranslatedApp);
function bootstrap(opts = {}) {
  const {
    config
  } = opts;

  /**
   * Log the version number.
   */
  if (typeof "3.6.1" === 'string') {
    console.log(`decap-cms-core ${"3.6.1"}`);
  }

  /**
   * Get DOM element where app will mount.
   */
  function getRoot() {
    /**
     * Return existing root if found.
     */
    const existingRoot = document.getElementById(ROOT_ID);
    if (existingRoot) {
      return existingRoot;
    }

    /**
     * If no existing root, create and return a new root.
     */
    const newRoot = document.createElement('div');
    newRoot.id = ROOT_ID;
    document.body.appendChild(newRoot);
    return newRoot;
  }

  /**
   * Dispatch config to store if received. This config will be merged into
   * config.yml if it exists, and any portion that produces a conflict will be
   * overwritten.
   */
  store.dispatch(loadConfig(config, function onLoad() {
    store.dispatch(authenticateUser());
  }));

  /**
   * Create connected root component.
   */
  function Root() {
    return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(GlobalStyles, null), ___EmotionJSX(Provider, {
      store: store
    }, ___EmotionJSX(ConnectedTranslatedApp, null)));
  }

  /**
   * Render application root.
   */
  const root = createRoot(getRoot());
  root.render(___EmotionJSX(Root, null));
}
export default bootstrap;