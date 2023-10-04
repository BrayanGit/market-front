import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import { UserProvider } from './userContext';
import { CarritoProvider } from "./CarritoContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </UserProvider>
  </React.StrictMode>,
);


