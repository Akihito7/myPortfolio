import styled from "@emotion/styled";

export const Container = styled.header`
width: 18vw;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

background-color: #0b0d11;
padding: 2rem;


@media(max-width: 768px){
    
    width: 180px;
    align-items: center;
    align-items: center;
    
    transition: transform 400ms;
    translate: -200px;

    position: absolute;
    padding-right: 1.4rem;
}

`

export const ListScreens = styled.div`

display: flex;
justify-content: center;
flex-direction: column;

color: white;
list-style: none;

gap: 2rem;

//Version mobile

@media(max-width: 768px){

}
`
export const ItemListScreens = styled.div`

font-size: 1.4rem;
color: ${({ isSelecioned}) => isSelecioned ? '#CE2525' : 'white'};

cursor: pointer;
transition: transform 300ms;

//Version mobile

@media(max-width: 768px){
    font-size: 1.4rem;
    color: ${({ isSelecioned}) => isSelecioned ? '#CE2525' : 'white'};
}

//hover

:hover{
    transform: scale(1.1); 
}
`
export const ContentContacts = styled.div`

width: 120px;
display: flex;
flex-wrap: wrap;

gap: 2rem;

`
export const LinkContacts = styled.a`

`
export const ImagemContacts = styled.img`
width: 40px;

cursor: pointer;
transition: transform 300ms;

//Version mobile

@media(max-width: 768px){

}

//hover

:hover{
    transform: scale(1.1);
}

`