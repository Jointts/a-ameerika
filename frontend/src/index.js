import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./Home";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer autoClose={10000}/>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
