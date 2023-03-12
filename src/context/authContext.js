import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider({children}){
    const [Logado, setLogado] = useState(false)
    const [nome, setNome] = useState("")
    const [ID, setID] = useState("")
    return(
        <AuthContext.Provider value={{Logado, setLogado,nome, setNome, ID,setID}}>
            {children}
        </AuthContext.Provider>
    )
}