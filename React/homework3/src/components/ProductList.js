import React from "react";
import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';

const ProductsList = (props) => {

    const {products, onAddFavorites, onClickAddToCart} = props;

    return (
        <>
            <div className={"product-list"}>
                {products && !products.length && <div>There are no products at the moment</div>}
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

ProductsList.propTypes = {
    products: PropTypes.array,
    onAddFavorites: PropTypes.func,
    onClickAddToCart: PropTypes.func,
};


export default ProductsList;