import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';

import App from './ComponentArch/App';
//import App from "./CleanArch/App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);