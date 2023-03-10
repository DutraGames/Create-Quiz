import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider({children}){
    const [Logado, setLogado] = useState(false)
    const [nome, setNome] = useState("")
    return(
        <AuthContext.Provider value={{Logado, setLogado,nome, setNome}}>
            {children}
        </AuthContext.Provider>
    )
}