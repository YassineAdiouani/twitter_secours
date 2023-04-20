import React from 'react';
import CloseIcon from '../../Icons/CloseIcon';
import './LoginModal.css';
import { useStateContext } from '../../../contexts/ContextProvider';
import Login from '../../../pages/Auth/Login/Login';

export default function LoginModal() {
    const { AuthModal, setAuthModal } = useStateContext();
    return (
        <div className={AuthModal ? "overlay  isActive" : 'overlay'}>
            <div className="login__content">
                <span onClick={() => setAuthModal(false)} 
                    className="modal__close">
                    <CloseIcon />
                </span>
                <div className="modal__body">
                    <Login />
                </div>
            </div>
        </div>
    )
}
