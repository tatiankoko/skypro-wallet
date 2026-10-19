import styled from "styled-components";
import {colors} from "../theme.js";

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: calc(100vh - 64px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ModalBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0 auto;
    background-color: ${colors.background};
    max-width: 379px;
    width: 100%;
    padding: 32px;
    border-radius: 30px;
    border: 0;
    box-shadow: 0 20px 67px -12px ${ colors.boxShadow };

    @media screen and (max-width: 375px) {
        max-width: 368px;
        width: 100%;
        padding: 0 16px;
        border-radius: 0;
        border: none;
        box-shadow: none;
    }
`

export const ModalTtl = styled.h2`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    /*margin-bottom: 20px;*/
    color: ${ colors.title };
`

export const ModalForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`
