import { onAuthStateChanged } from 'firebase/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import useAuth from '../../hooks/useAuth'
import { auth } from '../../service/configFirebase'
import { BtnLogado, ButtonsLink, Container, HeaderBottom, HeaderTop, Links, Rotate, Title } from './style'

export default function Header() {

  const {Logado, setLogado} = useAuth()
  const router = useRouter()
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setLogado(true)

      }else{
        if(router.asPath !=="/register" && router.asPath !=="/login" ) router.push('/login')
      }
    });
  }, [])
  
  
  return (
    <Container>
      <HeaderTop>
        <Rotate>
          <Image src='/logo.svg' width={40} height={40} alt="Logo Create Quiz" />
        </Rotate>
        <Title>MONTANDO QUIZ</Title>
        {Logado? (<BtnLogado><AiOutlineUser size="2rem"/></BtnLogado>):(<div></div>)}
      </HeaderTop>
      <Links>
        <Link href='/' legacyBehavior>
          <ButtonsLink>Criar</ButtonsLink>
        </Link>
        <Link href='/perguntas?categoria=Portugues' legacyBehavior>
          <ButtonsLink>Português</ButtonsLink>
        </Link>
        <Link href='/perguntas?categoria=Geografia' legacyBehavior>
          <ButtonsLink>Geografia</ButtonsLink>
        </Link>
        <Link href='/perguntas?categoria=Matematica' legacyBehavior>
          <ButtonsLink>Matemática</ButtonsLink>
        </Link>
        <Link href='/perguntas?categoria=Historia' legacyBehavior>
          <ButtonsLink>História</ButtonsLink>
        </Link>
        <Link href='/perguntas?categoria=Ciencias' legacyBehavior>
          <ButtonsLink>Ciências</ButtonsLink>
        </Link>
      </Links>
      <HeaderBottom>

      </HeaderBottom>
    </Container>
  )
}
