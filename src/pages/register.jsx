import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import Header from '../components/Header'
import { auth } from '../service/configFirebase'
export default function register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const CreateAccont = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredencial) => {
                const user = userCredencial.user
                console.log(user)

                setEmail("")
                setPassword("")

            }).catch((error) => {
                console.log(error.message);
                alert("Email ou senha inválidos!")
                return
            })
    }

    return (
        <>
            <Header />

            <input type="email" value={email} onChange={(text) => setEmail(text.target.value)} />
            <input type="password" value={password} onChange={(text) => setPassword(text.target.value)} />
            <button onClick={CreateAccont}>criar</button>
        </>
    )
}
