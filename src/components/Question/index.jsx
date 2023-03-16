import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import useAuth from '../../hooks/useAuth'
import { Alternative, ButtomDelete, ButtomEye, DataQuestion, Question, QuestionBNCC, QuestionLeft, QuestionName, QuestionRight, QuestionText } from './style'

export default function Questions({ data }) {

    const { ID } = useAuth()
    const [hidden, setHidden] = useState(false)

    return (
        <Question key={data.chave}>
            <QuestionLeft>
                <QuestionBNCC>{data.BNCC}</QuestionBNCC>
                <QuestionText>{data.P}</QuestionText>
                <QuestionName>{data.nomeUser}</QuestionName>
            </QuestionLeft>
            <QuestionRight>
                {ID === data.uidUser ? (<ButtomDelete onClick={() => DeleteQuestion(pergunta.chave)}><MdDelete size="3rem" /></ButtomDelete>) : (<></>)}
                <ButtomEye onClick={()=>setHidden(!hidden)}>
                    {hidden ? <AiOutlineEye size="3rem"></AiOutlineEye> : <AiOutlineEyeInvisible size="3rem"></AiOutlineEyeInvisible>}
                </ButtomEye>
            </QuestionRight>
            <DataQuestion hidden={hidden}>
                <Alternative>A: {data.A}</Alternative>
                <Alternative>B: {data.B}</Alternative>
                <Alternative>R: {data.R}</Alternative>
            </DataQuestion>

        </Question>
    )
}
