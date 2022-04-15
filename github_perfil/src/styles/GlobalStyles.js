import { createGlobalStyle } from 'styled-components';
import * as Variables from './Variables';

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
    font-family: ${Variables.FontFamily};
    background: ${Variables.PrimaryBgColor};
    color: ${Variables.LightColor};

    @media (max-width: 768px) {
      background: ${Variables.SecondaryBgColor};
    }

    a {
      text-decoration: none;
      color: ${Variables.LightColor};
    }

    ul {
      list-style: none;
    }

    button, input, textarea, select {
      outline: none;
      display: inline-block;
    }

    input, textarea {
      border: 1px solid ${Variables.BorderColor};
      color: ${Variables.MainFontColor};
      font-size: .875rem;
      padding: 5px 12px;
      border-radius: 6px;
      box-shadow: 0px 0px transparent;
      background: ${Variables.PrimaryBgColor};
      font-family: ${Variables.FontFamily};
    }

    button {
      cursor: pointer;
      border: none;
      font-family: ${Variables.FontFamily};
    }
  }
`;

export default GlobalStyle;
