import styled from "@emotion/styled";

export const Container = styled.header`
width: 18vw;
height: 100vh;
background-color: #0b0d11;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 2rem;

*{
    padding: 0;
    margin: 0;

    box-sizing: border-box;
}

ul{
    color: white;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    
}
li{
    font-size: 1.4rem;
    cursor: pointer;
    transition: transform 300ms;
}
li:hover{
    transform: scale(1.1);
}
.iconesContatos{
    width: 120px;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

}
img{
    width: 40px;
    cursor: pointer;
    transition: transform 300ms;
}
img:hover{
    transform: scale(1.1);
}
.isActive{
    display: none;
}
.paginaAtual{
    color: #CE2525;
}

@media(max-width: 768px){
    transition: transform 400ms;
    translate: -200px;
    align-items: center;
    position: absolute;
    width: 180px;
    align-items: center;
    padding-right: 1.4rem;


li{
    font-size: 1.4rem;
}
}
`