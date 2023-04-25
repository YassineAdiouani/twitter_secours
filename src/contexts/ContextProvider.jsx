import React, { useContext, createContext, useState } from "react";

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    
    const CallToast = (content) => {
        setToast({status:true, content})
        let timer = setTimeout(() => {
            setToast({status:false, content:''})
        },2222)
    }

    const [Toast, setToast] = useState({ status: false, content: '' })
    const [steps, setSteps] = useState(true)
    const [AuthModal, setAuthModal] = useState(false)
    const [CardHover, setCardHover] = useState(false)

    return (
        <StateContext.Provider value={{ CallToast, Toast, steps, setSteps, AuthModal, setAuthModal ,CardHover ,setCardHover }}>
            {
                children
            }
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);