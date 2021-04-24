import React from "react";
import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';
import Modal from "./Modal";
import Button from "./Button";

class ProductsList extends React.Component {

    state = {
        products: null,
        isLoading: false,
        error: null,
        addFavorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
        shopBasket: localStorage.getItem('shop-basket') ? JSON.parse(localStorage.getItem('shop-basket')) : [],
        isOpen: false,
        idModal: null,
    }

    switchModal = (id) => {
        if (!this.state.idModal) {
            this.setState({
                idModal: id,
            })
        } else {
            this.setState({
                idModal: null
            })
        }

        this.setState({
            isOpen: !this.state.isOpen,
        })
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
        const {products, isLoading, error, addFavorites, isOpen, idModal} = this.state;

        return (
            <div className={"product-list"}>
                {isLoading && <div>Loading</div>}
                {error && <div>{error}</div>}
                {products && !products.length && <div>No products</div>}
                {products && products.map(product => {
                    return (
                        <div className={"product-card"} id={product.article} key={product.article}>
                            <ProductCard
                                name={product.name}
                                url={product.url}
                                price={product.price}
                                addFavorites={addFavorites}
                                onAddFavorites={this.onAddFavorites}
                                onClick={this.switchModal}
                                id={product.article}
                            />

                            {isOpen && idModal === product.article && <Modal
                                theme={"add"}
                                header={'Do you want delete this file?'}
                                closeButton={false}
                                text={'Once you delete this file, it won\'t be possible to undo this action. Are you sure you want to delete it?'}
                                onBackClick={this.switchModal}
                                actions={
                                    <div className="containerButton containerButton_add">
                                        <Button
                                            className="modalBtn modalBtn-ok"
                                            text={"Ok"}
                                            onClick={() => {
                                                this.onClickAddToCart(product.article);
                                                this.switchModal();
                                            }
                                            }
                                        />
                                        <Button
                                            className="modalBtn modalBtn-cancel modalBtn1-cancel"
                                            text={"Cancel"}
                                            onClick={this.switchModal}
                                        />
                                    </div>}
                            />}
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