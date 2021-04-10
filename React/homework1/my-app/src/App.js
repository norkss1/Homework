import React from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import './styles/style.scss'
import './styles/Buttons.scss'

const backgroundColor = ['#000', '#fff', '#b3382c', '#7c32ab', 'rgba(0,0,0,.4)']
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

    switchBackgroundRoot = (val) => {
        document.getElementById("root").style.backgroundColor = val;
    }


    render() {
        const {openFirst, openSecond} = this.state;

        if (!openFirst && !openSecond) {
            this.switchBackgroundRoot(backgroundColor[1]);
            return (
                <>
                    <div className={"container"}>
                        <Button
                            className="openFirstModal"
                            backgroundColor={backgroundColor[0]}
                            text={textBtn[0]}
                            onClick={this.switchFirstModal}
                        />

                        <Button
                            className="openSecondModal"
                            backgroundColor={backgroundColor[1]}
                            text={textBtn[1]}
                            onClick={this.switchSecondModal}
                        />
                    </div>
                </>
            )
        }

        this.switchBackgroundRoot(backgroundColor[4]);

        return (
            <> {openFirst &&
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
                                backgroundColor={backgroundColor[2]}
                                text={"Ok"}
                                onClick={this.switchFirstModal}
                            />
                            <Button
                                className="modalBtn modalBtn-cancel modalBtn1-cancel"
                                backgroundColor={backgroundColor[2]}
                                text={"Cancel"}
                                onClick={this.switchFirstModal}
                            />
                        </div>
                    }
                />
                }

                {openSecond &&
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
                                    backgroundColor={backgroundColor[3]}
                                    text={"Ok"}
                                    onClick={this.switchSecondModal}
                                />
                                <Button
                                    className="modalBtn modalBtn-cancel modalBtn2-cancel"
                                    backgroundColor={backgroundColor[3]}
                                    text={"Cancel"}
                                    onClick={this.switchSecondModal}
                                />
                            </div>
                        }
                    />
                }
            </>
        )
    }
}

export default App;
