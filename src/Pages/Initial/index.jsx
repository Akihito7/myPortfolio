import {
    Container,
    ContentMain,
    AutoTextContent,
    AutoText,
    InformationContent,
    ButtonInformationsContent,
    ButtonInformation,
    IconsContent,
    ImageIcon,
    MenuCloseContent,


} from "./style";

import { Header } from "../../Componentes/Header";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


import HtmlSvg from '../../assets/html.svg';
import CssSvg from '../../assets/css.svg';
import JavasSvg from '../../assets/javascript.svg';
import ReactSvg from '../../assets/react.svg';
import NodeSvg from '../../assets/node.svg';
import JavaSvg from '../../assets/java.svg';
import SpringSvg from '../../assets/springBoot.svg';
import TypescriptSvg from '../../assets/typescript.svg'



export function Initial() {

    const headerPageComponent = document.getElementById("headerPage");
    const [mounted, setMounted] = useState(false);

    const h1Ref = useRef('');
    const menuRef = useRef('')

    const navigate = useNavigate();

    const goAboutMe = () => {
        navigate('/about');
    }
    const goProjetos = () => {
        navigate("/projects");
    }

    const handleCloseMenu = () => {
        if (headerPageComponent.classList.contains("open")) {
            headerPageComponent.classList.remove("open");
            menuRef.current.innerHTML = "menu"

        }
    }
    function handleMenuToggle() {


        if (headerPageComponent.classList.contains("open")) {
            headerPageComponent.classList.remove("open");
            menuRef.current.innerHTML = "menu"
        }
        else {
            menuRef.current.innerHTML = "close"
            headerPageComponent.classList.add("open");
        }
    }


    useEffect(() => {



        if (mounted) {


            const text = "Olá, eu sou Guilherme Akihito desenvolvedor de softwares"
            let idx = 0;

            const writeTextAutomatically = () => {

                if (idx < text.length) {
                    h1Ref.current.innerHTML += text.charAt(idx);
                    idx++
                    setTimeout(writeTextAutomatically, 100);
                }
                else {
                    return null;
                }
            }

            writeTextAutomatically();
        }
        else {
            setMounted(true);
        }
    }, [mounted]);

    return (
        <Container>
            <Header></Header>

            <MenuCloseContent
                ref={menuRef}
                className="material-symbols-outlined"
                onClick={handleMenuToggle}
            >
                menu
            </MenuCloseContent>


            <ContentMain
                onClick={handleCloseMenu}
            >
                <AutoTextContent>
                    <AutoText
                        ref={h1Ref}
                    >

                    </AutoText>
                </AutoTextContent>

                <InformationContent>

                    <ButtonInformationsContent>

                        <ButtonInformation
                            id="buttonMain"
                            onClick={goAboutMe}

                        >
                            Sobre mim
                        </ButtonInformation>

                        <ButtonInformation
                            id="buttonMain"
                            onClick={goProjetos}
                            secondary
                        >
                            Projetos
                        </ButtonInformation>

                    </ButtonInformationsContent>

                    <IconsContent>
                        <ImageIcon src={HtmlSvg} alt="icone html" />
                        <ImageIcon src={CssSvg} alt="icone css" />
                        <ImageIcon src={JavasSvg} alt="icone javaScript" />
                        <ImageIcon src={ReactSvg} alt="icone react" />
                        <ImageIcon src={NodeSvg} alt="icone node" />
                        <ImageIcon src={JavaSvg} alt="icone java" />
                        <ImageIcon src={SpringSvg} alt="icone spring boot" />
                        <ImageIcon src={TypescriptSvg} alt="icone typescript" />
                    </IconsContent>
                </InformationContent>
            </ContentMain>
        </Container>
    );
}
