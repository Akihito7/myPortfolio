import { Container } from './style'
import { Header } from '../../Componentes/Header'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javaS from '../../assets/javascript.svg';
import react from '../../assets/react.svg';
import node from '../../assets/node.svg';
import java from '../../assets/java.svg';
import spring from '../../assets/springBoot.svg';

export function AboutMe() {

   const navigate = useNavigate();
   const [mounted, setMounted] = useState(false);

   const menuFechado = document.getElementById("menuFechado");
   const headerPagex = document.getElementById("headerPage");

   function menuToggle() {

      if (headerPagex.classList.contains("open")) {
         headerPagex.classList.remove("open");
         menuFechado.innerHTML = "menu"
      }
      else {
         menuFechado.innerHTML = "close"
         headerPagex.classList.add("open");
      }
   }

   const navProjects = () => {
      navigate("/projects");
   }

   useEffect(() => {

      if (mounted) {
         menuFechado.addEventListener("click", menuToggle);
      }
      else {
         setMounted(true);
      }
   }, [mounted]);

   return (
      <Container>
         <Header />
         <main>
            <span id="menuFechado" className="material-symbols-outlined">
               menu
            </span>
            <div className="sobremim">
               <h1>Sobre mim</h1>
               <p>Oi, sou Guilherme Akihito e sou completamente apaixonado pelo mundo da tecnologia e por desafios. Acho que o melhor dessa paixão é que ela sempre me impulsiona a superar obstáculos e encontrar soluções criativas. Adoro a emoção que acompanha os desafios; é uma sensação incrível quando consigo resolvê-los. <br /> <br /> <span id='verProjetos' onClick={navProjects}>ver projetos</span>
               </p>

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