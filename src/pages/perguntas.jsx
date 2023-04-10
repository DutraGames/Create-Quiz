import { onValue, ref, remove } from 'firebase/database'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import HeadMain from '../components/HeadMain'
import Header from '../components/Header'
import Question from '../components/Question'
import { database } from '../service/configFirebase'
import { Container, FieldAmount } from '../styles/question'
export default function Perguntas() {

    const [Perguntas, setPerguntas] = useState([])
    const [onSearch, setOnSearch] = useState(false)
    const [textSearch, setTextSearch] = useState([])

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

    const SearchQuestion = (e) => {
        const searchText = e.target.value
        if (searchText.length > 0) {
            setOnSearch(true)
            const data = new Array

            Perguntas.map((pergunta) => {
                const rule = new RegExp(searchText, 'gi')
                if (rule.test(pergunta.P)) {
                    data.push(pergunta)
                    setTextSearch(data)
                }
            })
        } else {
            setOnSearch(false)
        }
    }

    return (
        <>
            <HeadMain title={`Questões de ${categoria} `} desc={`Questões de ${categoria} descritas por professores!`} />
            <Header />
            <Container>
                <FieldAmount> Há {onSearch? textSearch.length : Perguntas.length} perguntas</FieldAmount>
                <input onChange={SearchQuestion} placeholder='Digite a pergunta pra buscar...'></input>
                {
                    onSearch ? textSearch.map((pergunta) => {

                        return (
                            <Question data={pergunta} DeleteQuestion={DeleteQuestion} categoria={categoria} />
                        )
                    }) : Perguntas.map((pergunta) => {

                        return (
                            <Question data={pergunta} DeleteQuestion={DeleteQuestion} categoria={categoria} />
                        )
                    })
                }
            </Container>

            <Footer />
        </>
    )
}
