import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h2{
        font-family: "Poppins", sans-serif;
        font-size: 1.875rem;
        font-weight: 500;
    }
`