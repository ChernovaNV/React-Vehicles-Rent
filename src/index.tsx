import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from 'store';


const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
);

