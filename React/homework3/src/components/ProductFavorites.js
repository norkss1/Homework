import ProductCard from "./ProductCard";
import React from "react";
import PropTypes from 'prop-types';

const ProductsFavorites = (props) => {

    const {products, onAddFavorites, onClickAddToCart} = props;

    return (
        <>
            <div className={"product-list"}>
                {!products.length && <div>There are no favorites at the moment</div>}
                {products && products.map(product => {
                    return (
                        <div className={"product-cart"} id={product.article} key={product.article}>
                            <ProductCard
                                product={product}
                                onFavoritesClick={() => onAddFavorites(product.article)}
                                onAddToCartClick={() => onClickAddToCart(product.article)}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

ProductsFavorites.propTypes = {
    products: PropTypes.array,
    onAddFavorites: PropTypes.func,
    onClickAddToCart: PropTypes.func,
};


export default ProductsFavorites;