import React from 'react';
import logo from '../../assets/soup.png';
import './Modal.css'


class Modal extends React.Component {

    render() {
        const { visible, onClose } = this.props;

        return (
            <div className={`overlay ${visible ? 'visible' : ''}`}>
                <div className="container">
                    <div className="modalHeader">
                        <img className="logo" src={logo} alt="site logo" onClick={this.backToMain}/>
                        <span>Ravenous</span>
                        <a className="closeModal" onClick={onClose}>Close</a>
                    </div>
                    <div className="modalContent">
                        <span>Welcome back!</span>
                        <p>Please enter your registered email or phone number to sign in.</p>
                        <input placeholder="email or phone number"></input>
                        <button>Next</button>
                        <div className="modalNote">Not a Ravenous member ? <a>Sign up</a></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Modal;