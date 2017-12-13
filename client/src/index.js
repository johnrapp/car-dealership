import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// In package.json there is a hack: "&& rm build/service-worker.js"
// to remove the service worker, which makes demoing the API difficult
// Can be solved better with more time