import React from "react";
import Button from './Button';
import '../styles/Modal.scss'

class Modal extends React.Component {

    render() {
        const {header, text, onBackClick, actions, theme} = this.props;

        return (
            <div className={"modal-first-wrapper" + " " + "modal-first-wrapper_" + `${theme}`}>
                <div className={"modal-first" + " " + "modal-first_" + `${theme}`}>
                    <div className={"modal-header" + " " + "modal-header_" + `${theme}`}>
                        <h3>{header}</h3>
                        <Button className={"modal-close-btn"}
                                backgroundColor={"none"}
                                onClick={onBackClick}
                        />
                    </div>
                    <div className={"modal-text" + " " + "modal-text_" + `${theme}`}>{text}</div>
                    {actions}

                </div>
            </div>
        )
    }
}

export default Modal;