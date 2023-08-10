import { Container, TextSwipeScreen, ButtonSwipe } from './style'

export function SwipeScreenWarning({ isVisible, onPress }) {
    return (
        <Container isVisible={isVisible}>
            <TextSwipeScreen>Deslize para os lados para ver mais conteúdos</TextSwipeScreen>

            <ButtonSwipe onClick={onPress}>
                Entendi
            </ButtonSwipe>
        </Container>
    )
}