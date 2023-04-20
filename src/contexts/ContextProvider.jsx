import React, { useContext, createContext, useState } from "react";
// import { useLocation } from "react-router-dom";

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    const Auth = true;
    const [AuthModal, setAuthModal] = useState(false)
    return (
        <StateContext.Provider value={{ Auth, AuthModal, setAuthModal }}>
            {
                children
            }
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);