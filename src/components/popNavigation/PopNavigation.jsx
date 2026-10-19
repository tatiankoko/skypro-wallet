import {PopNavigationButton, PopNavigationStyled} from "./PopNavigation.styled.js";

const PopNavigation = ({activeId, setActiveId}) => {
    return (
        <PopNavigationStyled>
            <PopNavigationButton id={"my"}
                                 $active={activeId === "my"}
                                 onClick={() => setActiveId("my")}>
                Мои расходы
            </PopNavigationButton>

            <PopNavigationButton id={"new"}
                                 $active={activeId === "new"}
                                 onClick={() => setActiveId("new")}>
                Новый расход
            </PopNavigationButton>

            <PopNavigationButton id={"analysis"}
                                 $active={activeId === "analysis"}
                                 onClick={() => setActiveId("analysis")}>
                Анализ расходов
            </PopNavigationButton>
        </PopNavigationStyled>
    );
}

export default PopNavigation;