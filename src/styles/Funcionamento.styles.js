import styled from "styled-components"

export const PaginaFuncionamento = styled.main`
    section{
        padding-block: 5.75rem;
    }
    
    #parte1{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 11rem;
        
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.25rem;

            p{
                max-width: 37.875rem;
                font-family: "Poppins";
                text-align: justify;
                font-weight: 300;
                font-size: 1.75rem;
            }
        }

        img{
            object-fit: contain;
            width: 34.5rem;
        }
    }

    #parte2{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.75rem;
        margin-bottom: 4rem;

        h3{
            font-size: 1.125rem;
            font-weight: 300;
            font-family: "Poppins";
            text-align: center;
        }

        img{
            width: 19.375rem;
        }
    }

    #parte3{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }
`