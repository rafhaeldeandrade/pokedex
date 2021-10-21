import React from 'react';
import ReactDOM from 'react-dom';
import PokedexContextProvider from './context/PokedexContextProvider';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <PokedexContextProvider>
    <App />
    </PokedexContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
