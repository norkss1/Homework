import ProductCard from "./ProductCard";
import React from "react";
import PropTypes from 'prop-types';
import {confirmAction, switchFav} from "../redux/products/actions/actions";
import {useDispatch} from "react-redux";

const ProductsFavorites = (props) => {

    const {products} = props;

    const dispatch = useDispatch();

    return (
        <>
            <div className={"product-list"}>
                {!products.length && <div>There are no favorites at the moment</div>}
                {products && products.map(product => {
                    return (
                        <div className={"product-cart"} id={product.article} key={product.article}>
                            <ProductCard
                                product={product}
                                onFavoritesClick={() => dispatch(switchFav(product.article))}
                                onAddToCartClick={() => dispatch(confirmAction({
                                    actionType: "add",
                                    id: product.article,
                                }))}
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