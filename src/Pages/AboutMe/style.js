import styled from "@emotion/styled";

export const Container = styled.div`

width: 100vw;
min-height: 100vh;
display: flex;
background-color: black;

@media(max-width: 768px){

.open{
    transform: translateX(200px);
}

}


`

export const ContentMain = styled.div`

width: 82vw;
padding: 2rem 8rem;
display: flex;
flex-direction: column;
color: white;
overflow: auto;

//Version mobile

@media(max-width: 768px){

    width: 100%;
    
    display: flex;
    justify-content: space-evenly;
    
    margin-top: 2rem;
    padding: 3rem;
    gap: 2rem;
}


`
export const IconMenuClose = styled.div`

display: none;

//Version mobile

@media(max-width: 786px){

    display: flex;
    position: absolute;
    color: white;
    font-size: 30px;
    
    top: 5%;
    left: 10%;
    cursor: pointer;

}

`
export const ContentAboutMe = styled.div`

text-align: justify;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2rem;
height: 60%;

//Version mobile

@media(max-width: 768px){
    padding-top: 2rem;
    min-height: 20rem;
}

`
export const TitleAboutMe = styled.div`
line-height: 2rem;
font-size: 2rem;
`
export const TextAboutMe = styled.div`

font-size: 1.2rem;
line-height: 2rem;

`
export const SeeMoreProjects = styled.div`

cursor: pointer;
color: #CE2525;

`
export const ContentHardSkills = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2rem;
height: 40%;

@media(max-width: 768px){
    min-height: 20rem;
}

`
export const TitleHardSkills = styled.div`
font-size: 2rem;
`
export const ContentIconsHardSkills = styled.div`

width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

`
export const AllIconsTogether = styled.div`

width: 100%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

@media(max-width: 768px){
    justify-content: center;
}

`