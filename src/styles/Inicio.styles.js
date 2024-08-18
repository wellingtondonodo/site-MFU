import styled from "styled-components"
import FundoBanana from "/FundoBanana.png"

export const PaginaInicio = styled.main`
    #boas-vindas{
        text-align: center;
        background: url(${FundoBanana}) no-repeat center;
        background-size: cover;
        padding-top: 12rem;
        padding-bottom: 13.5rem;

        h1{
            font-family: "Prompt", sans-serif;
            font-size: 3.75rem;
            font-weight: 900;
            color: #ffffff;
        }

        span{
            color: #8AA88A;
        }

        h3{
            font-size: 1.875rem;
            font-family: "Poppins";
            color: #ffffff;
        }
    }

    h2{
        text-align: center;
        vertical-align: center;
    }

    #pergunta{
        margin-block: 2.25rem;
    }

    #container{
        display: flex;
        justify-content: center;
        height: 15.375rem;
        margin-bottom: 8.125rem;
        
        #esquerda{
            background: #253529;
            width: 30.125rem;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);

            p{
                max-width: 27rem;
                font-size: 2rem;
                font-family: "Poppins";
                font-weight: 300;
                text-align: justify;
                color: #ffffff;
            }
        }

        #direita{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 44.5rem;
            box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.25);

            p{
                font-size: 2rem;
                font-family: "Poppins";
                font-weight: 300;
            }

            div{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }

    #texto1{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 7rem;

        p{
            font-family: "Poppins";
            font-size: 1.5rem;
            max-width: 47.375rem;
            font-weight: 300;
        }

        div{
            display: flex;
            flex-direction: column;
            gap: 2.75rem;
        }
    }

    .textos2{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        margin-bottom: 6.25rem;
        
        p{
            font-family: "Poppins";
            font-size: 1.5rem;
            max-width: 45.25rem;
            font-weight: 300;
        }
    }

    #pedido{
        margin-bottom: 8rem;
    }

    #links{
        display: flex;
        justify-content: center;
        margin-top: 3.75rem;
        margin-bottom: 6.25rem;
        gap: 8.5rem;
    }

    @media (width <= 430px){
        #boas-vindas{
            padding-top: 6.5rem;
            padding-bottom: 11rem;
        }

        #pergunta{
            margin-block: 3.125rem;
        }

        #container{
            flex-direction: column;
            align-items: center;
            height: 53.625rem;
            margin-bottom: 3.75rem;

            #esquerda{
                max-width: 24.125rem; 
                height: 15.375rem;
                box-shadow: 4px 0px 4px 0px rgba(0,0,0,0.25);

                p{
                    max-width: 21.125rem;
                }
            }

            #direita{
                flex-direction: column;
                max-width: 24.125rem;
                height: 38.375rem;
            }
        }

        #texto1{
            flex-direction: column-reverse;
            gap: 1.75rem;
            margin-bottom: 6.5rem;

            p{
                max-width: 22rem;
                text-align: justify;
                font-size: 1.125rem;
            }

            div{
                gap: 2rem;
            }

            img{
                width: 17.75rem;
            }
        }

        .textos2{
            gap: 2rem;

            p{
                max-width: 22rem;
                text-align: justify;
                font-size: 1.125rem;
            }
        }

        #pedido{
            margin-bottom: 6rem;
            h2{
                max-width: 16rem;
            }
        }

        #links{
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
        }
    }
`