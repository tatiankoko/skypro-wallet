import styled from "styled-components";

export const ErrorMessage = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0;
    text-align: left;
    color: ${ props => props.theme.errorText };
    padding: 7px;
`