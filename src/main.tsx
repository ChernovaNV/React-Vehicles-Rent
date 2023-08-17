import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';


import 'app/styles/index.scss'

import { setupStore } from 'app/providers/Store';


const store = setupStore();

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>, 
      </BrowserRouter>
  </React.StrictMode>,
)


