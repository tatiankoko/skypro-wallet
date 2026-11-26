import styled from "styled-components";
import {colors} from "../../theme.js";
import {TableBlock, TableTtl, TableWrapper} from "../table/Table.styled.js";
import {FormInput} from "../Input.styled.js";

export const NewCostWrapper = styled(TableWrapper)`
    width: 379px;
    flex-shrink: 0;
`

export const NewCostBlock = styled(TableBlock)`
    padding: 32px;
`

export const NewCostTtl = styled(TableTtl)`
    padding: 0;
`

export const NewCostForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
`

export const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const DateInput = styled(FormInput)`
    border: 1px solid ${ ({$error}) => $error ? colors.alarmBorder : colors.successBorder };
    background-color: ${ ({$error}) => $error ? colors.alarmBg : colors.successBg };
`

export const SumInput = styled(FormInput)`
    -moz-appearance: textfield;
    appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export const FieldLabel = styled.label`
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0;
    color: ${ colors.title };

    &::after {
        content: ${ ({$error}) => $error ? '" *"' : '""' };
        color: ${ colors.alarmBorder };
    }
`

export const CategoryGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

export const CategoryToggle = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 20px;
    border-radius: 30px;
    background-color: ${ ({$active}) => $active ? colors.successBg : colors.fond };
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: ${ ({$active}) => $active ? colors.successBorder : colors.title };
    cursor: pointer;

    input {
        position: absolute;
        width: 1px;
        height: 1px;
        opacity: 0;
    }
`
