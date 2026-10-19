import styled from "styled-components";
import {colors} from "../../theme.js";

export const PopNavigationStyled = styled.div`
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    position: absolute;
    top: 46px;
    right: 78px;
    border-radius: 10px;
    border: 1px solid ${ colors.shadow };
    background: ${ colors.background };
    box-shadow: 0 20px 67px -12px ${ colors.boxShadow };
    
    padding: 10px;
    text-align: center;
    z-index: 2;

    &:target {
        display: block;
    }

    @media screen and (max-width: 495px) {
        display: flex;
    }
`

export const PopNavigationButton = styled.button`
    padding: 7px 14px;
    background: ${ ({$active}) => $active ? colors.successBg : colors.fond };
    color: ${ ({$active}) => $active ? colors.btnBg : colors.title };
    border-radius: 24px;
    border: 0;
    
    color: ${ props => props.theme.title };
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
`