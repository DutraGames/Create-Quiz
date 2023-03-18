import { child, ref, set } from 'firebase/database'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeadMain from '../components/HeadMain'
import useAuth from '../hooks/useAuth'
import { database } from '../service/configFirebase'
import { ButtonSave, Container, FrameQuestion, InputTezt } from '../styles/app'

export default function Home() {

    const [pergunta, setPergunta] = useState('')
    const [alternativeA, setAlternativeA] = useState('')
    const [alternativeB, setAlternativeB] = useState('')
    const [resposta, setResposta] = useState('')
    const [BNCC, setBNCC] = useState('')
    const { nome, ID } = useAuth()
    const router = useRouter()
    const data = JSON.parse(router.query.data)
    const categoria = router.query.categoria

    useEffect(() => {
        setPergunta(data.P)
        setAlternativeA(data.A)
        setAlternativeB(data.B)
        setResposta(data.R)
        setBNCC(data.BNCC)
    }, [])




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


            let referencial = ref(database, `2alternativas/${categoria}`)
            let childref = child(referencial, data.chave)
            set(childref, Dados)
            toast.success("Dados atualizado com Sucesso!")
            router.push(`/perguntas?categoria=${categoria}`)


            return
        }
        toast.error("prencha todos os campos!")
    }

    return (
        <Container>
            <HeadMain title='Montando Quiz' desc='Crie suas questões forma rápida!' />
            <Header />
            <FrameQuestion>
                <InputTezt type="text" placeholder='Digite  a pergunta' value={pergunta} onChange={(text) => setPergunta(text.target.value)} />
                <InputTezt type="text" placeholder='Digite alternativa A' value={alternativeA} onChange={(text) => setAlternativeA(text.target.value)} />
                <InputTezt type="text" placeholder='Digite alternativa B' value={alternativeB} onChange={(text) => setAlternativeB(text.target.value)} />
                <InputTezt type="text" placeholder='Digite a resposta (A,B)' value={resposta} onChange={(text) => setResposta(text.target.value)} maxLength={1} />
                <InputTezt type="text" placeholder='Digite o código BNCC' value={BNCC} disabled maxLength={8} minLength={8} />
                <ButtonSave onClick={SaveData}>Atualizar</ButtonSave>
            </FrameQuestion>
            <Footer />
        </Container>
    )
}