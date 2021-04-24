import React from "react";
import '../styles/Buttons.scss'
import PropTypes from 'prop-types';

class Button extends React.Component {

    render() {
        const { className, text, onClick} = this.props;

        return (
                <button className={className} onClick={onClick}>{text}</button>
        )
    }
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;

