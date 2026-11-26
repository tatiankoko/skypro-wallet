import styled from "styled-components";
import {colors} from "../theme.js";

export const FormInput = styled.input`
    width: 100%;
    min-width: 100%;
    border-radius: 6px;
    border: 1px solid ${ ({$error}) => $error ? colors.alarmBorder : colors.successBorder };
    outline: none;
    padding: 12px;
    background-color: ${ ({$error}) => $error ? colors.alarmBg : colors.successBg };
    
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: ${ colors.title };

    &:placeholder-shown {
        border: 1px solid ${ ({$error}) => $error ? colors.alarmBorder : colors.shadow };
        background-color: ${ ({$error}) => $error ? colors.alarmBg : colors.background };
    }
    
    &::-moz-placeholder {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: ${ ({$error}) => $error ? colors.title : colors.shadow };

        &::after {
            content: " *";
            color: red;
            font-weight: bold;
        }
    }

    &::placeholder {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: ${ ({$error}) => $error ? colors.title : colors.shadow };

        &::after {
            content: " *";
            color: red;
            font-weight: bold;
        }
    }
`