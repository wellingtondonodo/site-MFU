import styled from "styled-components"

export const PaginaMateriais = styled.main`
    min-height: 100vh;
    section{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding-top: 9.5rem;
        padding-bottom: 11.5rem;

        p{
            font-family: "Poppins";
            font-size: 1.75rem;
            font-weight: 300;
        }

        h2{
            text-align: center;
        }

        img{
            object-fit: contain;
        }

        #texto{
            div{
                margin-top: 3.5rem;
            }
        }
    }
`