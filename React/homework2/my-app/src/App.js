import React from 'react';
import ProductsList from './components/ProductList'
import './styles/style.scss'

class App extends React.Component {

    render() {
        return (
            <>
                <div className={"container"}>
                    <ProductsList/>
                </div>
            </>
        )
    }
}

export default App;
