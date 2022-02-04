import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { userContext } from './pages/products/context';

ReactDOM.render(
  
    <userContext>
      <App />
    </userContext>
  ,
  document.getElementById('root')
);
