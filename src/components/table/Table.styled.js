import {colors} from "../../theme.js";
import styled from "styled-components";

export const TableWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 64px);
    background-color: ${ colors.fond };
`

export const TableContainer = styled.div`
    display: block;
    width: 100vw;
    min-height: calc(100vh - 64px);
    margin: 0 auto;
`