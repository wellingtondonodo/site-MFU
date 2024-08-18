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

    .botao{
        font-size: 1.25rem;
        font-weight: 300;
        font-family: "Poppins";
        text-decoration: none;
        color: #ffffff;
        background: #002500;
        width: 14rem;
        height: 5.5rem;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 2px transparent;
        transition: .25s;
    }

    .botao:hover{
        border: solid 2px #002500;
        color: #002500;
        background: #ffffff;
    }

    @media (width <= 480px) {
        main{
            overflow-x: hidden;
        }
    }
`