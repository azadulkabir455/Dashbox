import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalContextConsumer } from './contextApi/GlobalContext';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import App from './App';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/minty/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "react-toastify/dist/ReactToastify.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <GlobalContextConsumer>
          <>
            <App />
            <ToastContainer />
          </>
        </GlobalContextConsumer>
      </Router>
    </Provider>
  </React.StrictMode>
);
