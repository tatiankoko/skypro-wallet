import {
    HeaderBlock,
    HeaderContainer,
    HeaderLink,
    HeaderLogo, HeaderLogout,
    HeaderNav,
    HeaderStyled
} from "./Header.styled.js";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.jsx";
import {useState} from "react";
import PopNavigation from "../popNavigation/PopNavigation.jsx";

const Header = () => {
    const {isAuth, logout} = useAuth();
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState('my');
    const [showNav, setShowNav] = useState(false)

    const handleClickLink = (e) => {
        setActiveLink(e.target.id);
        setShowNav(!showNav);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        /*setTransactions(null);*/
        navigate("/sign-in");
    }

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

                                {/*<HeaderLink to={"/costs/my"}
                                            id={"new"}
                                            onClick={handleClickLink}
                                            $active={activeLink === 'new'}
                                            style={{display: 'none'}}>
                                    Новый расход
                                </HeaderLink>*/}

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
                            ? <HeaderLogout onClick={handleLogout}>
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