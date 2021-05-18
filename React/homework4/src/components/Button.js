import React from "react";
import '../styles/Buttons.scss'
import PropTypes from 'prop-types';


const Button = (props) => {
    const {className, text, onClick, disabled} = props;

    return (
        <button disabled={disabled ? "disabled" : ""} className={className} onClick={onClick}>{text}</button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;

