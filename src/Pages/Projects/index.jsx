import {
    Container,
    IconMenuClose,
    Carousel,
    ContentMain,
    ContentCarrousel,
    ContentGalery,

} from './style';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useRef, useEffect, useState } from 'react';
import { isMobile, isTablet } from 'react-device-detect';

import { Header } from '../../Componentes/Header'
import { SwipeScreenWarning } from '../../Componentes/SwipeScreenWarning';
import { CardProjects } from '../../Componentes/CardProjects';



import screenInitial from '../../assets/screenInitialCavaleiros.png';
import screenInitialGym from '../../assets/screenInitialGymProject.png';

export function Projects() {
    const [swipeScreenWarning, setSwipeScreenWarning] = useState(false);

    const [mounted, setMounted] = useState(false);
    const buttonMenu = useRef('');
    const mainLabel = useRef('');

    const headerComp = document.getElementById("headerPage");



    const handleCloseMenu = () => {
        headerComp.classList.remove("open")
        buttonMenu.current.innerHTML = "menu"
    }

    const handleToggleHeader = () => {
        if (headerComp.classList.contains("open")) {
            headerComp.classList.remove("open")
            buttonMenu.current.innerHTML = "menu"
        }
        else {
            buttonMenu.current.innerHTML = "close";
            headerComp.classList.add("open");

        }
    }


    const closeSwipeWarning = () => {
        setSwipeScreenWarning(false)
    }

    useEffect(() => {

        if (mounted) {

            if (isMobile | isTablet) {
                setSwipeScreenWarning(true);
            }


        }
        else {
            setMounted(true);
        }

    }, [mounted])



    return (
        <Container ref={mainLabel}>
            <Header />

            <IconMenuClose
                id="menuFechado"
                className="material-symbols-outlined"
                ref={buttonMenu}
                onClick={handleToggleHeader}
            >
                menu
            </IconMenuClose>


            <ContentMain
                onClick={() => {
                    handleCloseMenu();
                    closeSwipeWarning();
                }}
                
                onTouchStart={() => {
                    handleCloseMenu();
                    closeSwipeWarning();
                }}
            >

                {
                    isMobile ?
                        <Carousel
                            showArrows={true}
                            showThumbs={false}
                        >

                            <CardProjects
                                src={screenInitial}
                                alt={'foto pagina incial do meu site dos cavaleiros dos zodiacos'}

                                title={'Os cavaleiros de ouro'}

                                description='Site feito para os fãs de Os cavaleiros dos zodíacos,que desejam conhecer um pouco melhor os 12 cavaleiros de ouro, esse site consome uma api feita em node por mim.'

                                srcIcon={['html', 'css', 'react']}

                                hrefDeploy='https://react-caveleiros-zodiacos-krcvrfoup-akihito7.vercel.app'

                                hrefCode='https://github.com/Akihito7/react_caveleiros_zodiacos'
                            />

                            <CardProjects
                                src={screenInitialGym}

                                title={'Gym Page'}
                                description='Domine a era da tecnologia! Impulsione sua academia para o sucesso com um site incrível de tirar o fôlego! atraia muitos clientes com matrículas práticas e rápidas.'

                                srcIcon={['html', 'css', 'react']}

                                hrefDeploy='https://gym-project-beta.vercel.app'
                                hrefCode='https://github.com/Akihito7/gymProject'

                            />
                        </Carousel>

                        :


                        <ContentCarrousel>
                            <ContentGalery>
                                <CardProjects
                                    src={screenInitial}
                                    alt={'foto pagina incial do meu site dos cavaleiros dos zodiacos'}

                                    title={'Os cavaleiros de ouro'}

                                    description='É um site feito para os fãs de Os cavaleiros dos zodíacos,que desejam conhecer um pouquinho melhor os 12 cavaleiros de ouro, esse site consome uma api feita em node por mim.'

                                    srcIcon={['html', 'css', 'react']}

                                    hrefDeploy='https://react-caveleiros-zodiacos-krcvrfoup-akihito7.vercel.app'

                                    hrefCode='https://github.com/Akihito7/react_caveleiros_zodiacos'
                                />

                                <CardProjects
                                    src={screenInitialGym}

                                    title={'Gym Page'}
                                    description='Domine a era da tecnologia! Impulsione sua academia para o sucesso com um site incrível de tirar o fôlego! atraia muitos clientes com matrículas práticas e rápidas.'

                                    srcIcon={['html', 'css', 'react']}

                                    hrefDeploy='https://gym-project-beta.vercel.app'
                                    hrefCode='https://github.com/Akihito7/gymProject'

                                />
                            </ContentGalery>
                        </ContentCarrousel>
                }



                <SwipeScreenWarning
                    isVisible={swipeScreenWarning}
                    onPress={closeSwipeWarning}
                />

            </ContentMain>




        </Container>
    )
}