import React from 'react';
import './NewToTwitter.css';

export default function NewToTwitter() {
    return (
        <>
            <div className="NewToTwitter">
                <div className="newtotwitter__form">
                    <header className='new__header'>
                        <span className='new__title'>New to Twitter?</span>
                        <p className='new__parag'>Signup now to get your own personalized timeline!</p>
                    </header>
                    <div className="new__body">
                        <button>Sign up with google</button>
                        <button>Sign up with Apple</button>
                        <button>Create account</button>
                    </div>
                    <div className="new__footer">
                        <span>By signing up, you agree to the <a href="#">Terms of Service</a> 
                        and <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.</span>
                    </div>
                </div>
                <span className='new__title__footer'>
                    <div className="new_links">
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookie Policy</a>
                        <a href="#">Accessibility</a>
                        <a href="#">Ads info</a>
                        <a href="#">More...</a>
                    </div><br />
                    <p> &copy; 2023 Twitter, Inc. </p>
                </span>
            </div>
        </>
    )
}
