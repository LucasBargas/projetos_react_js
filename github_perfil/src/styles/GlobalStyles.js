import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 375px) {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #0d1017;
    color: #ffffff;

    a {
      text-decoration: none;
      color: #ffffff;
    }

    ul {
      list-style: none;
    }

    button, input, textarea {
      outline: none;
      display: inline-block;
    }

    button {
      cursor: pointer;
      border: none;
    }
  }
`;

export default GlobalStyle;
