import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import store from './store';
import { Provider } from 'react-redux';
import { GlobalContextConsumer } from './contextApi/GlobalContext';
import { AuthContextConsumer } from './contextApi/AuthContext';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import App from './App';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/yeti/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "react-toastify/dist/ReactToastify.css"
import "./assets/css/global.scss"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <AuthContextConsumer>
            <GlobalContextConsumer>
              <>
                <App />
                <ToastContainer
                  autoClose={3000}
                  hideProgressBar={false}
                />
              </>
            </GlobalContextConsumer>
          </AuthContextConsumer>
        </ErrorBoundary>
      </Router>
    </Provider>
  </React.StrictMode>
);
