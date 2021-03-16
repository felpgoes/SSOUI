import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: 100%;
}


  body{
    background: #FFF;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    min-height: 100%;
    overflow: hidden;
  }

  html, body, #root {
    height: 100%;
  }


  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }


  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }


  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
