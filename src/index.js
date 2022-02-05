import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { useContext } from 'react';

ReactDOM.render(
  <React.StrictMode>
    <userContext>
      <App />
    </userContext>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
