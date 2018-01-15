import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './frontend/components/root_app';
import store from './frontend/store/store';


document.addEventListener('DOMContentLoaded', () => {

  // react-redux
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<RootApp store={store}/>, root);
});
