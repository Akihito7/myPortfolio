import {
    Container,
    Title,
    ContentIcon,
    ImagemIcon,
    
} from './style'



export function IconsAboutMe({ src, alt, title }) {
    return (

        <Container>

            <ContentIcon>
                <ImagemIcon
                    src={src}
                    alt={alt}
                />
            </ContentIcon>

            <Title>
                {title}
            </Title>

        </Container>
    )
}