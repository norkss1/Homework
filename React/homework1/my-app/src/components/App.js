import React from 'react';
import Button from './Button';
import Modal from './Modal';
import '../styles/style.scss'
import '../styles/Buttons.scss'

const backgroundColorBrn = ['#000', '#fff', '#b3382c', '#7c32ab']
const textBtn = ['Open first modal', 'Open second modal'];


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            openFirst: false,
            openSecond: false,
        };
    }


    switchFirstModal = () => {
        this.setState({
            openFirst: !this.state.openFirst,
        })
    }

    switchSecondModal = () => {

        this.setState({
            openSecond: !this.state.openSecond,
        })
    }


    render() {
        const {openFirst, openSecond} = this.state;

        if (!openFirst && !openSecond) {
            return (
                <>
                    <div className={"container"}>
                        <Button
                            className="openFirstModal"
                            backgroundColor={backgroundColorBrn[0]}
                            text={textBtn[0]}
                            onClick={this.switchFirstModal}
                        />

                        <Button
                            className="openSecondModal"
                            backgroundColor={backgroundColorBrn[1]}
                            text={textBtn[1]}
                            onClick={this.switchSecondModal}
                        />
                    </div>
                </>
            )
        }

        if (openFirst) {
            return (
                <>
                    <Modal
                        theme={1}
                        header={'Do you want delete this file?'}
                        closeButton={false}
                        text={'Once you delete this file, it won\'t be possible to undo this action. Are you sure you want to delete it?'}
                        onBackClick={this.switchFirstModal}
                        actions={
                            <div className="containerButton containerButton_1">
                                <Button
                                    className="modalBtn modalBtn1-ok"
                                    backgroundColor={backgroundColorBrn[2]}
                                    text={"Ok"}
                                    onClick={this.switchFirstModal}
                                />
                                <Button
                                    className="modalBtn modalBtn-cancel modalBtn1-cancel"
                                    backgroundColor={backgroundColorBrn[2]}
                                    text={"Cancel"}
                                    onClick={this.switchFirstModal}
                                />
                            </div>
                        }
                    />
                </>
            )
        }

        if (openSecond) {
            return (
                <>
                    <Modal
                        theme={2}
                        header={'Вы выбрали белую кнопку, круто !!!'}
                        closeButton={true}
                        text={'Чтобы закрыть это окно - нажмите на любую из кнопок и все исчезнет'}
                        onBackClick={this.switchSecondModal}
                        actions={
                            <div className="containerButton containerButton_2">
                                <Button
                                    className="modalBtn modalBtn2-ok"
                                    backgroundColor={backgroundColorBrn[3]}
                                    text={"Ok"}
                                    onClick={this.switchSecondModal}
                                />
                                <Button
                                    className="modalBtn modalBtn-cancel modalBtn2-cancel"
                                    backgroundColor={backgroundColorBrn[3]}
                                    text={"Cancel"}
                                    onClick={this.switchSecondModal}
                                />
                            </div>
                        }
                    />
                </>

            )
        }

    }
}

export default App;
