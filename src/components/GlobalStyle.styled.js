import {createGlobalStyle} from "styled-components";
import {colors} from "../theme.js";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        box-sizing: border-box;
    }

    a,
    a:visited {
        font-family: "Montserrat", Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;
    }

    button {
        font-family: "Montserrat", Arial, Helvetica, sans-serif;
        cursor: pointer;
        outline: none;
    }

    ul li {
        list-style: none;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        font-family: "Montserrat", Arial, Helvetica, sans-serif;
        color: ${ colors.shadow };
    }
`