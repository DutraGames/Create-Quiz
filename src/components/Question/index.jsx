import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { MdDelete, MdEdit } from 'react-icons/md'
import useAuth from '../../hooks/useAuth'
import { Alternative, ButtomDelete, ButtomEdit, ButtomEye, DataQuestion, Question, QuestionBNCC, QuestionInternal, QuestionLeft, QuestionName, QuestionRight, QuestionText } from './style'
export default function Questions({ data, DeleteQuestion,categoria }) {

    const { ID } = useAuth()
    const [hidden, setHidden] = useState(false)
    const router = useRouter()
    const BNCC = data.BNCC
    const P = data.P
    const A = data.A
    const B = data.B
    const R = data.R
    const chave = data.chave

    const EditLocal = () => {
        router.push({
            pathname: "/updatepergunta",
            query: { BNCC: BNCC, categoria: categoria, P: P, R: R, A: A, B: B, chave: chave }
        })
    }

    return (
        <Question key={data.chave}>
            <QuestionInternal>
                <QuestionLeft>
                    <QuestionBNCC>{data.BNCC}</QuestionBNCC>
                    <QuestionText>{data.P}</QuestionText>
                    <QuestionName>{data.nomeUser}</QuestionName>
                </QuestionLeft>
                <QuestionRight>
                    {ID === data.uidUser ? (<ButtomDelete onClick={() => DeleteQuestion(data.chave)}><MdDelete size="3rem" /></ButtomDelete>) : (<></>)}
                    <ButtomEye onClick={() => setHidden(!hidden)}>
                        {hidden ? <AiOutlineEye size="3rem" ></AiOutlineEye> : <AiOutlineEyeInvisible size="3rem"></AiOutlineEyeInvisible>}
                    </ButtomEye>
                    {ID === data.uidUser ? (<ButtomEdit onClick={EditLocal}><MdEdit size="3rem" /></ButtomEdit>) : (<></>)}
                </QuestionRight>
            </QuestionInternal>
            <DataQuestion hidden={hidden}>
                <Alternative><strong>A</strong>: {data.A}</Alternative>
                <Alternative><strong>B</strong>: {data.B}</Alternative>
                <Alternative><strong>R</strong>: {data.R}</Alternative>
            </DataQuestion>

        </Question>
    )
}
