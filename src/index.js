import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { userContext } from './pages/products/context';

const port = process.env.PORT || 3000;
App.listen(port, () => console.log('listening song on port 3000'))

ReactDOM.render(
  <React.StrictMode>
    <userContext>
      <App />
    </userContext>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
