import ProductCard from "./ProductCard";
import React from "react";
import {confirmAction, switchFav} from "../redux/products/actions/actions";
import {useDispatch} from "react-redux";

const ProductCart = (props) => {

    const {products} = props;

    const dispatch = useDispatch();

    return (
        <>
            <div className={"product-list"}>
                {!products.length && <div>There are no products at the moment</div>}
                {products && products.map(product => {
                    return (
                        <div className={"product-cart"} id={product.article} key={product.article}>
                            <ProductCard
                                product={product}
                                onFavoritesClick={() => dispatch(switchFav(product.article))}
                                onDeleteClick={() => dispatch(confirmAction({
                                    actionType: "delete",
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

export default ProductCart;