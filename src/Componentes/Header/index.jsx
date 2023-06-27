import { Container } from "./style"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import whatsapp from '../../assets/whatsapp.svg'
import email from '../../assets/email.svg'

export function Header(){

    const navigate = useNavigate();
  
    const home = () => {
       
        navigate('/');
      
    }
    const aboutMe = () => {
        navigate('/about')
    }
    const projcts = () => {
        navigate("/projects")
    }
 
    return (
        <Container id="headerPage">
            <ul>
                <li id="one" onClick={home}>Home</li>
                <li onClick={ () => aboutMe() }>Sobre mim</li>
                <li onClick={projcts}>Projetos</li>
            </ul>

            <div className="iconesContatos">

                <a href="https://github.com/Akihito7" target="_blank"><img src={github} alt="icone do github"/></a>

                <a href="https://www.linkedin.com/in/guilherme-akihito-b1536125a/" target="_blank"> <img src={linkedin} alt="icone do linkedin" /></a>

               <a href="https://wa.link/frbwzz" target="_blank"><img src={whatsapp} alt="icone do whatsapp" /></a>
                <a href="mailto:akihitopo7@gmail.com"><img src={email} alt="icone de um envelope" /></a>
          
            </div>
        </Container>
    )
}