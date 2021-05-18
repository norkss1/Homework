import React from "react";
import '../styles/FavoritesStars.scss'
import PropTypes from 'prop-types';

const FavoritesStars = (props) => {
    const {id, isFav, onClick} = props;

    return (<div className={"product-cart-star"}>
            {isFav ?
                <input type={"image"} src={"./images/favorites-on.png"} alt={""} onClick={() => {onClick(id)}}/>
            :
                (<input type={"image"} src={"./images/favorites-off.png"} alt={""} onClick={() => {onClick(id)}}/>)}
        </div>
    )
}

FavoritesStars.propTypes = {
    id: PropTypes.string,
    isFav: PropTypes.bool,
    onClick: PropTypes.func,
}

FavoritesStars.defaultProps = {
    isFav: false,
}

export default FavoritesStars;