import React from 'react'
import TwitterIcon from '../../../components/icons/TwitterIcon'
import Input from '../../../components/Form/input'
import './Login.css'

export default function Login() {
    return (
        <div className="login__container form">
            {/* <span className="logo">
                <TwitterIcon fill="#e7e9ea" />
            </span>
            <div className="login__title">
                <span>Sign in to Twitter</span>
            </div>
            <form className="login__form">
                <div className="login__buttons">
                    <button>Sign in with Google</button>
                    <button>Sign in with Apple</button>
                </div>
                <div className="login__line">
                    <span>or</span>
                </div>
                <div className="login__input">
                    <Input 
                        type="email"
                        label="Email"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="login__buttons">
                    <button>Next</button>
                    <button className='login__forgot__button'>Forgot password</button>
                </div>
            </form>
            <div className='login__signUp'>
                <span>Don't have an account? <a href="#">Sign up</a></span>
            </div> */}

            
            <div className="login__title">
                <span>Enter your password</span>
            </div>
            <form className='login__form'>
                <div className="login__form__inputs">
                    <div className="login__input login__form_last">
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                        />
                    </div>
                    <div className="login__input login__form_last">
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            label="Password"
                        />
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
                <div className="login__buttons form__button">
                    <button>Log in</button>
                    <div className='login__form__signUp login__signUp'>
                        <span>Don't have an account? <a href="#">Sign up</a></span>
                    </div>
                </div>
            </form>
        </div>
    )
}
