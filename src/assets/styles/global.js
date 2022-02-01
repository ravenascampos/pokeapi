import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
}

body {
    background: linear-gradient(45deg, #be93c5, #7bc6cc);
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

`;