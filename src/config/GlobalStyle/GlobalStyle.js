import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root {
  /* font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  --rounded-10: 1rem;
  --padding-2-1_5: 2rem 1.5rem;
 }



 @media (prefers-color-scheme: light) {
  /* :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  } */
 }
  *,*::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body, input {
        font-size: 1.8rem;
        line-height: 1.7;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-weight: 400;
    }

    


    h1, h2, h3, h4, h5, h6 {
        line-height: 1.2;
        font-family: "Dosis", sans-serif;
    }

    button {
        box-shadow: none;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.6rem;
    }

    img {
        width: 100%;
        height: auto;
    }

    a {
        text-decoration: none;
    }
`;
