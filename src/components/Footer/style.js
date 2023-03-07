import styled from "styled-components";

export const Container = styled.div`
background-color: #2E2E2E;
display: flex;
align-items: center;
justify-content: center;
height: 6rem;
flex-direction: column;
width: 100vw;
position: absolute;
bottom: 0;
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
`

export const Copy = styled.span`
padding-top: 1rem;
padding-bottom: 1rem;
color: #FFF;
font-size: 1.4rem;
`