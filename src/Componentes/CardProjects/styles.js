import styled from '@emotion/styled'

export const Container = styled.div`

//height: 90vh;

width: 45vw;
display: flex;
align-items: center;
flex-direction: column;

background-color: #0B0D11;

gap: 2rem;
padding: 2rem;
margin-bottom: 2rem;

//Version mobile

@media(max-width: 768px){
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: black;

    gap: 3rem;

    overflow-y: auto;
    overflow-x: hidden;
}

`
export const ContentImagem = styled.div`

width: 100%;
height: 40%;

display: flex;
align-items: center;
justify-content: center;

color: white;

//Version mobile

@media(max-width: 768px){
    width: 100%;
    height: 40%;

    //background-color: black;

    display: flex;
    justify-content: center;
    align-items: center;
}

`
export const Imagem = styled.img`

width: 100%;
height: 100%;
object-fit: cover;

//Version mobile

@media(max-width: 786px){
    width: 95%;
    height: 90%;
    object-fit: fill;
}

`
export const ContentInfomartion = styled.div`

width: 90%;
height: 50%;

color: white;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2rem;

gap: 1rem;
text-align: justify;

//Version mobile

@media(max-width: 786px){
    width: 90%;
    height: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;

    padding: 2rem;
    gap: 2rem;
}



`
export const TitleInformation = styled.div`

font-size: 2em;

//Version mobile

@media(max-width: 786px){
    font-size: 2em;
}


`
export const TextInformation = styled.div`

text-align: start;
line-height: 2.6rem;

//Version mobile

@media(max-width: 786px){
    font-size: 1.2em;
    line-height: 2em;
}

`
export const ContentIcons = styled.div`

width: 70%;
display: flex;
justify-content: space-evenly;

//Version mobile

@media(max-width: 786px){
    width: 50%;

    display: flex;
    justify-content: center;
    //align-items: center;
    gap: 20px;
}

`
export const IconImage = styled.img`

width: 35px;


//Version mobile

@media(max-width: 786px){
    width: 30px;

}
`
export const ContentButtons = styled.div`

width: 100%;
display: flex;
justify-content: space-evenly;

margin-top: 1em;

//Version mobile

@media(max-width: 786px){
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding-bottom: 1rem;
}



`
export const Link = styled.a`

text-decoration: none;

//Version mobile

@media(max-width: 786px){

}

`
export const Button = styled.button`

width: 12rem;
height: 4rem;

font-family: "Press Start 2P", cursive;
font-size: 1.1rem ;

display: flex;
align-items: center;
justify-content: center;

color: white;
background-color: ${({ secondary }) => secondary ? '#740909' : '#CE2525'};
border: none;

cursor: pointer;
transition: transform 300ms ease-in-out;

//Version mobile

@media(max-width: 786px){
    width: 10rem;
    height: 4rem;
    font-size: 1.2rem;
    font-family: "Press Start 2P", cursive;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    background-color: ${({ secondary }) => secondary ? '#740909' : '#CE2525'};

    border: none;
    transition: transform 300ms ease-in-out;
}
`