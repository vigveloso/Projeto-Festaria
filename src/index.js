import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/styles/reset.css';
import './assets/styles/colors.css';
import Route from './Routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Route />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
