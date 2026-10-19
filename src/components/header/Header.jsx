import {
    HeaderBlock,
    HeaderContainer,
    HeaderLink,
    HeaderLogo, HeaderLogout,
    HeaderNav,
    HeaderStyled
} from "./Header.styled.js";
import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.jsx";
import {useState} from "react";
import PopNavigation from "../popNavigation/PopNavigation.jsx";

const Header = () => {
    const {isAuth, setIsAuth} = useAuth();
    const [activeLink, setActiveLink] = useState('my');
    const [showNav, setShowNav] = useState(false)


    const handleClickLink = (e) => {
        e.preventDefault();
        setActiveLink(e.target.id);
        setShowNav(!showNav);
    };

    return (
        <HeaderStyled>
            <HeaderContainer>
                <HeaderBlock>
                    <Link to={"/"}>
                        <HeaderLogo>
                            <img src="/images/logo.png" alt="logo"></img>
                        </HeaderLogo>
                    </Link>
                    {
                        isAuth
                            ? <HeaderNav>
                                <HeaderLink to={"/costs/my"}
                                            id={"my"}
                                            onClick={handleClickLink}
                                            $active={activeLink === 'my'}>
                                    Мои расходы
                                </HeaderLink>

                                <HeaderLink to={"/costs/analysis"}
                                            id={"new"}
                                            onClick={handleClickLink}
                                            $active={activeLink === 'new'}
                                            style={{display: 'none'}}>
                                    Новый расход
                                </HeaderLink>

                                <HeaderLink to={"/costs/analysis"}
                                            id={"analysis"}
                                            onClick={handleClickLink}
                                            $active={activeLink === 'analysis'}>
                                    Анализ расходов
                                </HeaderLink>

                                {
                                    showNav
                                        ? <PopNavigation activeId={activeLink}
                                                         setActiveId={setActiveLink}>
                                        </PopNavigation>
                                        : null
                                }

                            </HeaderNav>
                            : null
                    }

                    {
                        isAuth
                            ? <HeaderLogout onClick={() => setIsAuth(false)}>
                                Выйти
                            </HeaderLogout>
                            : null
                    }
                </HeaderBlock>
            </HeaderContainer>
        </HeaderStyled>
    );
}

export default Header;