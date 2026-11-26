import {colors} from "../../theme.js";
import styled from "styled-components";

export const TableWrapper = styled.div`
    width: 100%;
    background-color: ${ colors.fond };
`

export const TableContainer = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`

export const TableBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0 auto;
    background-color: ${colors.background};
    padding: 32px 0;
    border-radius: 30px;
    border: 0;
    box-shadow: 0 20px 67px -12px ${ colors.boxShadow };
    width: 100%;
    height: 100%;
`

export const TableTtl = styled.h2`
    padding: 0 32px;
    text-align: left;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    color: ${ colors.title };
`

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: ${ colors.background };
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0;

    tbody tr:first-child td {
        padding-top: 18px;
    }
`

export const TableHeadCell = styled.th`
    font-weight: 400;
    text-align: left;
    vertical-align: middle;
    padding: 8px 32px;
    border-bottom: 1px solid ${ colors.shadow };
`

export const SortButton = styled.button`
    padding: 0;
    border: 0;
    background: none;
    color: ${({$selected}) => $selected ? colors.title : colors.shadow};
    font: inherit;
    cursor: pointer;

    &:hover {
        color: ${ colors.title };
    }
`

export const TableCell = styled.td`
    vertical-align: middle;
    padding: 8px 32px;
    color: ${ colors.title };
`

export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: none;
    border: none;
    color: ${ colors.shadow };

    &:hover {
        color: ${ colors.title };
    }
`
