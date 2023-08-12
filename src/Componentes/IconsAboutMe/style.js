import styled from "@emotion/styled"

export const Container = styled.div`

width: 120px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 10px 0;
gap: 3rem;



@media(max-width: 768px){
    width: 80px;
}
`
export const Title = styled.p`
font-size: 1.2rem;
word-break: break-all;

@media(max-width: 768px){
    font-size: .8rem;
}
`
export const ContentIcon = styled.div`
  height: 50px;
`
export const ImagemIcon = styled.img`

width: 50px;
transition: transform 300ms;
cursor: pointer;

@media(max-width: 768px){
    width: 50px;
}

:hover{
    transform: scale(1.1);
}

`