import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider({children}){
    const [Logado, setLogado] = useState(false)
    return(
        <AuthContext.Provider value={{Logado, setLogado}}>
            {children}
        </AuthContext.Provider>
    )
}