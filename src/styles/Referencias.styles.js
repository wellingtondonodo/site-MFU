import styled from "styled-components"

export const PaginaReferencias = styled.main`
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-block: 4.5rem;

        h2{
            text-align: center;
            width: 36.875rem;
            margin-bottom: 5rem;
        }

        a{
            text-decoration: none;
            color: #002500;
            font-family: "Poppins";
            font-size: 1.5rem;
            font-weight: 300;
        }

        a:hover{
            text-decoration: underline;
        }

        span{
            font-weight: bold;
        }

        #a1, #a2, #a3, #a4{
            display: flex;
            flex-direction: column;
            align-items: center;

            img{
                width: 37.5rem;
            }
        }
    }
    
    
`