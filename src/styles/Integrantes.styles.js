import styled from "styled-components"

export const PaginaIntegrantes = styled.main`
    section{
        padding-top: 7.625rem;
        padding-bottom: 12.5rem;
        min-height: calc(100vh - 13.875rem);
    }
    
    
    #texto{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: justify;
        margin-bottom: 4rem;
        gap: 2.25rem;

        p{
            max-width: 36.5rem;
            font-size: 1.75rem;
            font-family: "Poppins";
            font-weight: 300;
        }
    }

    #integrantes{
        display: flex;
        justify-content: space-evenly;
        font-family: "Poppins";

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h3{
            font-weight: 300;
            font-size: 1.75rem;
        }

        h4{
            font-size: 1rem;
            font-weight: 300;
        }

        img{
            border-radius: 15px;
            max-width: 9.813rem;
        }
    }

    @media (width <= 480px){
        section{
            padding-top: 4rem;
            padding-bottom: 4rem;
            min-height: 0;
        }

        #texto{
            margin-bottom: 2rem;

            p{
                max-width:25rem;
                font-size: 1.125rem;
                text-align: center;
            }
        }

        #integrantes{
            flex-direction: column;
            gap: 3rem;
        }
    }
`