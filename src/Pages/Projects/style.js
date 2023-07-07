import styled from "@emotion/styled";

export const Container = styled.div`
position: relative;
display: flex;
background-color: black;

min-height: 100vh;
width: 100vw;


a{
    text-decoration: none;
}
#swipeLeft{
    display: none;
}
#swipeRight{
    display: none;
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
    gap: 5rem;
    padding: 2rem;
    align-items: center;

}
.projetos{
    width: 45vw;
    //height: 90vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background-color: #0B0D11;
    align-items: center;
    gap: 2rem;

    margin-bottom: 2rem;
}
.imgProjeto{
    width: 100%;
    height: 40%;
    //background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}


.imgProjeto img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.infoProjeto{
    color: white;
    width: 90%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    gap: 1rem;
    text-align: justify;
 
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
#btcode{
    background-color: #740909;
}
button:hover{
    transform: scale(1.1);
}
h1{
    font-size: 1.6rem;
}
p{
    font-size: 1rem;
    line-height: 30px;
}





@media(max-width: 768px){

    position: relative;
    display: flex;
    align-items: center;
    
    main{
        
        z-index: 0;
        padding-top: 7rem;
        width: 100vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        overflow: auto;
    }
    #menuFechado{
        z-index: 1;
        display: flex;
        color: white;
        position: absolute;
        top: 5%;
        left: 10%;
        font-size: 30px;
    }
    #swipeRight{
      color: white;
      font-size: 30px;
      position: fixed;
      top: 42%;
      right: 2%;
      display: flex;
    }
    #swipeLeft{
    display: flex;
      color: white;
      font-size: 30px;
      position: fixed;
      top: 42%;
      left: 2%;
    }

    Header{
    z-index: 1;
    transition: transform 400ms;
    translate: -200px;
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
        transform: translateX(200px);
    }
    .carrosel{
        width: 95vw;
        min-height: 80vh;
        display: flex;
        overflow: hidden;
        overflow-y: auto;
        
        
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
        align-items: start;
    }
 
   
 
    .projetos{
       
        width: 95vw;
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 3rem;
        background-color: black;
    }
    .imgProjeto{
        width: 100%;
        height: 40%;
        //background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .imgProjeto img{
        object-fit: cover;
        width: 110%;
        height: 90%;
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
        font-size: 2em;
    }
    p{
        font-size: 1.2em;
        line-height: 2em;
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