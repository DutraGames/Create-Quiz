import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
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
    const [username, setUsername] = useState("")
    const { Logado } = useAuth()

    const validateEmail = (email) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const CreateAccont = async () => {
        if (email !== "" && username !== "" && password !== "") {

            if(validateEmail(email)){
                await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredencial) => {
                    const user = userCredencial.user

                    updateProfile(user, { displayName: username })
                        .then(() => {
                            sendEmailVerification(user)

                            setEmail("")
                            setPassword("")
                            setUsername("")
                            router.push('/')
                            return
                        })
                        .catch((error) => {
                            console.log(error);
                        })

                }).catch((error) => {
                    console.log(error.message);
                    return
                })
            }else{
                alert("Email inválido!")
            }


            
        } else {
            alert("Preencha todos os campos!")
        }
    }

    useEffect(() => {
        if (Logado) router.push('/')
    }, [])

    return (
        <>
            <HeadMain title='Montando Quiz - register' desc='Fazendo o cadastro na saplicação!' />
            <Header />
            <Frame>
                <Title>Cadastrar-se:</Title>
                <Input placeholder='seu nome' maxLength={8} type="text" value={username} onChange={(text) => setUsername(text.target.value)} />
                <Input placeholder='seuemail@gmail.com' type="email" value={email} onChange={(text) => setEmail(text.target.value)} />
                <Input placeholder='sua senha123' type="password" value={password} onChange={(text) => setPassword(text.target.value)} minLength={6} />
                {password.length >= 6 ? (<ButtonCreate onClick={CreateAccont}>Cadastrar-se</ButtonCreate>) : (<ButtonCreate disabled onClick={CreateAccont}>Cadastrar-se</ButtonCreate>)}
                <TextBottom>Caso tenha conta, faça <Link href="/login" legacyBehavior><LinkButton>Login</LinkButton></Link></TextBottom>
            </Frame>
            <Footer />
        </>
    )
}
