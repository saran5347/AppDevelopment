import { useState, createContext,useContext, useMemo } from 'react';

const UseContext=createContext();

 export const useUser=() =>{
    return useContext(UseContext);
 }

 export const UserProvider= ({Children}) =>{
    const[isUserLoggeIn,setIsUserLoggedIn]=useState(false);

    const login =() =>{
        setIsUserLoggedIn(true);
    }

    const logout =() =>{
        setIsUserLoggedIn(false);
    }
     const userValue =useMemo(()=>(
        {
            isUserLoggeIn,login,logout
        }
     ),[isUserLoggeIn]);

    return (
        <UserContext.Provider value={userValue}>
            {Children}
        </UserContext.Provider>
    )
 }