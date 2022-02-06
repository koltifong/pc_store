import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { useContext } from 'react';

var http = require("http");
setInterval(function() {
    http.get("http://<pcpart-picker>.herokuapp.com");
}, 300000); // every 5 minutes (300000)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
  document.getElementById('root')
);
