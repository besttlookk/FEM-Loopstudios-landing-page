import { createGlobalStyle } from "styled-components";
import media from "./media";

const GlobalStyle = createGlobalStyle`

  :root{
    --col-gray:hsl(0, 0%, 55%);
    --col-darkgray:hsl(0, 0%, 41%);
    --col-dark:hsl(0, 0%, 0%);
    --col-light:hsl(0, 0%, 100%);

    --font-primary: 'Alata', sans-serif;
    --font-secondary: 'Josefin Sans', sans-serif;

    --height-header: 10rem;
  }

  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  ::-webkit-scrollbar{
    width: 1.8rem;
  }

  ::-webkit-scrollbar-track{
    background-color: var(--col-dark);
  }

  ::-webkit-scrollbar-thumb{
    background-color: var(--col-gray);
    border-radius: 10rem;
    
    &:hover{
    background-color: var(--col-darkgray);

    }
  }

  body{
    min-height: 100vh;
    font: 18px;
    font-family: var(--font-primary);
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    font-family: var(--font-secondary);
  font-weight: 500;
  font-size: 1.8rem;
  }

  h1,h2,h3{
    font-family: var(--font-secondary);
    font-weight: 500;
    color: var(--col-dark);
  }


  p{
    font-size: 1.5rem;
    color: var(--col-darkgray);
    line-height: 1.7;

    ${media.laptop}{
      line-height: 1.4;

    }
  }

`;

export default GlobalStyle;
