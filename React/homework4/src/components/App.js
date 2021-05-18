import React from 'react';
import Header from "./Header";
import Main from './Main'

import '../styles/index.css';


const App = () => {

    return (
        <div className={"container"}>
            <Header/>
            <Main/>
        </div>
    )
}

export default App;