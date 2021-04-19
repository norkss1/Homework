import React from "react";
import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';

class ProductsList extends React.Component {

    state = {
        products: null,
        isLoading: false,
        error: null,
        onClick: this.props.onClick,
        addFavorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
        shopBasket: localStorage.getItem('shop-basket') ? JSON.parse(localStorage.getItem('shop-basket')) : [],
    }

    onAddFavorites = (selected) => {
        this.setState({addFavorites: selected})
        localStorage.setItem('favorites', JSON.stringify(selected))
    }

    onClickAddToCart = (id) => {
        let arrPurchase = [...this.state.shopBasket, id]
        this.setState({shopBasket: arrPurchase})
        localStorage.setItem('shop-basket', JSON.stringify(arrPurchase))
    }


    componentDidMount() {

        this.setState({isLoading: true})

        fetch("./productCollections.json").then(res => {
            if (res.ok) {
                return res.json();
            }

            throw new Error("Failed to load")
        })
            .then((products) => {
                this.setState({products: products, isLoading: false})
            })
            .catch((e) => {
                this.setState({error: e.message, isLoading: false})
            });
    }


    render() {
        const {products, isLoading, error, addFavorites} = this.state;

        return (
            <div className={"product-list"}>
                {isLoading && <div>Loading</div>}
                {error && <div>{error}</div>}
                {products && !products.length && <div>No products</div>}
                {products && products.map(product => {
                    return (
                        <div className={"product-card"} key={product.article}>
                            <ProductCard
                                name={product.name}
                                url={product.url}
                                price={product.price}
                                onClick={this.state.onClick}
                                addFavorites={addFavorites}
                                onAddFavorites={this.onAddFavorites}
                                onClickAddToCart={this.onClickAddToCart}
                                id={product.article}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}


ProductsList.propTypes = {
    products: PropTypes.object,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    onClick: PropTypes.func,
    selected: PropTypes.array,
    id: PropTypes.string,
    addFavorites: PropTypes.array,
    shopBasket: PropTypes.array
};



export default ProductsList;