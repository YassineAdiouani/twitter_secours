import React from 'react'
import './Input.css';

export default function Input(props) {
    
    const { type, pattern, style, className, id, name, label, icon } = props

    return (
        <div className="twitter__form__group">
            {/* <div className="twitter__form__group__border"></div> */}
            <input name={name} id={id} type={type} placeholder=' ' />
            <label htmlFor={id}>{ label }</label>
        </div>
    )
}
