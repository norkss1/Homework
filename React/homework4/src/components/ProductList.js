import React from "react";
import {useDispatch} from "react-redux";

import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';

import {
    switchFav,
    confirmAction,
} from "../redux/products/actions/actions"


const ProductsList = (props) => {

    const {products} = props;

    const dispatch = useDispatch();

    return (
        <>
            <div className={"product-list"}>
                {products && !products.length && <div>There are no products at the moment</div>}
                {products && products.map(product => {
                    return (
                        <div className={"product-cart"} id={product.article} key={product.article}>
                            <ProductCard
                                product={product}
                                onFavoritesClick={() => dispatch(switchFav(product.article))}
                                onAddToCartClick={() => {
                                    console.log('Click add card')
                                    dispatch(confirmAction({
                                        actionType: "add",
                                        id: product.article,
                                    }))
                                }}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

ProductsList.propTypes = {
    products: PropTypes.array,
    onAddFavorites: PropTypes.func,
    onClickAddToCart: PropTypes.func,
};


export default ProductsList;