import styled from "styled-components";
import {colors} from "../../theme.js";

export const AuthWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 64px);
    background-color: ${ colors.fond };
`

export const AuthContainer = styled.div`
    display: block;
    width: 100vw;
    min-height: calc(100vh - 64px);
    margin: 0 auto;
`

export const AuthInputWrapper = styled.div`
    position: relative;
    width: 100%;
`

export const AuthErrorPlaceholder = styled.span`
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    color: ${ colors.title };
    font-size: 12px;
    line-height: 15px;
    pointer-events: none;
`

export const AuthRequiredMark = styled.span`
    color: red;
`

export const ModalFormGroup = styled.div`
    text-align: center;

    p, a {
        color: ${ colors.shadow };
        font-size: 12px;
        font-weight: 400;
        line-height: 150%;
    }

    a {
        text-decoration: underline;
    }
`

export const ErrorNotification = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0;
    text-align: center;
    color: ${ colors.alarmText };
`