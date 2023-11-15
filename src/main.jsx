import { StoreProvider } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './assets/./app/./App.jsx';
import store from './assets/states/store.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider store={store}> 
    <App/>
  </StoreProvider>
)
