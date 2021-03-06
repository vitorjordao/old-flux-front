import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'Design_Thinking/css/basics.css';
import 'Design_Thinking/css/buttons.css';
import 'Design_Thinking/icons/fontawesome/css/all.min.css';
import 'Design_Thinking/css/cards.css';
import 'Design_Thinking/css/plan.css';
import 'Design_Thinking/css/forms.css';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
