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
import {useTransactions} from "../../context/TransactionsContext.jsx";

const Header = () => {
    const {isAuth, logout} = useAuth();
    const {setTransactions, setSelectedPeriod} = useTransactions();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setTransactions(null);
        setSelectedPeriod(null);
        navigate("/auth");
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
                                <HeaderLink to="/costs/my">
                                    Мои расходы
                                </HeaderLink>

                                <HeaderLink to="/costs/analysis">
                                    Анализ расходов
                                </HeaderLink>
                            </HeaderNav>
                            : null
                    }

                    {
                        isAuth
                            ? <HeaderLogout type="button" onClick={handleLogout}>
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