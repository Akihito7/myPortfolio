import { Container } from './style';
import { useRef, useEffect, useState } from 'react';
import { Header } from '../../Componentes/Header'
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javaS from '../../assets/javascript.svg';
import swipe from '../../assets/swipe.png';
import screenInitial from '../../assets/screenInitialCavaleiros.png';

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

    const toggleHeader = () => {
        if (headerComp.classList.contains("open")) {
            buttonMenu.current.innerHTML = "close";
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

            if (mainLabel.current.offsetWidth > 768) {

                projetos.forEach((div, index) => {

                    if (index % 2 === 0) {

                        const imgProjeto = div.querySelector('.imgProjeto');
                        const infoProjeto = div.querySelector('.infoProjeto');


                        div.removeChild(imgProjeto);
                        div.removeChild(infoProjeto);

                        div.appendChild(infoProjeto);
                        div.appendChild(imgProjeto);
                    }
                });
            }



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
            <main>
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
                                    <img src={javaS} alt="icone javascript" />
                                </div>

                                <div className="buttonsProjeto">
                                    <a href="https://react-caveleiros-zodiacos-krcvrfoup-akihito7.vercel.app" target='_blank'><button>Deploy</button></a>
                                    
                                    <a href="https://github.com/Akihito7/react_caveleiros_zodiacos" target='_blank'><button>Code</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="projetos">

                            <div className="imgProjeto">
                                <h1>em construção2</h1>
                            </div>

                            <div className="infoProjeto">
                                <h1>Os cavaleiros de ouro</h1>

                                <p>É um site feito para os fãs de Os cavaleiros dos zodíacos,que desejam conhecer um pouquinho melhor os 12 cavaleiros de ouro, esse site consome uma api feita em node por mim.</p>

                                <div className="iconesProjeto">
                                    <img src={html} alt="icone html" />
                                    <img src={css} alt="icone css" />
                                    <img src={javaS} alt="icone javascript" />
                                </div>

                                <div className="buttonsProjeto">
                                    <button>Deploy</button>
                                    <button>Code</button>
                                </div>
                            </div>
                        </div>

                        <div className="projetos">

                            <div className="imgProjeto">
                                <h1>em construção3</h1>
                            </div>

                            <div className="infoProjeto">
                                <h1>Os cavaleiros de ouro</h1>

                                <p>É um site feito para os fãs de Os cavaleiros dos zodíacos,que desejam conhecer um pouquinho melhor os 12 cavaleiros de ouro, esse site consome uma api feita em node por mim.</p>

                                <div className="iconesProjeto">
                                    <img src={html} alt="icone html" />
                                    <img src={css} alt="icone css" />
                                    <img src={javaS} alt="icone javascript" />
                                </div>

                                <div className="buttonsProjeto">
                                    <button>Deploy</button>
                                    <button>Code</button>
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