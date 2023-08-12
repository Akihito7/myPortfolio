import styled from "@emotion/styled";

export const Container = styled.div`


display: flex;
width: 100vw;
height: 100vh;
background-color: red;
position: relative;

//Version to mobile

@media(max-width: 768px){

.open{
    transform: translateX(200px);
}

}
`

export const ContentMain = styled.div`

width: 82vw ;
height: 100vh;
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5rem 5rem;
gap: 2rem;


//Version mobile
@media(max-width: 768px){
padding: 0;
width: 100%;
}
    

`

export const AutoTextContent = styled.div`

width: 80%;

display: flex;
align-items: center;

`

export const AutoText = styled.div`

color: white;
font-size: 2rem;
line-height: 3rem;

//Version mobile
@media(max-width: 768px){
font-size: 1.6rem;
}

`

export const InformationContent = styled.div`

display: flex;
flex-direction: column;
gap: 2rem;  
width: 80%;

`

export const ButtonInformationsContent = styled.div`

width: 80%;

display: flex;
gap: 3rem;

`

export const ButtonInformation = styled.button`

font-family: 'Press Start 2P', cursive;
width: 30%;
height: 4rem;

background-color: ${({ secondary }) => secondary ? '#CE2525' : 'white'};
color: ${({ secondary }) => secondary ? 'white' : 'black'};

display: flex;
align-items: center;
justify-content: center;

padding: 0 10px;
font-size: 1rem;
border: none;

cursor: pointer;
transition: transform 300ms;

//hover

:hover{
    transform: scale(1.1);
}

//Version to mobile
@media(max-width: 768px){
width: 12rem;
height: 4rem;

font-size: 1rem;
padding: 0 10px;

}
`

export const IconsContent = styled.div`

display: flex;
align-items: center;
flex-wrap: wrap;
gap: 2rem;

`

export const ImageIcon = styled.img`

width: 50px;
cursor: pointer;
transition: transform 300ms;

//hover

:hover{
    transform: scale(1.1);
}

`

export const MenuCloseContent = styled.span`

display: none;

@media(max-width: 768px){
display: flex;
font-size: 30px;
position: absolute;
color: white;
top: 5%;
left: 10%;
cursor: pointer;
}

`

