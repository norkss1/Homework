import ProductCard from "./ProductCard";
import React from "react";

const ProductCart = (props) => {

    const {products} = props;

    return (
        <>
            <div className={"product-list"}>
                {!products.length && <div>There are no products at the moment</div>}
                {products && products.map(product => {
                    return (
                        <div className={"product-cart"} id={product.article} key={product.article}>
                            <ProductCard
                                product={product}
                                onDeleteClick={true}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProductCart;