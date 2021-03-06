// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './config/router/App';
import * as serviceWorker from './config/cache/serviceWorker';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './styles/styles.scss'

const root: ?Element = document.getElementById('root');

if (root != null) {
  ReactDOM.render(<App/>, root);
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.register();
}






