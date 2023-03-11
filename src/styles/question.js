import styled from "styled-components";

export const Container = styled.div`
padding: 2rem;
min-height: 100vh;
`

export const Question = styled.div`
background-color: #FFE7A8;
padding: 1rem;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 1rem;
box-shadow: .2rem .2rem .2rem .1rem rgba(0,0,0,.2);

& + &{
    margin-top: 2rem;
}
`

export const QuestionLeft = styled.div`
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
margin-right: 2rem;
z-index: 1;
transition: all .4s;

&:hover{
    color:#FE8585;
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