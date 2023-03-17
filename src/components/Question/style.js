import styled from "styled-components"

styled
export const Question = styled.div`
background-color: #FFE7A8;
padding: 1rem;
width: 100%;
display: flex;
flex-direction: column;
border-radius: 1rem;
box-shadow: .2rem .2rem .2rem .1rem rgba(0,0,0,.2);
position: relative;

& + &{
    margin-top: 2rem;
}
`

export const QuestionInternal = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom: 1rem;
`

export const QuestionLeft = styled.div`
`

export const QuestionRight = styled.div`
display: flex;
gap: .2rem;
`

export const QuestionBNCC = styled.p`
font-size: 1.2rem;
background-color: #F7BB00;
width: 8rem;
text-align: center;
border-radius: 1rem;
padding: 0.5rem;
color: #FFF;
`

export const QuestionText = styled.p`
font-size: 2rem;
margin-top: .5rem;

`

export const ButtomDelete = styled.div`
cursor: pointer;
color: #DC0000;

transition: all .4s;

&:hover{
    color:#FE8585;
}
`

export const ButtomEye = styled.div`
color: #013F03;
cursor: pointer;

&:hover{
    color:#217F09;
}
`
export const ButtomEdit = styled.div`
color: #013F03;
cursor: pointer;

&:hover{
    color:#217F09;
}
`

export const QuestionName = styled.p`
font-size: 1.2rem;
background-color: #F10;
width: 8rem;
text-align: center;
border-radius: 1rem;
padding: 0.5rem;
color: #FFF;
margin-top: .5rem;
`

export const DataQuestion = styled.div`
display: ${props => props.hidden ? 'block' : 'none'};
border-top: .1rem solid #FFF;
padding-top: 1rem;

`

export const Alternative = styled.p`
text-align: center;
font-size: 1.6rem;
`