import React, { useContext, createContext, useState } from "react";
// import { useLocation } from "react-router-dom";

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    const Auth = true;
    const [AuthModal, setAuthModal] = useState(false)
    const [CardHover, setCardHover] = useState(false)
    return (
        <StateContext.Provider value={{ Auth, AuthModal, setAuthModal ,CardHover ,setCardHover }}>
            {
                children
            }
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);