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
padding: 0 11.2rem;
background-color: #2E2E2E;
display: flex;
min-width: 100vw;
height: 5rem;
align-items: center;
justify-content: center;
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