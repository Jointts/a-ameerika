import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";

ReactDOM.render(
    <React.StrictMode>
        <ToastContainer position="top-center" autoClose={10000}/>
        <Home />
    </React.StrictMode>,
  document.getElementById('root')
);
