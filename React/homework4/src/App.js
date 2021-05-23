import React from 'react';
import Header from "./components/Header";
import Main from './components/Main'

import './styles/index.css';


const App = () => {

    return (
        <div className={"container"}>
            <Header/>
            <Main/>
        </div>
    )
}

export default App;