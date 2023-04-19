import React, { useContext, createContext, useState } from "react";
// import { useLocation } from "react-router-dom";

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    const Auth = false;
    const [AuthModal, setAuthModal] = useState(true)
    return (
        <StateContext.Provider value={{ Auth, AuthModal, setAuthModal }}>
            {
                children
            }
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);