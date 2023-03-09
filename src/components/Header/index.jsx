import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ButtonsLink, Container, HeaderBottom, HeaderTop, Links, Rotate, Title } from './style'
export default function Header() {
  return (
    <Container>
      <HeaderTop>
        <Rotate>
          <Image src='/logo.svg' width={40} height={40} alt="Logo Create Quiz" />
        </Rotate>
        <Title>MONTANDO QUIZ</Title>
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
