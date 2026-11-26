import styled from "styled-components";
import {colors} from "../../theme.js";
import {NewCostBlock, NewCostTtl, NewCostWrapper} from "../newCost/NewCost.styled.js";
import {TableContainer} from "../table/Table.styled.js";

export const DiagramWrapper = styled(NewCostWrapper)`
    width: auto;
    flex: 1;
`

export const DiagramContainer = styled(TableContainer)``

export const DiagramBlock = styled(NewCostBlock)``

export const DiagramTtl = styled(NewCostTtl)``

export const DiagramHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const DiagramPeriod = styled.p`
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0;
    color: ${ colors.shadow };

    span {
        font-weight: 600;
    }
`

export const DiagramChart = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    flex: 1;
`

export const ChartColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    flex: 0 1 94px;
    min-width: 0;
`

export const ChartSum = styled.span`
    position: absolute;
    bottom: calc(${({$percent}) => $percent}% + 12px);
    left: 50%;
    transform: translateX(-50%);
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    white-space: nowrap;
    color: ${colors.title};
`

export const ChartBarArea = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* 16px сумма + 12px зазор над самым высоким столбцом */
    padding-top: 28px;
`

export const ChartBarZone = styled.div`
    flex: 1;
    width: 100%;
    position: relative;
`

export const ChartBar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 12px;
    height: ${ ({$percent}) => $percent }%;
    background-color: ${ ({$color}) => $color };
`

export const ChartLabel = styled.span`
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0;
    color: ${ colors.title };
`
