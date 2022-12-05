import { StyledHome, TextContent, Title, TitleHighlight } from "./styles";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate("/login")
    }

    return (
        <>
            <Header />
            <StyledHome>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente <br />
                        </TitleHighlight>
                        o seu futuro global agora.
                    </Title>

                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare o seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>

                    <Button label="Começar agora" variant="secondary" onClick={handleClickSignIn} />
                </div>

                <div>
                    <img src="https://raw.githubusercontent.com/pablohdev/dio-clone/master/src/assets/banner.png" alt="Banner da DIO" />
                </div>
            </StyledHome>
        </>
    );
};

export default HomePage;
