import { createUserWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { auth } from '../service/configFirebase'
import { ButtonCreate, Frame, Input, LinkButton, TextBottom, Title } from '../styles/regisLogin'

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

            <Frame>
                <Title>Cadastrar-se:</Title>
                <Input placeholder='seuemail@gmail.com' type="email" value={email} onChange={(text) => setEmail(text.target.value)} />
                <Input placeholder='suasenha' type="password" value={password} onChange={(text) => setPassword(text.target.value)} />
                <ButtonCreate onClick={CreateAccont}>Criar</ButtonCreate>
                <TextBottom>Caso tenha conta, faça <Link href="/login" legacyBehavior><LinkButton>Login</LinkButton></Link></TextBottom>
            </Frame>
            <Footer/>
        </>
    )
}
