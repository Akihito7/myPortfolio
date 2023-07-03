import styled from "@emotion/styled";

export const Container = styled.div`

*{
    padding: 0;
    margin: 0;

    box-sizing: border-box;
}

display: flex;
width: 100vw;
min-height: 100vh;

background-color: black;

#menuFechado{
    display: none;
}


main{
    width: 82vw;
    padding: 2rem 8rem;
    display: flex;
    flex-direction: column;
    color: white;
    overflow: auto;

}
.sobremim{
    text-align: justify;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    height: 60%;
}
h1{
    line-height: 2rem;
}
p{
    font-size: 1.2rem;
    line-height: 2rem;
}
#verProjetos{
   cursor: pointer;
   color: #CE2525;
}

.hardSkills{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    height: 40%;
}
.iconsDiv{
    width: 100px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    
}
.iconsDiv p{
    font-size: .8rem;
}
.icons{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
}
.icons img{
    width: 50px;
    transition: transform 300ms;
    cursor: pointer;
}
.icons img:hover{
    transform: scale(1.1);
}
@media(max-width: 768px){


    #menuFechado{
    display: flex;
    position: absolute;
    color: white;
    top: 5%;
    left: 10%;
    cursor: pointer;
}
Header{
    transition: transform 400ms;
    translate: -100%;
    align-items: center;
    position: fixed;
    width: 180px;
    align-items: center;
    padding-right: 1.4rem;
    li{
    font-size: 1rem;
}
}

main{
    margin-top: 2rem;
    gap: 2rem;
    padding: 3rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

}
.hardSkills{
    
    min-height: 20rem;
}
.sobremim{
    padding-top: 2rem;
    min-height: 20rem;
}

.open{
    transform: translateX(100%);
}

}

.icons img{
    width: 40px;
}
.iconsDiv{
    width: 80px;
}


`