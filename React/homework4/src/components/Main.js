import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import ProductsList from './ProductList'
import ProductsFavorites from "./ProductFavorites";
import ProductCart from "./ProductCart";
import Modal from "./Modal";
import Button from "./Button";
import '../styles/Main.scss'
import productsLoading from "../redux/products/actions/productsLoading";

import {
    addToCart,
    deleteFromCart,
    confirmAction,
} from "../redux/products/actions/actions"


const Main = () => {

    const {products, isLoading, error, confirm, addFavorites, shopBasket} = useSelector((state) => ({
        products: state.products,
        isLoading: state.isLoading,
        error: state.error,
        confirm: state.confirmAction,
        addFavorites: state.addFavorites,
        shopBasket: state.shopBasket
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsLoading())
    }, []);


    const mapProductWithFavorite = (product) => {
        return {
            ...product,
            isFavorite: addFavorites.includes(product.article),
            count: shopBasket.find((item) => item.id === product.article)?.count,
        }
    }


    return (
        <>
            {isLoading && <div>Loading</div>}
            {error && <div>{error}</div>}
            {<Switch>
                <Route exact path={'/'} render={() =>
                    <ProductsList
                        products={products.map(mapProductWithFavorite)}
                    />}
                />

                <Route exact path={'/favorites'} render={() =>
                    <ProductsFavorites
                        products={products.filter((product) => addFavorites.includes(product.article)).map(mapProductWithFavorite)}
                    />}
                />

                <Route exact path={'/cart'} render={() =>
                    <ProductCart
                        products={products.filter((product) =>
                            shopBasket.find(item => item.id === product.article)
                        ).map(mapProductWithFavorite)
                        }
                    />}
                />

            </Switch>}

            {confirm && <Modal
                theme={"add"}
                header={confirm.actionType === "add"
                    ? 'Do you want add this product?'
                    : 'Do you want delete this product?'}
                text={confirm.actionType === "add"
                    ? 'Are you sure you want to add this product?'
                    : 'Once you delete this product, it won\'t be possible to undo this action. Are you sure you want to delete it?'}
                onBackClick={() => {
                    dispatch(confirmAction(null))
                }}
                actions={
                    <div className="containerButton containerButton_add">
                        <Button
                            className="modalBtn modalBtn-ok"
                            text={"Ok"}
                            onClick={() => {
                                confirm.actionType === "add"
                                    ? dispatch(addToCart(confirm.id))
                                    : dispatch(deleteFromCart(confirm.id));
                                dispatch(confirmAction(null));
                            }
                            }
                        />
                        <Button
                            className="modalBtn modalBtn-cancel modalBtn1-cancel"
                            text={"Cancel"}
                            onClick={() => {
                                dispatch(confirmAction(null))
                            }}
                        />
                    </div>}
            />}
        </>
    )
}


export default Main;