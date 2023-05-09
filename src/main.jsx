import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CreditCardProvider } from './context/CreditCardProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CreditCardProvider>
      <App />
    </CreditCardProvider>
  </React.StrictMode>
);
