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

    @media (max-width: 768px) {
      background: #161b21;
    }

    a {
      text-decoration: none;
      color: #ffffff;
    }

    ul {
      list-style: none;
    }

    button, input, textarea, select {
      outline: none;
      display: inline-block;
    }

    input, textarea {
      border: 1px solid #30363d;
      color: #c9d1d9;
      font-size: .875rem;
      padding: 5px 12px;
      border-radius: 6px;
      box-shadow: 0px 0px transparent;
      background: #0d1017;
      font-family: 'Roboto', sans-serif;
    }

    button {
      cursor: pointer;
      border: none;
      font-family: 'Roboto', sans-serif;
    }
  }
`;

export default GlobalStyle;
