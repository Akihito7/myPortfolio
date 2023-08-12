import {
  Container,
  ContentMain,
  IconMenuClose,
  ContentAboutMe,
  TitleAboutMe,
  TextAboutMe,
  SeeMoreProjects,
  ContentHardSkills,
  TitleHardSkills,
  ContentIconsHardSkills,
  AllIconsTogether,

} from './style';


import { Header } from '../../Componentes/Header';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { IconsAboutMe } from '../../Componentes/IconsAboutMe';

import HtmlSvg from '../../assets/html.svg';
import CssSvg from '../../assets/css.svg';
import JavasSvg from '../../assets/javascript.svg';
import ReactSvg from '../../assets/react.svg';
import NodeSvg from '../../assets/node.svg';
import JavaSvg from '../../assets/java.svg';
import SpringSvg from '../../assets/springBoot.svg';
import TypescriptSvg from '../../assets/typescript.svg'

export function AboutMe() {

  const [mounted, setMouted] = useState();

  const headerPage = document.getElementById('headerPage');
  const labelMenu = useRef();

  const navigate = useNavigate();



  function goProjects() {
    navigate('/projects')
  };

  function handleCloseMenu() {
    if (headerPage.classList.contains('open')) {
      menuToggle();
    }
  };

  function handleMenuToggle() {

    if (headerPage.classList.contains('open')) {
      labelMenu.current.innerHTML = 'menu';
    }
    else {
      labelMenu.current.innerHTML = 'close';
    }

    headerPage.classList.toggle('open');
  }


  useEffect(() => {

    if (mounted) {
      //labelMenu.current.addEventListener("click", handleMenuToggle);
    }
    else {
      setMouted(true)
    }
  }, [mounted])

  return (
    <Container >
      <Header />

      <ContentMain>

        <IconMenuClose
          id="menuFechado"
          ref={labelMenu}
          className="material-symbols-outlined"
          onClick={handleMenuToggle}
          
        >
          menu
        </IconMenuClose>


        <ContentAboutMe
          onClick={handleCloseMenu}
        >
          <TitleAboutMe>Sobre mim</TitleAboutMe>

          <TextAboutMe>
            Oi, sou Guilherme Akihito e sou completamente apaixonado pelo mundo da tecnologia e por desafios. Acho que o
            melhor dessa paixão é que ela sempre me impulsiona a superar obstáculos e encontrar soluções criativas. Adoro
            a emoção que acompanha os desafios; é uma sensação incrível quando consigo resolvê-los. <br /> <br />{' '}

            <SeeMoreProjects
              id="verProjetos"
              onClick={goProjects}>
              ver projetos
            </SeeMoreProjects>

          </TextAboutMe>
        </ContentAboutMe>

        <ContentHardSkills
          onClick={handleCloseMenu}
        >
          <TitleHardSkills>Hard Skills</TitleHardSkills>

          <ContentIconsHardSkills>


            <AllIconsTogether>

              <IconsAboutMe
                title='Html'
                src={HtmlSvg}
                alt='Icone do HTML'
              />

              <IconsAboutMe
                title='Css'
                src={CssSvg}
                alt='Icone do Css'
              />

              <IconsAboutMe
                title='Javascript'
                src={JavasSvg}
                alt='Icone do Javascript'
              />

              <IconsAboutMe
                title='React'
                src={ReactSvg}
                alt='Icone do ReactJs'
              />

              <IconsAboutMe
                title='Node'
                src={NodeSvg}
                alt='Icone do NodeJs'
              />

              <IconsAboutMe
                title='Java'
                src={JavaSvg}
                alt='Icone do Java'
              />

              <IconsAboutMe
                title='Spring'
                src={SpringSvg}
                alt='Icone do HTML'
              />

              <IconsAboutMe
                title='Typescript'
                src={TypescriptSvg}
                alt='Icone do Typescript'
              />

            </AllIconsTogether>


          </ContentIconsHardSkills>
        </ContentHardSkills>
      </ContentMain>

    </Container>
  );
}
