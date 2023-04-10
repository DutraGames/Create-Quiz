import styled from "styled-components";

export const Container = styled.div`
padding: 2rem;
min-height: 100vh;
`

export const FieldAmount = styled.p`
text-align: center;
font-size: 2rem;
`

export const FieldSearcher = styled.div`
width: 100%;
padding-top: 1rem;
padding-bottom: 1rem;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`

export const SearchInput = styled.input`
width: 100%;
height: 4rem;
border-radius: 1.5rem;
border: .1rem solid #000;
padding-left: 1rem;
font-size: 2rem;

&::placeholder{
    opacity: 0.7;
}
`

export const SearchIcon = styled.div`
position: absolute;
right: .5rem;
opacity: .7;
`
