import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

import {
    Container,
    ListScreens,
    ItemListScreens,
    ContentContacts,
    LinkContacts,
    ImagemContacts,

} from "./style"

import { useScreenSelected } from "../../contexts/screenSelected"


import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import whatsapp from '../../assets/whatsapp.svg'
import email from '../../assets/email.svg'

export function Header() {

    const navigateTo = useNavigate();
 

    const { screenSelected, setScreenSelected } = useScreenSelected();

    return (
        <Container id="headerPage">
            <ListScreens>
                <ItemListScreens

                    isSelecioned={screenSelected === '/'}
                    onClick={() => {
                        setScreenSelected('/')
                        navigateTo('/')
                    }}

                >
                    Home
                </ItemListScreens>

                <ItemListScreens

                    isSelecioned={screenSelected === 'about'}
                    onClick={() => {
                        setScreenSelected('about');
                        navigateTo('/about');
                    }}

                >
                    Sobre mim
                </ItemListScreens>

                <ItemListScreens

                    isSelecioned={screenSelected === 'projects'}
                    onClick={() => {
                        setScreenSelected("projects");
                        navigateTo("/projects");

                    }}

                >
                    Projetos
                </ItemListScreens>
            </ListScreens>

            <ContentContacts className="iconesContatos">

                <LinkContacts
                    href="https://github.com/Akihito7"
                    target="_blank"
                >
                    <ImagemContacts
                        src={github}
                        alt="icone do github"
                    />
                </LinkContacts>

                <LinkContacts
                    href="https://www.linkedin.com/in/guilherme-akihito-b1536125a/"
                    target="_blank">
                    <ImagemContacts
                        src={linkedin}
                        alt="icone do linkedin"
                    />
                </LinkContacts>

                <LinkContacts
                    href="https://wa.link/frbwzz"
                    target="_blank"
                >
                    <ImagemContacts
                        src={whatsapp}
                        alt="icone do whatsapp"
                    />
                </LinkContacts>

                <LinkContacts
                    href="mailto:akihitopo7@gmail.com">
                    <ImagemContacts
                        src={email}
                        alt="icone de um envelope"
                    />
                </LinkContacts>

            </ContentContacts>
        </Container>
    )
}