import styled from "styled-components";
import {colors} from "../../theme.js";
import {Link} from "react-router-dom";

export const HeaderStyled = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: ${ colors.background };
`

export const HeaderContainer = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    @media screen and (max-width: 495px) {
        width: 100%;
        padding: 0 16px;
    }
`

export const HeaderBlock = styled.div`
    height: 64px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`

export const HeaderNav = styled.nav`
    max-width: 274px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderLogo = styled.div`
    display: block;
    
    img {
        width: 150px;
    }
`

export const HeaderLink = styled(Link)`
    /*height: 30px;*/
    color: ${ ({$active}) => $active ? colors.btnBg : colors.title };
    text-decoration: ${ ({$active}) => $active ? 'underline' : 'none' };;
    border: none;
    font-size: 14px;
    line-height: 24px;
    font-weight: ${ ({$active}) => $active ? 600 : 400 };
    margin-right: 20px;

    @media screen and (max-width: 495px) {
        z-index: 3;
        position: fixed;
        left: 16px;
        bottom: 30px;
        top: auto;
        width: calc(100vw - 32px);
        height: 40px;
        border-radius: 4px;
        margin-right: 0;
    }
`

export const HeaderLogout = styled.a`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
    color: ${ colors.title };
`

