import { push, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
import HeadMain from '../components/HeadMain'
import Header from '../components/Header'
import useAuth from '../hooks/useAuth'
import { database } from '../service/configFirebase'
import { ButtonSave, Category, Container, FrameQuestion, InputTezt, Selectors } from '../styles/app'

export default function Home() {

  const [Categoria, setCategoria] = useState('Portugues')
  const [pergunta, setPergunta] = useState('')
  const [alternativeA, setAlternativeA] = useState('')
  const [alternativeB, setAlternativeB] = useState('')
  const [resposta, setResposta] = useState('')
  const [BNCC, setBNCC] = useState('')
  const [nivel, setNivel] = useState('01')
  const [serie, setSerie] = useState('01')
  const { nome, ID } = useAuth()

  useEffect(() => {
    if (Categoria === 'Portugues') setBNCC('EF' + serie + 'LP' + nivel)
    if (Categoria === 'Ciencias') setBNCC('EF' + serie + 'CI' + nivel)
    if (Categoria === 'Historia') setBNCC('EF' + serie + 'HI' + nivel)
    if (Categoria === 'Geografia') setBNCC('EF' + serie + 'GE' + nivel)
    if (Categoria === 'Matematica') setBNCC('EF' + serie + 'MA' + nivel)
  }, [Categoria, nivel, serie])

  const SaveData = async () => {

    if (pergunta !== '' && alternativeA !== '' && alternativeB !== '' && resposta !== '' && BNCC !== '') {

      const BNCCCode = BNCC.toUpperCase()
      const RESPOSTA = resposta.toUpperCase()

      let Dados = {
        P: pergunta,
        A: alternativeA,
        B: alternativeB,
        R: RESPOSTA,
        BNCC: BNCCCode,
        nomeUser: nome,
        uidUser: ID
      }

      if (RESPOSTA !== "A" && RESPOSTA !== "B") {
        toast.error("Somente alternativas A ou B")
        return
      }


      let referencial = ref(database, `2alternativas/${Categoria}`)

      await push(referencial, Dados)
      toast.success("Pergunta adicionada!")
      setCategoria('Portugues')
      setNivel('01')
      setSerie('01')
      setPergunta('')
      setAlternativeA('')
      setAlternativeB('')
      setResposta('')
      setBNCC('EF' + serie + 'LP' + nivel)

      return
    }
    toast.error("prencha todos os campos!")
  }

  return (
    <Container>
      <HeadMain title='Montando Quiz' desc='Crie suas questões forma rápida!' />
      <Header />
      <FrameQuestion>
        <Selectors>
          <Category value={serie} onChange={(text) => setSerie(text.target.value)}>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
          </Category>
          <Category value={Categoria} onChange={(text) => setCategoria(text.target.value)}>
            <option value="Portugues">LP = Português</option>
            <option value="Ciencias">CI = Ciências</option>
            <option value="Historia">HI = História</option>
            <option value="Geografia">GE = Geografia</option>
            <option value="Matematica">MA = Matemática</option>
          </Category>
          <Category value={nivel} onChange={(text) => setNivel(text.target.value)}>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="56">56</option>
            <option value="57">57</option>
            <option value="58">58</option>
            <option value="59">59</option>
            <option value="60">60</option>
          </Category>

        </Selectors>
        <InputTezt type="text" placeholder='Digite  a pergunta' value={pergunta} onChange={(text) => setPergunta(text.target.value)} />
        <InputTezt type="text" placeholder='Digite alternativa A' value={alternativeA} onChange={(text) => setAlternativeA(text.target.value)} />
        <InputTezt type="text" placeholder='Digite alternativa B' value={alternativeB} onChange={(text) => setAlternativeB(text.target.value)} />
        <InputTezt type="text" placeholder='Digite a resposta (A,B)' value={resposta} onChange={(text) => setResposta(text.target.value)} maxLength={1} />
        <InputTezt type="text" placeholder='Digite o código BNCC' value={BNCC} disabled maxLength={8} minLength={8} />
        <ButtonSave onClick={SaveData}>Salvar</ButtonSave>
      </FrameQuestion>
      <Footer />
    </Container>
  )
}