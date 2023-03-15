import { onValue, ref, remove } from 'firebase/database'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeadMain from '../components/HeadMain'
import Question from '../components/Question'
import { database } from '../service/configFirebase'
import { Container } from '../styles/question'
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
                    'R': valor.R,
                    'nomeUser': valor.nomeUser,
                    'uidUser': valor.uidUser,
                }
            })
            setPerguntas(data)
        })

    }, [categoria])

    const DeleteQuestion = (key) => {
        const db = database
        const referencial = ref(db, `2alternativas/${categoria}/${key}`)
        remove(referencial)
    }

    return (
        <>
            <HeadMain title={`Questões de ${categoria} `} desc={`Questões de ${categoria} descritas por professores!`} />
            <Header />
            <Container>
                {
                    Perguntas.length > 0?                     Perguntas.map((pergunta) => {

                        return (
                            <Question data={pergunta}/>
                        )
                    }): (<h1>Não há questões registradas!</h1>)
                }
            </Container>

            <Footer />
        </>
    )
}
