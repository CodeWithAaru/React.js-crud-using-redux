import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'; // Import your Redux store configuration
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
