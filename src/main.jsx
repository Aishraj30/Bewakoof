import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Usercontext from './Context/Usercontext.jsx';
import { Provider } from 'react-redux';
import { store } from './Redux/Store.js';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Usercontext>
          <App />
        </Usercontext>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
