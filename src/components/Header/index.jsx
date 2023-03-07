import Image from 'next/image'
import React from 'react'
import { Container, Title } from './style'
export default function Header() {
  return (
    <Container>
        <Image src='/logo.svg' width={40} height={40}/>
        <Title>MONTANDO QUIZ</Title>
    </Container>
  )
}
