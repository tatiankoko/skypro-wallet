import styled from "styled-components";
import {colors} from "../theme.js";

export const FormInput = styled.input`
    width: 100%;
    min-width: 100%;
    border-radius: 6px;
    border: 1px solid ${ colors.shadow };
    outline: none;
    padding: 4px 10px;
    
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    
    &::-moz-placeholder {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.28px;
        color: ${ colors.shadow };
    }

    &::placeholder {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.28px;
        color: ${ colors.shadow };
    }
`