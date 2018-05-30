import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from "./containers/App";
import "./index.css";
import 'tachyons';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();