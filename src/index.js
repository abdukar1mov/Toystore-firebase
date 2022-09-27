import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
