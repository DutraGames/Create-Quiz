import React from 'react'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { ButtomLink, Container, Copy } from './style'

export default function Footer() {
  return (
    <Container>
      <ButtomLink href='https://github.com/DutraGames/Create-Quiz'>
        <AiFillGithub color='#FFF' size='3rem' />
      </ButtomLink>
      <Copy>&copy; Todos os direitos reservados</Copy>
      <ButtomLink href='https://www.instagram.com/dutrinha_dev' >
        <AiFillInstagram color='#FFF' size='3rem' />
      </ButtomLink>
    </Container>
  )
}
