import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { database } from '../service/configFirebase'
import { ButtomDelete, Question, Questions } from '../styles/question'

import { MdDelete } from 'react-icons/md'
export default function Perguntas() {

    const [Categoria, setCategoria] = useState('Portugues')
    const [Perguntas, setPerguntas] = useState([])

    useEffect(() => {
        const db = database
        const referencial = ref(db, Categoria)
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
            console.log(data);
        })

    }, [])

    return (
        <div>
            {
                Perguntas.map((pergunta) => {

                    return (
                        <Question key={pergunta.chave}>
                            <Questions>{pergunta.P}</Questions>
                            <ButtomDelete><MdDelete size="2rem"/></ButtomDelete>
                        </Question>
                    )
                })
            }
        </div>
    )
}
