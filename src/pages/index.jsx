import { push, ref } from 'firebase/database'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeadMain from '../components/HeadMain'
import { database } from '../service/configFirebase'
import { ButtonSave, Category, FrameQuestion, InputTezt } from '../styles/app'
export default function Home() {

  const [Categoria, setCategoria] = useState('Portugues')
  const [pergunta, setPergunta] = useState('')
  const [alternativeA, setAlternativeA] = useState('')
  const [alternativeB, setAlternativeB] = useState('')
  const [resposta, setResposta] = useState('')
  const [BNCC, setBNCC] = useState('')

  const SaveData = () => {

    if (pergunta !== '' && alternativeA !== '' && alternativeB !== '' && resposta !== '' && BNCC !== '') {
      let Dados = {
        P: pergunta,
        A: alternativeA,
        B: alternativeB,
        R: resposta,
        BNCC
      }

      let referencial = ref(database, Categoria)

      push(referencial, Dados)

      setCategoria('Portugues')
      setPergunta('')
      setAlternativeA('')
      setAlternativeB('')
      setResposta('')
      setBNCC('')

      return
    }

    alert("prencha todos os campos!")

  }

  return (
    <>
      <HeadMain title='Montando Quiz' desc='Crie suas questões forma rápida!'/>
      <Header/>
      

      <FrameQuestion>
        <Category value={Categoria} onChange={(text) => setCategoria(text.target.value)}>
          <option value="Portugues">Português</option>
          <option value="Ciencias">Ciências</option>
          <option value="Historia">História</option>
          <option value="Geografia">Geografia</option>
          <option value="Matematica">Matemática</option>
        </Category>
        <InputTezt type="text" placeholder='Digite  a pergunta' value={pergunta} onChange={(text) => setPergunta(text.target.value)} />
        <InputTezt type="text" placeholder='Digite alternativa A' value={alternativeA} onChange={(text) => setAlternativeA(text.target.value)} />
        <InputTezt type="text" placeholder='Digite alternativa B' value={alternativeB} onChange={(text) => setAlternativeB(text.target.value)} />
        <InputTezt type="text" placeholder='Digite a resposta (A,B)' value={resposta} onChange={(text) => setResposta(text.target.value)} />
        <InputTezt type="text" placeholder='Digite o código BNCC' value={BNCC} onChange={(text) => setBNCC(text.target.value)} />
        <ButtonSave onClick={SaveData}>Salvar</ButtonSave>
      </FrameQuestion>

      <Footer/>

    </>
  )
}
