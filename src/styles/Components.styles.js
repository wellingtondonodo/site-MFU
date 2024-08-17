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
        z-index: 1;
        margin: 0 50px;
    }

    ::before, ::after{
        content: '';
        position: absolute;
        width: calc(50% - 11rem);
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
`