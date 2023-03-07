import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { database } from '../service/configFirebase'

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
                        <div key={pergunta.chave}>
                            <p>{pergunta.P}</p>
                            <p>{pergunta.A}</p>
                            <p>{pergunta.B}</p>
                            <p>{pergunta.R}</p>
                            <p>{pergunta.BNCC}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
