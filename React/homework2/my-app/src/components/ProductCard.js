import React from "react";
import '../styles/Product.scss'
import Button from './Button';
import PropTypes from 'prop-types';
import FavoritesStars from "./FavoritesStars";

class ProductCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFav: false,
        }
    }

    switchFav = (id) => {
        this.setState({
            isFav: !this.state.isFav,
        })

        if (this.props.addFavorites.includes(id)) {
            this.props.onAddFavorites(this.props.addFavorites.filter((n) => n !== id))
        } else {
            this.props.onAddFavorites([...this.props.addFavorites, id])
        }
    }


    componentDidMount() {
        if (this.props.addFavorites.includes(this.props.id)) {
            this.setState({
                isFav: true,
            })
        }
    }

    render() {
        const {name, price, url, id, onClick} = this.props;

        return (
            <>
                <div className={"product-card-img"}>
                    <img src={url} alt={name}/>
                    <FavoritesStars
                        id={id}
                        isFav={this.state.isFav}
                        onClick={this.switchFav}
                    />
                </div>
                <h3 className={"product-card-title"}>{name}</h3>
                <h4 className={"product-card-price"}>{price} {<span>UAH</span>}</h4>
                <Button
                    className="openModal"
                    text={"Add to cart"}
                    onClick={() => {onClick(id)}}
                />
            </>
        )
    }
}


ProductCard.propTypes = {
    FavoritesStars: PropTypes.elementType,
};

ProductCard.defaultProps = {
    addFavorites: [],
    price: '---'
}

export default ProductCard;