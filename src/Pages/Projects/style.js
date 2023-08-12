import styled from "@emotion/styled";
import { Carousel as CarouselReact } from 'react-responsive-carousel';

export const Container = styled.div`
position: relative;
display: flex;
background-color: black;

min-height: 100vh;
width: 100vw;

@media(max-width: 768px){

    position: relative;
    display: flex;
    align-items: center;

    Header{
    z-index: 1;
   }
    .open{
        transform: translateX(200px);
    }
}
`
export const IconMenuClose = styled.div`

display: none;

//version mobile
@media(max-width: 768px){
    z-index: 1;

    display: flex;
    color: white;
    font-size: 30px;

    position: absolute;
    top: 5%;
    left: 10%;
}

`
export const ContentMain = styled.div`

width: 82vw;
height: 100vh;

background-color: black;
overflow: auto;


//Version mobile

@media(max-width: 786px){
    z-index: 0;
    width: 100vw;
    min-height: 100vh;

    display: flex;
    justify-content: center;

    padding-top: 7rem;
    overflow: auto;
}


`
export const ContentCarrousel = styled.div`

width: 100%;
min-height: 100vh;

//Version mobile

@media(max-width: 786px){
    width: 95vw;
    min-height: 80vh;
    display: flex;
    overflow: hidden;

}
`
export const ContentGalery = styled.div`

width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
gap: 5rem;
padding: 2rem;
align-items: center;

//Version mobile

@media(max-width: 768px){
    width: auto;
    height: auto;

    display: flex;
    flex-direction: row;
    align-items: start;

    transition: transform 0.5s ease-in-out;
    transform: translateX(0);
    
    padding: 0;
    gap: 0;
}
`

export const Carousel = styled(CarouselReact)`

min-height: 100vh;

//Version mobile

@media(max-width: 786px){
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    
}


`

