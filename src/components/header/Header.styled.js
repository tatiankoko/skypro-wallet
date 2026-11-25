import styled from "styled-components";
import {colors} from "../../theme.js";
import {NavLink} from "react-router-dom";

export const HeaderStyled = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: ${ colors.background };
`

export const HeaderContainer = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0;
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
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
`

export const HeaderLogo = styled.div`
    display: block;
    
    img {
        width: 150px;
    }    
`

export const HeaderLink = styled(NavLink)`
    white-space: nowrap;
    flex-shrink: 0;
    color: ${ colors.title };
    text-decoration: none;
    border: none;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
`

export const HeaderLogout = styled.button`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
    color: ${ colors.title };
`
