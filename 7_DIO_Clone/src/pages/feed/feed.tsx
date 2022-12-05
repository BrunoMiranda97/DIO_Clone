import Header from "../../components/header/header";
import Card from "../../components/card/card";
import { Column, Container, Title, TitleHighlight } from "./styles";
import UserRanking from "../../components/ranking/ranking";

const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container >
                <Column flex={2}>
                    <Title>#FEED</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>

                <Column flex={1}>
                    <TitleHighlight>#Ranking da Semana</TitleHighlight>
                    <UserRanking name="Bruno Miranda 1" image="https://avatars.githubusercontent.com/u/116757638?v=4" percentual={80} />
                    <UserRanking name="Bruno Miranda 2" image="https://avatars.githubusercontent.com/u/116757638?v=4" percentual={30} />
                    <UserRanking name="Bruno Miranda 3" image="https://avatars.githubusercontent.com/u/116757638?v=4" percentual={50} />
                    <UserRanking name="Bruno Miranda 4" image="https://avatars.githubusercontent.com/u/116757638?v=4" percentual={50} />
                    <UserRanking name="Bruno Miranda 5" image="https://avatars.githubusercontent.com/u/116757638?v=4" percentual={95} />
                </Column>
            </Container>
        </>
    );
};

export default Feed;
