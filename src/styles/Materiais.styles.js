import styled from "styled-components"

export const PaginaMateriais = styled.main`
    min-height: 100vh;
    div{
       display: flex;
       
        align-items: center;  
        justify-content: center;
        height: 100vh;

        p{
            font-family: "Poppins";
            font-size: 1.75rem;
            font-weight: 300;
        }

        h2 {
            margin-top: 6rem;
        }

        img{
            object-fit: contain;
            height: 25rem;
        }
        

        .container-slider {
            display: flex;
            flex-direction: row; 
            align-items: center;
            justify-content: center;
            width: 100%;
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
            background-color: transparent;
            border: none;
            cursor: pointer;
            position: absolute;
            top: 75%; 
            transform: translateY(-75%); 

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
    
    }
        .container-text {
            h3{
                font-size: 1.5rem;
                font-family: "Poppins";
            }  
            
        }
       

 `  