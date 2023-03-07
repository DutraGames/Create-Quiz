import Image from 'next/image'
import React from 'react'
import { Container, Rotate, Title } from './style'
export default function Header() {
  return (
    <Container>
      <Rotate>
        <Image src='/logo.svg' width={40} height={40} />
      </Rotate>
      <Title>MONTANDO QUIZ</Title>
    </Container>
  )
}
