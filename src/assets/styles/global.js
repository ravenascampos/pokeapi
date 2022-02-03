import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
}

body {
    background: linear-gradient(to top right, #be93c5, #7bc6cc);
    background-repeat: no-repeat;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    background-size: 300% 300%;
    animation: colors 10s ease infinite;
}

@keyframes colors {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.react-modal-overlay {
background: rgba(0, 0, 0, 0.5);
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;

}
.react-modal-content {
width: 100%;
max-width: 36rem;
height: auto;
background: #ffffff;
padding: 3rem;
position: relative;
border-radius: 0.5rem;
outline: none;
border: 2px solid #f2bd1d;
}  


`;
