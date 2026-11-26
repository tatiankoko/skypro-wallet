import styled from "styled-components";
import {colors} from "../../theme.js";

export const MyCostsWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 64px);
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ${ colors.fond };

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const MyCostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    height: 100%;
    max-width: 1260px;
    padding: 36px 10px;
    margin: 0 auto 36px;
`

export const CostsTitle = styled.h2`
    text-align: left;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    color: ${ colors.title };
`

export const CostsBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    gap: 34px;
    width: 100%;
`