import { ReactNode, createContext, useState } from "react";

//actual value we want to access
export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null,
})

interface UserProviderProps{
    children:ReactNode
}

export const UserProvider:React.FC<UserProviderProps>=({children})=>{
    const [currentUser, setCurrentUser]=useState(null);
    const value:any={currentUser,setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}