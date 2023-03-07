import styled from "styled-components";

export const Question = styled.div`
width: 90vw;
background-color: #FFE7A8;
height: 4rem;
margin-top: 1.5rem;
margin-left: 2rem;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 1rem;
box-shadow: .2rem .2rem .2rem .1rem rgba(0,0,0,.2);
`

export const Questions = styled.p`
font-size: 2rem;
margin-left: 1rem;
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
