import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Root from './root';

const RootApp = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Root />
    </HashRouter>
  </Provider>
);

export default RootApp;
