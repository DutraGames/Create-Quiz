import styled from "styled-components"

export const Header = styled.div`
padding: 0 11.2rem;
background-color: #2E2E2E;
width: 100vw;
display: flex;
height: 5rem;
align-items: center;
justify-content: center;
`

export const Title = styled.h1`
font-size: 3.2rem;
font-weight: bold;
color: #FFF;
padding-left: 5rem;
`

export const FrameQuestion = styled.div`
background-color: #FFE7A8;
width: 50rem;
height: 50rem;
margin: 4rem auto;
border-radius: 1.5rem;
box-shadow: .3rem .3rem .3rem .2rem rgba(0,0,0,.2);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 2rem;
`

export const Category = styled.select`
width: 40rem;
height: 4rem;
border-radius: 1.5rem;
border: 0;
padding-left: 1rem;
font-size: 2rem;
`

export const InputTezt = styled.input`
width: 40rem;
height: 4rem;
border-radius: 1.5rem;
border: 0;
padding-left: 1rem;
font-size: 2rem;

&::placeholder{
    opacity: 0.5;
}
`

export const ButtonSave = styled.button`
background-color: #00BC22;
color: #FFF;
width: 40rem;
height: 4rem;
border-radius: 1.5rem;
border: 0;
padding-left: 1rem;
font-size: 2rem;
cursor: pointer;
transition: all .4s;

:hover{
    background-color: #7EF482;
    color: #000;
}
`