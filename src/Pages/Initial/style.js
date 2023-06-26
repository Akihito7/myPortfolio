import styled from "styled-components";

export const Container = styled.div`
position: relative;
width: 100vw;
height: 100vh;
background-color: red;

display: flex;

#menuFechado{
    display: none;
}
> main{

    width: 82vw ;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 5rem;
    gap: 2rem;

}
.textoAutomatico{
    display: flex;
    align-items: center;
    width: 80%;
}
h1{
    color: white;
    line-height: 3rem;
}
.infos{
    display: flex;
    flex-direction: column;
    gap:2rem;
    width: 80%;
 
}
button{
    font-family: 'Press Start 2P', cursive;
    border: none;
    width: 30%;
    height: 4rem;
    cursor: pointer;
    transition: transform 300ms;

}
button:hover{
    transform: scale(1.1);
}
.icons{
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
}
.icons img{
    width: 50px;
    cursor: pointer;
    transition: transform 300ms;
}
img:hover{
transform: scale(1.1);

}
@media(max-width: 768px){
#menuFechado{
    font-size: 30px;
    display: flex;
    position: absolute;
    color: white;
    top: 5%;
    left: 10%;
    cursor: pointer;
}
Header{
    transition: transform 400ms;
    translate: -200px;
    align-items: center;
    position: absolute;
    width: 180px;
    align-items: center;
    padding-right: 1.4rem;
}

main{

    padding: 0;
    width: 100%;
}
.textoAutomatico{
    font-size: .8rem;
}
button{
    width: 60%;
    height: 4rem;
}
.open{
    transform: translateX(200px);
}
#headerPage{
    
    li{
        font-size: 1rem;
    }
}


}
`