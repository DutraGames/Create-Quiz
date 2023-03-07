import Link from 'next/link'
import React from 'react'
import { ButtonsLink, Container, Copy, Links } from './style'
export default function Footer() {
  return (
    <Container>
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
      <Copy>&copy; Todos os direitos reservados</Copy>
    </Container>
  )
}
