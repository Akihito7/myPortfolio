import { Container } from './style';
import { Header } from '../../Componentes/Header';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javaS from '../../assets/javascript.svg';
import react from '../../assets/react.svg';
import node from '../../assets/node.svg';
import java from '../../assets/java.svg';
import spring from '../../assets/springBoot.svg';
import typescript from '../../assets/typescript.svg'

export function AboutMe() {

  const labelMain = useRef()
  const headerPage = document.getElementById('headerPage');
  const labelMenu = useRef();
  const navigate = useNavigate();

  const [mounted, setMouted] = useState();



  const navProjects = () => {
    navigate('/projects');
  };
  const closeMenu = () => {
    if (headerPage.classList.contains('open')) {
      menuToggle();
    }
  };

  function menuToggle() {
    if (headerPage.classList.contains('open')) {
      labelMenu.current.innerHTML = 'menu';
    } else {
      labelMenu.current.innerHTML = 'close';
    }

    headerPage.classList.toggle('open');
  }


  useEffect(() => {

    if (mounted) {
      labelMenu.current.addEventListener("click", menuToggle);
    }
    else {
      setMouted(true)
    }
  }, [mounted])

  return (
    <Container >
      <Header />
      <main>
        <span ref={labelMenu} id="menuFechado" className="material-symbols-outlined">
          menu
        </span>
        <div onClick={closeMenu} className="sobremim">
          <h1>Sobre mim</h1>
          <p>
            Oi, sou Guilherme Akihito e sou completamente apaixonado pelo mundo da tecnologia e por desafios. Acho que o
            melhor dessa paixão é que ela sempre me impulsiona a superar obstáculos e encontrar soluções criativas. Adoro
            a emoção que acompanha os desafios; é uma sensação incrível quando consigo resolvê-los. <br /> <br />{' '}
            <span id="verProjetos" onClick={navProjects}>
              ver projetos
            </span>
          </p>
        </div>
        <div onClick={closeMenu} className="hardSkills">
          <h1>Hard Skills</h1>

          <div className="iconsHardSkills">


            <div className="icons">
              <div className="iconsDiv">
              <div className="divImagemIcone">
                <img src={html} alt="" />
                </div>
                <p>Html</p>
              </div>
              <div className="iconsDiv">
              <div className="divImagemIcone">
                <img src={css} alt="" />
                </div>
                <p>Css</p>
              </div>

              <div className="iconsDiv">
              <div className="divImagemIcone">
                <img src={javaS} alt="" />
                </div>
                <p>Javascript</p>
              </div>
              <div className="iconsDiv">
              <div className="divImagemIcone">
                <img src={react} alt="" />
                </div>
                <p>React</p>
              </div>

              <div className="iconsDiv">
              <div className="divImagemIcone">
                <img src={node} alt="" />
                </div>
                <p>Node</p>
              </div>
              <div className="iconsDiv">
              <div className="divImagemIcone">
                <img src={java} alt="" />
                </div>
                <p>Java</p>
              </div>
              <div className="iconsDiv">
              <div className="divImagemIcone">
                <img src={spring} alt="" />
                </div>
                <p>Spring</p>
              </div>
              <div className="iconsDiv">
                <div className="divImagemIcone">
                <img src={typescript} alt="" />
                </div>
                <p>Typescript</p>
              </div>
            </div>


          </div>
        </div>
      </main>
    </Container>
  );
}
