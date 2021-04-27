import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Header from "./components/Header";
import App from './App'
import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <div className={"container"}>
                <Header/>
                <App/>
            </div>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);
