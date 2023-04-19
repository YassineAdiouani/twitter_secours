import React, { useContext, createContext, useState } from "react";
// import { useLocation } from "react-router-dom";

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    const Auth = false;
    return (
        <StateContext.Provider value={{ Auth }}>
            {
                children
            }
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);