import React from "react";
import '../styles/Product.scss'
import Button from './Button';
import FavoritesStars from "./FavoritesStars";


const ProductCard = (props) => {

    const {product, onFavoritesClick, onAddToCartClick, onDeleteClick} = props;
    const {name, price, url, id, isFavorite} = product;

    return (
        <>
            <div className={"product-cart-img"}>
                <img src={url} alt={name}/>
                {onFavoritesClick &&
                <FavoritesStars
                    id={id}
                    isFav={isFavorite}
                    onClick={onFavoritesClick}
                />
                }
                {onDeleteClick &&
                <div className={"product-cart-overlay"} onClick={onDeleteClick}>
                    <img src={"./images/cancel.png"}/>
                </div>}
            </div>
            <h3 className={"product-cart-title"}>{name}</h3>
            <h4 className={"product-cart-price"}>{price} {<span>UAH</span>}</h4>
            {onAddToCartClick &&
            <Button
                className={!product.count ? "openModal": "blockedModal"}
                text={!product.count ? "Add to cart": "Product be added"}
                onClick={onAddToCartClick}
                disabled={product.count}
            />
            }
        </>
    )
}

ProductCard.defaultProps = {
    addFavorites: [],
    price: '---'
}

export default ProductCard;