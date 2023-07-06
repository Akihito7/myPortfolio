import { Container } from './style';
import { useRef, useEffect, useState } from 'react';
import { Header } from '../../Componentes/Header'
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javaS from '../../assets/javascript.svg';
import reactjs from '../../assets/react.svg'
import swipe from '../../assets/swipe.png';
import screenInitial from '../../assets/screenInitialCavaleiros.png';
import screenInitialGym from '../../assets/screenInitialGymProject.png';

export function Projects() {

    const [mounted, setMounted] = useState(false);
    const buttonMenu = useRef('');
    const galeryRef = useRef('');
    const mainLabel = useRef('');
    const projetos = document.querySelectorAll(".galery .projetos");
    const headerComp = document.getElementById("headerPage");

    let idx = 0;
    let startX;
    let moved = false;
    let i;
    
   const fecharMenu = () => {
    headerComp.classList.remove("open")
    buttonMenu.current.innerHTML = "menu"
   }
    const toggleHeader = () => {
        if (headerComp.classList.contains("open")) {
            headerComp.classList.remove("open")
            buttonMenu.current.innerHTML = "menu"
        }
        else {
            buttonMenu.current.innerHTML = "close";
            headerComp.classList.add("open");

        }
    }




    useEffect(() => {

        if (mounted) {
            galeryRef.current.addEventListener("touchstart", (event) => {
                startX = event.touches[0].clientX;
                moved = false;
            });

            galeryRef.current.addEventListener("touchmove", (event) => {
                if (!moved) {
                    const currentX = event.touches[0].clientX;
                    const diffX = startX - currentX;

                    if (diffX > 10) {
                        idx++;
                        if (idx > projetos.length - 1) {
                            for (i = 0; i < projetos.length; i++) {
                                idx = projetos.length - (i + 1);
                            }
                        }
                        moved = true;
                    }

                    else if (diffX < -10) {
                        idx--;
                        if (idx < 0) {
                            idx = projetos.length - 1;
                        }
                        moved = true;
                    }
                    galeryRef.current.style.transform = `translateX(${-idx * 95}vw)`;
                    startX = currentX;
                }

            });

            buttonMenu.current.addEventListener('touchstart', toggleHeader);

        }
        else {
            setMounted(true);
        }

    }, [mounted])



    return (
        <Container ref={mainLabel}>
            <Header />
            <span ref={buttonMenu} id="menuFechado" className="material-symbols-outlined">
                menu
            </span>
            <main onClick={fecharMenu}>
                <div className="carrosel">
                    <div ref={galeryRef} className="galery">
                        <div className="projetos">

                            <div className="imgProjeto">
                                <img src={screenInitial} alt="foto da pagina inicial do meu site dos cavaleiros" />
                            </div>

                            <div className="infoProjeto">
                                <h1>Os cavaleiros de ouro</h1>

                                <p>É um site feito para os fãs de Os cavaleiros dos zodíacos,que desejam conhecer um pouquinho melhor os 12 cavaleiros de ouro, esse site consome uma api feita em node por mim.</p>

                                <div className="iconesProjeto">
                                    <img src={html} alt="icone html" />
                                    <img src={css} alt="icone css" />
                                    <img src={reactjs} alt="icone javascript" />
                                </div>

                                <div className="buttonsProjeto">
                                    <a href="https://react-caveleiros-zodiacos-krcvrfoup-akihito7.vercel.app" target='_blank'><button>Deploy</button></a>

                                    <a href="https://github.com/Akihito7/react_caveleiros_zodiacos" target='_blank'><button id="btcode">Code</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="projetos">

                            <div className="imgProjeto">
                                <img src={screenInitialGym} alt="imagem da pagina inicial do meu site gym" />
                            </div>

                            <div className="infoProjeto">
                                <h1>Gym page</h1>

                                <p>Domine a era da tecnologia e impulsione sua academia para o sucesso com um site de tirar o fôlego! Descubra por que é absolutamente vital que sua academia esteja online para atrair uma enxurrada de novos clientes. Além disso, aproveite a praticidade incomparável de matrículas simples e rápidas, tudo ao alcance de um clique</p>

                                <div className="iconesProjeto">
                                    <img src={html} alt="icone html" />
                                    <img src={css} alt="icone css" />
                                    <img src={reactjs} alt="icone javascript" />
                                </div>

                                <div className="buttonsProjeto">
                                    <a href="https://gym-project-beta.vercel.app" target='_blank'><button>Deploy</button></a>

                                    <a href="https://github.com/Akihito7/gymProject" target='_blank'><button id="btcode">Code</button></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>



                <span id="swipeRight" className="material-symbols-outlined">
                    swipe_right
                </span>
                <span id="swipeLeft" className="material-symbols-outlined">
                    swipe_left
                </span>

            </main>



        </Container>
    )
}