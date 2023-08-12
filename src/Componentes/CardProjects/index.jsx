import React from 'react'


import {
    Container,
    ContentImagem,
    Imagem,
    ContentInfomartion,
    TitleInformation,
    TextInformation,
    ContentIcons,
    IconImage,
    ContentButtons,
    Link,
    Button,
} from './styles'

import HtmlSvg from '../../assets/html.svg';
import CssSvg from '../../assets/css.svg'
import ReactSvg from '../../assets/react.svg';
import NodeSvg from '../../assets/node.svg'

const iconsSvg = {
    html: HtmlSvg,
    react: ReactSvg,
    css: CssSvg,
    node: NodeSvg,
};

export function CardProjects({
    src,
    alt,
    title,
    description,
    srcIcon,
    hrefDeploy,
    hrefCode,
}) {
    return (
        <Container>
            <ContentImagem>
                <Imagem
                    src={src}
                    alt={alt}
                />

            </ContentImagem>

            <ContentInfomartion>
                <TitleInformation>
                    {title}
                </TitleInformation>

                <TextInformation >
                    {description}
                </TextInformation>


                <ContentIcons>
                    {
                        srcIcon ? srcIcon.map((icon) => (
                            <IconImage
                                src={iconsSvg[icon]}
                            />
                        ))

                            : ''
                    }
                </ContentIcons>

                <ContentButtons>
                    <Link
                        href={hrefDeploy}
                        target='_blank'
                    >
                        <Button>Deploy</Button>
                    </Link>

                    <Link
                        href={hrefCode}
                        target='_blank'
                    >
                        <Button secondary={true}>Code</Button>
                    </Link>

                </ContentButtons>



            </ContentInfomartion>
        </Container>
    )
}