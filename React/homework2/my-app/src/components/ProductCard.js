import React from "react";
import '../styles/Product.scss'
import Button from './Button';
import Modal from './Modal';
import FavoritesStars from './FavoritesStars';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        }
    }

    switchModal = () => {
        this.setState({
            open: !this.state.open,
        })
    }


    render() {
        const {open} = this.state;
        const {name, price, url, addFavorites, onAddFavorites, onClickAddToCart, id} = this.props;

        return (
            <>
                <div className={"product-card-img"}>
                    <img src={url} alt={name}/>
                    <FavoritesStars
                        addFavorites={addFavorites}
                        onAddFavorites={onAddFavorites}
                        id={id}
                    />
                </div>
                <h3 className={"product-card-title"}>{name}</h3>
                <h4 className={"product-card-price"}>{price} {<span>UAH</span>}</h4>
                <Button
                    className="openModal"
                    text={"Add to cart"}
                    onClick={this.switchModal}
                />

                {(open) && <Modal
                    theme={"add"}
                    header={'Do you want delete this file?'}
                    closeButton={false}
                    text={'Once you delete this file, it won\'t be possible to undo this action. Are you sure you want to delete it?'}
                    onBackClick={this.switchModal}
                    actions={
                        <div className="containerButton containerButton_add">
                            <Button
                                className="modalBtn modalBtn-ok"
                                text={"Ok"}
                                onClick={() => {
                                    onClickAddToCart(id);
                                    this.switchModal();
                                    }
                                }
                            />
                            <Button
                                className="modalBtn modalBtn-cancel modalBtn1-cancel"
                                text={"Cancel"}
                                onClick={this.switchModal}
                            />
                        </div>}
                />}
            </>
        )
    }
}


ProductCard.propTypes = {
    open: PropTypes.bool,
    FavoritesStars: PropTypes.elementType,
};

ProductCard.defaultProps = {
    addFavorites: [],
    price: '---'
}

export default ProductCard;