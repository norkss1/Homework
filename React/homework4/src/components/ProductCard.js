import React from "react";
import '../styles/Product.scss'
import Button from './Button';
import FavoritesStars from "./FavoritesStars";
import {confirmAction, switchFav} from "../redux/products/actions/actions";
import {useDispatch} from "react-redux";


const ProductCard = (props) => {

    const {product, onDeleteClick} = props;
        const {name, price, url, id, isFavorite} = product;

    const dispatch = useDispatch();

    return (
        <>
            <div className={"product-cart-img"}>
                <img src={url} alt={name}/>

                <FavoritesStars
                    id={id}
                    isFav={isFavorite}
                    onClick={() => dispatch(switchFav(product.article))}
                />

                {onDeleteClick &&
                <div className={"product-cart-overlay"}
                     onClick={() => dispatch(confirmAction({
                    actionType: "delete",
                    id: product.article,
                }))}>
                    <img src={"./images/cancel.png"} alt={"Cancel"}/>
                </div>}
            </div>
            <h3 className={"product-cart-title"}>{name}</h3>
            <h4 className={"product-cart-price"}>{price} {<span>UAH</span>}</h4>

            {!onDeleteClick &&
            <Button
                className={!product.count ? "openModal" : "blockedModal"}
                text={!product.count ? "Add to cart" : "Product be added"}
                onClick={() => {
                    dispatch(confirmAction({
                        actionType: "add",
                        id: product.article,
                    }))
                }
                }
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