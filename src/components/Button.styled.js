import styled from "styled-components";
import {colors} from "../theme.js";

export const FormButton = styled.button`
    width: 100%;
    height: 39px;
    background-color: ${ colors.btnBg };
    border-radius: 6px;
    padding: 12px;
    margin-top: 12px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 15px;
    font-weight: 600;
    color: ${ colors.btnText };
    
    &:disabled {
        background-color: ${ colors.shadow };
        color: ${ colors.background };
    }

    @media screen and (max-width: 375px) {
        height: 40px;
    }
`