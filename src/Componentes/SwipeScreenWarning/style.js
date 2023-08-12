import styled from "@emotion/styled";

export const Container = styled.div`


display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
flex-direction: column;
align-items: center;
justify-content: center;

background-color: #0B0D11;
width: 80%;
top: 15%;

padding: 20px 40px;
border-radius: 4px;
position: absolute;
top: 15%;

font-size: .7rem;
gap: 2rem;
`

export const TextSwipeScreen = styled.h1`

color: white;
font-size: 1rem;
line-height: 2rem;
text-align: center;

`

export const ButtonSwipe = styled.button`

padding: 15px;
width: 80%;

font-family: 'Press Start 2P', cursive;
font-size: 1rem;
background-color: #740909;
color: white;
border: none;
border-radius: 4px;

`

