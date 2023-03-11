import { signInWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeadMain from '../components/HeadMain'
import useAuth from '../hooks/useAuth'
import { auth } from '../service/configFirebase'
import { ButtonCreate, Frame, Input, LinkButton, TextBottom, Title } from '../styles/regisLogin'

export default function register() {

    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { Logado } = useAuth()

    const SingInAccont = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredencial) => {
                const user = userCredencial.user

                setEmail("")
                setPassword("")
                router.push('/')

            }).catch((error) => {
                alert("Email ou senha inválidos!")
                return
            })
    }

    useEffect(() => {
        if (Logado) router.push('/')
    }, [])


    return (
        <>
            <HeadMain title='Montando Quiz - login' desc='Fazendo o login na saplicação!' />
            <Header />
            <Frame>
                <Title>Entre:</Title>
                <Input placeholder='seuemail@gmail.com' type="email" value={email} onChange={(text) => setEmail(text.target.value)} />
                <Input placeholder='suasenha' type="password" value={password} onChange={(text) => setPassword(text.target.value)} />
                <ButtonCreate onClick={SingInAccont}>Entrar</ButtonCreate>
                <TextBottom>Caso não tenha conta, <Link href="/register" legacyBehavior><LinkButton>Cadastre-se</LinkButton></Link></TextBottom>
            </Frame>
            <Footer />
        </>
    )
}
