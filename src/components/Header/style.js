import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
`;

export const Container = styled.div`
padding: 2rem;
background-color: #2E2E2E;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Title = styled.h1`
font-size: 3.2rem;
font-weight: bold;
color: #FFF;
padding-left: 5rem;

@media (max-width: 600px) {
    font-size: 2rem;
    text-align: center;
}
`

export const HeaderTop = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const HeaderBottom = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const Links = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
padding-top: 1rem;
border-top: .1rem solid #3E3E3E;
width: 100%;
`

export const ButtonsLink = styled.a`
color: #FFF;
font-size: 2rem;
cursor: pointer;
transition: all .4s;
padding: 1rem;

&:hover{
    opacity: .5;
    background-color: #1E1E1E;
}

@media (max-width: 600px) {
    font-size: 1.4rem;
    padding: 0;

}
`

export const BtnLogado = styled.div`
background-color: blue;
width: 3rem;
height: 3rem;
margin-left: 2rem;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
color: #FFF;
`

export const NameUser = styled.span`
color: #FFF;
padding-left: .5rem;
font-size: 1.6rem;
`