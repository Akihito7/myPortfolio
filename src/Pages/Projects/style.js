import styled from "@emotion/styled";

export const Container = styled.div`

display: flex;
background-color: black;

*{
    margin: 0;
    padding: 0;

    box-sizing: border-box;

}
#menuFechado{
    display: none;
}

main{
width: 82vw;
height: 100vh;
background-color: black;
overflow: auto;


}
.carrosel{
    width: 100%;
    min-height: 100vh;
 
}
.galery{
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;

  
}
.projetos{
    display: flex;
}
.imgProjeto{
    width: 50%;
    height: 23rem;
    background-color: #CE2525;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
.infoProjeto{
    color: white;
    width: 50%;
    height: 23rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    gap: 1rem;
}
.iconesProjeto{
    width: 70%;
    display: flex;
    justify-content: space-evenly;
}
.iconesProjeto img{
    width: 35px;
}
.buttonsProjeto{
    width: 100%;
    display: flex;
    justify-content: space-evenly;

}
button{
    font-size: 1.1rem ;
    color: white;
    font-family: "Press Start 2P", cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 4rem;
    background-color: #740909;
    border: none;
    cursor: pointer;
    transition: transform 300ms ease-in-out;
}
button:first-child{
    background-color: #CE2525;
}
button:hover{
    transform: scale(1.1);
}
h1{
    font-size: 1.6rem;
}
p{
    font-size: 1rem;
}




@media(max-width: 768px){

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    
    main{
        margin-top: 5rem;
        width: 100vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
    }
    #menuFechado{
        display: flex;
        z-index: 1;
        color: white;
        position: absolute;
        top: 5%;
        left: 10%;
        font-size: 30px;
    }
    #swipe{
      color: white;
      font-size: 50px;
      position: absolute;
      bottom: 6%;
    }

    Header{
    z-index: 1;
    transition: transform 400ms;
    translate: -300px;
    align-items: center;
    position: absolute;
    width: 180px;
    align-items: center;
    padding-right: 1.4rem;
    li{
        font-size: 1rem;
    }
   }
    .open{
        transform: translateX(190px);
    }
    .carrosel{
        margin-top: 8rem;
        width: 350px;
        max-height: 550px;
        display: flex;
        overflow: hidden;
        
    }
    .galery{
        width: auto;
        height: auto;
        display: flex;
        flex-direction: row;
        transition: transform 0.5s ease-in-out;
        transform: translateX(0);
        padding: 0;
        gap: 0;
    }

    .projetos{
        width: 350px;
        max-height: 550px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }
    .imgProjeto{
        width: 80%;
        height: 40%;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .infoProjeto{
        width: 90%;
        height: 60%;
        padding: 2rem;
        gap: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: white;
    }
    h1{
        font-size: 1.6rem;
    }
    p{
        font-size: 1rem;
        line-height: 1.5rem;
    }
    .iconesProjeto{
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .iconesProjeto img{
        width: 30px;
    }
    .buttonsProjeto{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .buttonsProjeto button:first-child{
        background-color: #CE2525;
    }
    button{
        display: flex;
        font-size: 1.2rem;
        justify-content: center;
        align-items: center;
        font-family: "Press Start 2P", cursive;
        color: white;
        border: none;
        background-color: #740909;
        width: 10rem;
        height: 4rem;
        transition: transform 300ms ease-in-out;
    }
    button:hover{
        transform: scale(1.1);
    }
}
`