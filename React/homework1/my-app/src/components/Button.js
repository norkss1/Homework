import React from "react";


class Button extends React.Component {

    render() {

        const { className, backgroundColor, text, onClick} = this.props;

        return (
                <button className={className} onClick={onClick} style={{backgroundColor: backgroundColor}}>{text}</button>
        )
    }
}


export default Button;

