import styled from "styled-components"

export const PaginaMateriais = styled.main`
    
    min-height: 100vh;
    section{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding-top: 9.5rem;
        padding-bottom: 11.5rem;
        height: 100vh;

        p{
            font-family: "Poppins";
            font-size: 1.75rem;
            font-weight: 300;
        }
        h2{
            text-align: center;
             margin-top: 6rem;
        }
        img{
            object-fit: contain;
            height: 25rem;
           
        }

        #texto{
            div{
                margin-top: 3.5rem;
            }
        }
        
        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding-bottom: 3rem;
        }
 

        h2 {
            font-size: 2rem;
            margin-bottom: 20px;
        }

        p {
            font-size: 1.2rem;
            max-width: 600px; 
            margin-bottom: 20px;
        }

        img {
            width: 300px; 
            height: auto;
            margin-bottom: 20px;
        }

        #prev-button {
            left: 21rem; 
        } 

        #next-button {
            right: 20rem; 
        }

        #prev-button img, #next-button img {
            width: 40px;
            height: 40px;
        }

        #prev-button, #next-button {
            background-color: transparent;
            border: none;
            cursor: pointer;
            position: absolute;
            top: 75%; 
            transform: translateY(-75%); 
        }

    }

     @media (width <= 480px){
        section{
            p{
                text-align: center;
                font-size: 1.2rem;
                max-width: 26rem;
                margin-bottom: .5rem;
            }
            
      

        }
    }
       
 `  