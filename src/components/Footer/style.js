import styled from "styled-components";

export const Container = styled.div`
background-color: #2E2E2E;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 4rem;
`

export const Links = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
padding-top: 1rem;

`

export const ButtonsLink = styled.a`
color: #FFF;
font-size: 2rem;
cursor: pointer;
transition: all .4s;

&:hover{
    opacity: .5;
}

@media (max-width: 600px) {
    font-size: 1.4rem;
}
`

export const Copy = styled.span`
padding-top: 2rem;
color: #FFF;
font-size: 1.4rem;
`