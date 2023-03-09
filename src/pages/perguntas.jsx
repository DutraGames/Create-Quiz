import { onValue, ref, remove } from 'firebase/database'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeadMain from '../components/HeadMain'
import { database } from '../service/configFirebase'
import { ButtomDelete, Container, Question, QuestionBNCC, QuestionLeft, QuestionText } from '../styles/question'

import { MdDelete } from 'react-icons/md'
export default function Perguntas() {

    const [Perguntas, setPerguntas] = useState([])

    const router = useRouter()
    const categoria = router.query.categoria

    useEffect(() => {

        const db = database
        const referencial = ref(db, `2alternativas/${categoria}`)
        onValue(referencial, (snapshot) => {
            const data = Object.entries(snapshot.val() ?? {}).map(([chave, valor]) => {
                return {
                    'chave': chave,
                    'P': valor.P,
                    'A': valor.A,
                    'B': valor.B,
                    'BNCC': valor.BNCC,
                    'R': valor.R
                }
            })
            setPerguntas(data)
        })

    }, [categoria])

    const DeleteQuestion = (key) => {
        const db = database
        const referencial = ref(db, `2alternativas/${categoria}`)
        remove(referencial)
    }

    return (
        <>
            <HeadMain title={`Questões de ${categoria} `} desc={`Questões de ${categoria} descritas por professores!`} />
            <Header />
            <Container>
                {
                    Perguntas.map((pergunta) => {

                        return (
                            <Question key={pergunta.chave}>
                                <QuestionLeft>
                                    <QuestionBNCC>{pergunta.BNCC}</QuestionBNCC>
                                    <QuestionText>{pergunta.P}</QuestionText>
                                </QuestionLeft>
                                <ButtomDelete onClick={() => DeleteQuestion(pergunta.chave)}><MdDelete size="3rem" /></ButtomDelete>
                            </Question>
                        )
                    })
                }
            </Container>

            <Footer />
        </>
    )
}
