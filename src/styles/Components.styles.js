import styled from "styled-components"

export const Head = styled.header`
    nav{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background: #F0F0F0;
        height: 7.625rem;
        
        a{
            font-family: "Poppins";
            font-weight: 300;
            font-size: 1.25rem;
            color: #002500;
            text-decoration: none;

            img{
                width: 7.25rem;
                aspect-ratio: 1;
            }
        }

        .dentro{
            text-decoration: underline;
        }
    }

    .menu, .inativo{
        display: none;
    }

    @media (width <= 430px) {
        .menu, .menuActive{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-inline: 1rem;
            background: #FFFFFF;
            height: 5.75rem;

            #logo{
                width: 5.375rem;
            }

            button{
                background: none;
                border: none;
                height: 3rem;
                width: 3rem;
                border-radius: 50%;
                transition: .25s;
            }

            button:active{
                background: #E0E0E0;;
            }
        }

        .ativo{
            position: absolute;
            top: 0;
            width: 100vw;
            height: 28.125rem;
            background: #FFFFFF;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2.625rem;

            a{
                text-decoration: none;
                color: #FFFFFF;
                background: #253529;
                width: 13.875rem;
                height: 2.75rem;
                font-family: "Poppins";
                font-size: 1.25rem;
                font-weight: 300;
                display: flex;
                align-items: center;
                justify-content: center;
                border: solid 1px transparent;
                border-radius: 15px;
            }

            a:active{
                border: solid 1px #253529;
                background: #FFFFFF;
                color: #253529;
            }

            #fechar{
                background: none;
                border: none;
                position: absolute;
                top: 1.25rem;
                left: 1rem;
                font-family: "Prompt";
                font-weight: 300;
                font-size: 2.5rem;
                color: #E54B4B;
                width: 2.5rem;
                height: 2.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        nav{
            display: none;
        }
    }
`

export const Foot = styled.footer`
    height: 6.25rem;
    background: #253529;
    color: #F6F6F6;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    p{
        font-family: "Poppins";
        font-weight: 300;
        font-size: 1.5rem;
        color: #F6F6F6;
        background: #253529;
        width: 19.625rem;
    }

    ::before, ::after{
        content: '';
        position: absolute;
        width: calc(50% - 9rem);
        height: 1px;
        top: 50%;
        background: #F6F6F6;
        z-index: 0;
    }

    ::before{
        left: 0;
    }

    ::after{
        right: 0;
    }

    @media (width <= 430px){
        p{
            width: 16.375rem;
            font-size: 1.25rem;
        }

        ::before, ::after{
            
        }
    }
`