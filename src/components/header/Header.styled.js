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
    padding: 0;
    /*padding: 0 20px;*/

    @media screen and (max-width: 495px) {
        width: 100%;
        /*padding: 0 16px;*/
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

    @media screen and (max-width: 495px) {
        height: 54px;
        padding: 0 20px;
        gap: 20px;
    }
`

export const HeaderNav = styled.nav`
    max-width: 274px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;

    @media screen and (max-width: 495px) {
        justify-content: right;
        margin-left: auto;
    }
`

export const HeaderLogo = styled.div`
    display: block;
    
    img {
        width: 150px;
        
        @media screen and (max-width: 495px) {
            width: 109px;
        }
    }    
`

export const HeaderLink = styled(Link)`
    color: ${ ({$active}) => $active ? colors.btnBg : colors.title };
    text-decoration: ${ ({$active}) => $active ? 'underline' : 'none' };;
    border: none;
    font-size: 14px;
    line-height: 24px;
    font-weight: ${ ({$active}) => $active ? 600 : 400 };
    
    @media screen and (max-width: 495px) {
        display: ${ ({$active}) => $active ? 'flex' : 'none' } !important;
        font-size: 12px;
        line-height: 18px;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        
        &::after {
            content: "";
            display: block;
            width: 6px;
            height: 6px;
            border-radius: 1px;
            border-left: 2px solid ${ colors.title };
            border-bottom: 2px solid ${ colors.title };
            transform: rotate(-45deg);
            margin: -6px 0 0 5px;
            padding: 0;
        } 
        
        /*z-index: 3;
        position: fixed;
        left: 16px;
        bottom: 30px;
        top: auto;
        width: calc(100vw - 32px);
        height: 40px;
        border-radius: 4px;
        margin-right: 0;*/
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

    @media screen and (max-width: 495px) {
        font-size: 12px;
        line-height: 18px;
    }
`

