import styled from "styled-components";

export const Frame = styled.div`
background-color: #FFE7A8;
margin: 4rem auto;
border-radius: 1.5rem;
box-shadow: .3rem .3rem .3rem .2rem rgba(0,0,0,.2);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 2rem;
gap: 2rem;
width: 30rem;

@media (max-width: 600px) {
    width: 70vw;
}
`

export const Input = styled.input`
width: 100%;
height: 4rem;
border-radius: 1.5rem;
border: 0;
padding-left: 1rem;
font-size: 2rem;

&::placeholder{
    opacity: 0.5;
}
`

export const Title = styled.h2`
font-size: 2.5rem;
`

export const ButtonCreate = styled.button`
background-color: #00BC22;
color: #FFF;
width: 100%;
border-radius: 1.5rem;
border: 0;
padding: .5rem;
font-size: 2rem;
cursor: pointer;
transition: all .4s;

:hover{
    background-color: #7EF482;
    color: #000;
}

:disabled{
    background-color: #999;
    opacity: 0.5;
    color: #fff;
    cursor: auto;
}
`

export const TextBottom = styled.span`
font-size: 1.4rem;
`

export const LinkButton = styled.a`
font-size: 1.4rem;
color: #00F;
transition: all .3s;
cursor: pointer;

&:hover{
    text-decoration: underline;
}
`