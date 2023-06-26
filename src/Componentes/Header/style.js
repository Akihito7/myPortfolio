import styled from "@emotion/styled";

export const Container = styled.header`
width: 18vw;
height: 100vh;
background-color: #0b0d11;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 2rem;
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

`