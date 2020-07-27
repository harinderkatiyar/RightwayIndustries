import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './libs/css/fontAwsome4.css'
import './libs/css/animate.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
