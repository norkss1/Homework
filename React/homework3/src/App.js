import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import ProductsList from './components/ProductList'
import ProductsFavorites from "./components/ProductFavorites";
import ProductCart from "./components/ProductCart";
import Modal from "./components/Modal";
import Button from "./components/Button";
import './styles/style.scss'


const PRODUCT_LINK = "./productCollections.json";

const App = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [confirmAction, setConfirmAction] = useState(null)

    const [addFavorites, setAddFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []);
    const [shopBasket, setShopBasket] = useState(localStorage.getItem('shop-basket') ? JSON.parse(localStorage.getItem('shop-basket')) : []);


    function addToCart(id) {

        const foundCartItem = shopBasket.find(item => item.id === id)

        let cartItems;
        if (foundCartItem) {
            cartItems = shopBasket.map(item => {
                if (item.id === id) {
                    return {
                        id: id,
                        count: item.count + 1,
                    }
                }
                return item;
            })
        } else {
            cartItems = [...shopBasket, {
                id: id,
                count: 1
            }];
        }
        setShopBasket(cartItems)
        localStorage.setItem('shop-basket', JSON.stringify(cartItems))
    }


    function deleteFromCart(id) {

        const cartItems = shopBasket.filter(item => item.id === id ? false : true);

        setShopBasket(cartItems)
        localStorage.setItem('shop-basket', JSON.stringify(cartItems))
    }


    function switchFav(id) {

        let favorites;

        if (addFavorites.includes(id)) {
            favorites = addFavorites.filter((n) => n !== id);
        } else {
            favorites = [...addFavorites, id];
        }

        setAddFavorites(favorites);
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }


    useEffect(() => {
        setIsLoading(true);


        fetch(`${PRODUCT_LINK}`).then(res => {
            if (res.ok) {
                return res.json();
            }

            throw new Error("Failed to load")
        })
            .then((products) => {
                setProducts(products)
            })
            .catch((e) => {
                setError(e)
            }).finally(() => {
            setIsLoading(false)
        })
    }, [])


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
                        onAddFavorites={switchFav}
                        onClickAddToCart={(id) => {
                            setConfirmAction({
                                actionType: "add",
                                id: id,
                            })
                        }}
                        onClickDelete={deleteFromCart}
                    />}
                />

                <Route exact path={'/favorites'} render={() =>
                    <ProductsFavorites
                        products={products.filter((product) => addFavorites.includes(product.article)).map(mapProductWithFavorite)}
                        onAddFavorites={switchFav}
                        onClickAddToCart={(id) => {
                            setConfirmAction({
                                actionType: "add",
                                id: id,
                            })
                        }}
                    />}
                />

                <Route exact path={'/cart'} render={() =>
                    <ProductCart
                        products={products.filter((product) =>
                            shopBasket.find(item => item.id === product.article)
                        ).map(mapProductWithFavorite)}
                        onClickDelete={(id) => {
                            setConfirmAction({
                                actionType: "delete",
                                id: id,
                            })
                        }}
                    />}
                />
            </Switch>}
            {confirmAction && <Modal
                theme={"add"}
                header={confirmAction.actionType === "add"
                    ? 'Do you want add this product?'
                    : 'Do you want delete this product?'}
                closeButton={false}
                text={confirmAction.actionType === "add"
                    ? 'Are you sure you want to add this product?'
                    : 'Once you delete this product, it won\'t be possible to undo this action. Are you sure you want to delete it?'}
                onBackClick={() => {
                    setConfirmAction(null)
                }}
                actions={
                    <div className="containerButton containerButton_add">
                        <Button
                            className="modalBtn modalBtn-ok"
                            text={"Ok"}
                            onClick={() => {
                                confirmAction.actionType === "add"
                                    ? addToCart(confirmAction.id)
                                    : deleteFromCart(confirmAction.id);
                                setConfirmAction(null);
                            }
                            }
                        />
                        <Button
                            className="modalBtn modalBtn-cancel modalBtn1-cancel"
                            text={"Cancel"}
                            onClick={() => {
                                setConfirmAction(null)
                            }}
                        />
                    </div>}
            />}
        </>
    )
}


export default App;
