import React from "react";
import '../styles/FavoritesStars.scss'
import PropTypes from 'prop-types';

const FavoritesStars = (props) => {
    const {addFavorites, onAddFavorites, id} = props;


    return (<div className={"product-card-star"}>

            {(addFavorites.includes(id)) ? (
                <input type={"image"} src={"./images/favorites-on.png"} alt={""} onClick={() => {
                    onAddFavorites(addFavorites.filter((n) => n !== id));
                }}/>) : (<input type={"image"} src={"./images/favorites-off.png"} alt={""} onClick={() => {
                onAddFavorites([...addFavorites, id]);
            }}/>)}
        </div>
    )
}

FavoritesStars.propTypes = {
    addFavorites: PropTypes.array,
    onAddFavorites: PropTypes.func,
}

export default FavoritesStars;