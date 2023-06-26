import { Container } from './style'
import {Header} from '../../Componentes/Header'
import { useEffect,useState} from 'react';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javaS from '../../assets/javascript.svg';
import react from '../../assets/react.svg';
import node from '../../assets/node.svg';
import java from '../../assets/java.svg';
import spring from '../../assets/springBoot.svg';

export function AboutMe(){

   const [mounted,setMounted] = useState(false);

   const menuFechado = document.getElementById("menuFechado");
   const headerPagex = document.getElementById("headerPage");

   function menuToggle(){
        
      if(headerPagex.classList.contains("open")){
          headerPagex.classList.remove("open");
          menuFechado.innerHTML = "menu"
      }
      else{
          menuFechado.innerHTML = "close"
          headerPagex.classList.add("open");
      }
  }
  
 useEffect( ()=> {
   
        if(mounted){
         menuFechado.addEventListener("click", menuToggle);
        }
        else{
         setMounted(true);
        }
 }, [mounted]);

    return (
        <Container>
            <Header/>
            <main>
            <span id="menuFechado" className="material-symbols-outlined">
              menu
            </span>
                <div className="sobremim">
                  <h1>Sobre mim</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ut quaerat? Unde eaque nihil praesentium veritatis? Neque delectus maxime et molestiae, explicabo officiis accusantium esse facere iste numquam voluptatibus iusto.</p>

                </div>
                <div className="hardSkills">
                 <h1>Hard Skills</h1>
                 <div className="icons">
                    <div className="iconsDiv">
                       <img src={html} alt="" />
                       <p>Html</p>
                    </div>
                    <div className="iconsDiv">
                 <img src={css} alt="" />
                 <p>Css</p>
                    </div>

                    <div className="iconsDiv">
                 <img src={javaS} alt="" />
                 <p>Javascript</p>
                    </div>
                    <div className="iconsDiv">
                 <img src={react} alt="" />
                 <p>React</p>
                    </div>

                    <div className="iconsDiv">
                 <img src={node} alt="" />
                 <p>Node</p>
                    </div>
                    <div className="iconsDiv">
                 <img src={java} alt="" />
                 <p>Java</p>
                    </div>
                    <div className="iconsDiv">
                 <img src={spring} alt="" />
                 <p>Spring</p>
                    </div>
                 </div>

                </div>
            </main>
        </Container>
    )
}