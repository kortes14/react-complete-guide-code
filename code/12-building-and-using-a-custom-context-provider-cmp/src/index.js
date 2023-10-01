import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //a sem obalim cely App s mojim novym AuthContextProvider
  // one central auth place management
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
