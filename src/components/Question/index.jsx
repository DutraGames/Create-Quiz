import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import useAuth from '../../hooks/useAuth'
import { Alternative, ButtomDelete, ButtomEye, DataQuestion, Question, QuestionBNCC, QuestionInternal, QuestionLeft, QuestionName, QuestionRight, QuestionText } from './style'

export default function Questions({ data,DeleteQuestion }) {

    const { ID } = useAuth()
    const [hidden, setHidden] = useState(false)

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
                        {hidden ? <AiOutlineEye size="3rem"></AiOutlineEye> : <AiOutlineEyeInvisible size="3rem"></AiOutlineEyeInvisible>}
                    </ButtomEye>
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
