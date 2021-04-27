import React from "react";
import Button from './Button';
import '../styles/Modal.scss'
import PropTypes from 'prop-types';

const Modal = (props) => {
    const {header, text, onBackClick, actions, theme} = props;

    return (
        <>
            <div className={"fixed-overlay"} onClick={onBackClick}>
                <div className={`modal-wrapper modal-wrapper_${theme}`}>
                    <div className={`modal modal_${theme}`}>
                        <div className={`modal-header modal-header_${theme}`}>
                            <h3>{header}</h3>
                            <Button className={"modal-close-btn"}
                                    backgroundColor={"none"}
                                    onClick={onBackClick}
                            />
                        </div>
                        <div className={`modal-text modal-text_${theme}`}>{text}</div>
                        {actions}
                    </div>
                </div>
            </div>
        </>
    )
}

Modal.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    onBackClick: PropTypes.func,
    theme: PropTypes.string,
};

Modal.defaultProps = {
    text: "___"
}

export default Modal;