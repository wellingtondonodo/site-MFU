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

    @media (width <= 480px){
        section{
            flex-direction: column;
            padding-top: 4rem;
            padding-bottom: 4rem;

            p{
                text-align: center;
                font-size: 1.5rem;
                max-width: 23.5rem;
                margin-bottom: .5rem;
            }

            img{
                max-width: 26.5rem;
                margin-top: 1.75rem;
            }

            #texto{
                div{
                    margin-top: 2rem;
                }
            }
        }
    }
`