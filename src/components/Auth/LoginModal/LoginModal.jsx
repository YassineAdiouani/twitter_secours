import React from 'react';
import CloseIcon from '../../Icons/CloseIcon';
import './LoginModal.css';
import { useStateContext } from '../../../contexts/ContextProvider';

export default function LoginModal({ cheldren }) {
    const { AuthModal, setAuthModal } = useStateContext();
    return (
        <div className={AuthModal ? "overlay  isActive" : 'overlay'}>
            <div className="login__content">
                <span onClick={() => setAuthModal(false)} 
                    className="modal__close">
                    <CloseIcon />
                </span>
                <div className="modal__body">
                    {
                        cheldren
                    }
                </div>
            </div>
        </div>
    )
}
