import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark-blue: #161722;
    --very-dark-gray: #1D1E2A;
    --gray: #CACDE8;
    --white: #F0F0F0;
    --gold: #FDD710;
     --cyan: #55d8f4; 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Rubik', sans-serif;
    background-color: var(--dark-blue);
    color: var(--white);
  }
`;
