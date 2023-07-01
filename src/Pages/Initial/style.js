import styled from "@emotion/styled";

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
.buttonsInfos{
    width: 80%;
    display: flex;
    gap: 3rem;

}
button{
    font-family: 'Press Start 2P', cursive;
    border: none;
    width: 30%;
    height: 4rem;
    cursor: pointer;
    transition: transform 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    font-size: 1rem;

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
    font-size: 1rem;
    width: 12rem;
    height: 4rem;
    //flex-wrap: nowrap;
    padding: 0 10px;
}
button:last-child{
    background-color: #b4b4b4;
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