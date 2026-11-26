import styled from "styled-components";
import {colors} from "../../theme.js";
import {TableBlock, TableContainer, TableTtl, TableWrapper} from "../table/Table.styled.js";

export const CalendarWrapper = styled(TableWrapper)`
    width: 379px;
    flex-shrink: 0;
`

export const CalendarContainer = styled(TableContainer)``

export const CalendarBlock = styled(TableBlock)``

export const CalendarTtl = styled(TableTtl)``

export const CalendarWeekdays = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 0 32px;
    border-bottom: 1px solid ${ colors.shadow };
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0;
    color: ${ colors.shadow };

    span {
        text-align: center;
        padding: 8px 0;
    }
`

export const CalendarScroll = styled.div`
    max-height: 320px;
    overflow-y: auto;
    padding: 0 32px;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0;

    .rdp-root,
    .rdp-month {
        width: 100%;
    }

    .rdp-months {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .rdp-month_caption {
        display: flex;
        justify-content: flex-start;
        padding-bottom: 12px;
    }

    .rdp-caption_label {
        font-weight: 600;
        font-size: 16px;
        color: ${ colors.title };
        text-transform: capitalize;
    }

    .rdp-month_grid {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
    }

    .rdp-weekdays {
        display: none;
    }

    .rdp-day {
        padding: 2.5px 0;
        text-align: center;
    }

    .rdp-day_button {
        width: 40px;
        height: 40px;
        border-radius: 60px;
        background-color: ${ colors.fond };
        border: none;
        font: inherit;
        color: ${ colors.title };
        cursor: pointer;
    }

    .rdp-today .rdp-day_button {
        font-weight: 600;
    }

    .rdp-selected .rdp-day_button,
    .rdp-range_start .rdp-day_button,
    .rdp-range_end .rdp-day_button,
    .rdp-range_middle .rdp-day_button {
        background-color: ${ colors.successBg };
        color: ${ colors.successBorder };
    }
`
