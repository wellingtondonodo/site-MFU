import styled from "styled-components"

export const PaginaMateriais = styled.main`
    min-height: 100vh;
    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

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

         .container-slider {

            display: flex;
            width: 100%;
            min-height: 100vh;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }

            .container-images {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 700px;
        }

            .slider {
            opacity: 0;
            transition: opacity .2s;
            position: absolute;
            width: 100%;
            border-radius: 10px;
        }

            .on {
            opacity: 1;
        }

            #prev-button, #next-button {
            width: 30px;
            height: 30px;
            border: none;
            background-color: transparent;
            cursor: pointer;
        }

            #prev-button img, #next-button img {
            width: 100%;
            height: 100%;
        }

            #prev-button {
            transform: rotate(180deg);
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