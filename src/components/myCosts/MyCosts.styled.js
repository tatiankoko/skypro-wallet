import styled from "styled-components";
import {colors} from "../../theme.js";

export const MyCostsWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 64px);
    overflow: hidden;
    background-color: ${ colors.fond };
`

export const MyCostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: 1260px;
    /*min-height: calc(100vh - 64px);*/
    margin: 0 auto;

    padding: 36px 10px;

    @media screen and (max-width: 495px) {
        width: 100%;
        padding: 0 0 0 16px;
    }
`

export const CostsTitle = styled.h2`
    text-align: left;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    /*margin-bottom: 20px;*/
    color: ${ colors.title };
`

export const CostsBlock = styled.div`
    display: flex;
    flex-direction: row;
    gap: 34px;
    width: 100%;
`