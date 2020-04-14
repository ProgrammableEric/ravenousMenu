import React from 'react';
import logo from '../../assets/soup.png';
import './Modal.css'


class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            readyToNext: false,
        }
        this.nextButtonReady = this.nextButtonReady.bind(this);
        this.nextButtonNotReady = this.nextButtonNotReady.bind(this);
    }

    nextButtonReady(event) {
        if (event.target.value) this.setState({readyToNext: true});
        else this.nextButtonNotReady();
    }

    nextButtonNotReady() {
        this.setState({readyToNext: false});
    }

    handleOverlayClick(event) {
        const target = event.path[0];
        if (target === this.node) {
            this.props.onClose();
        }
    }

    render() {
        const { visible, onClose } = this.props;
        const { readyToNext } = this.state;

        return (
            <div className={`overlay ${visible ? 'visible' : ''}`} onClick={this.handleOverlayClick}>
                <div className="container">
                    <div className="modalHeader">
                        <img className="logo" src={logo} alt="site logo" onClick={this.backToMain}/>
                        <span>Ravenous</span>
                        <a className="closeModal" onClick={onClose}>Close</a>
                    </div>
                    <div className="modalContent">
                        <span>Welcome back!</span>
                        <p>Please enter your registered email or phone number to sign in.</p>
                        <input type="text" placeholder="email or phone number" onChange={this.nextButtonReady}></input>
                        <button className={ readyToNext ? 'readyToNext' : '' }>Next</button>
                        <div className="modalNote">Not a Ravenous member ? <a>Sign up</a></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Modal;