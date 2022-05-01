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
    &::-webkit-scrollbar {
      width: 16px;
    }

    &::-webkit-scrollbar-track {
       background: #424242;
    }

    &::-webkit-scrollbar-thumb {
      background: #686868;
      border-left: 2px solid #424242;
      border-right: 2px solid #424242;
    }

    font-family: ${({ theme }) => theme.fonts.Roboto};
    background: ${({ theme }) => theme.colors.PrimaryBgColor};
    color: ${({ theme }) => theme.colors.LightColor};

    @media (max-width: 768px) {
      background: ${({ theme }) => theme.colors.SecondaryBgColor};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.LightColor};
    }

    ul {
      list-style: none;
    }

    button, input, textarea, select {
      outline: none;
      display: inline-block;
    }

    input, textarea {
      border: 1px solid ${({ theme }) => theme.colors.BorderColor};
      color: ${({ theme }) => theme.colors.MainFontColor};
      font-size: .875rem;
      padding: 5px 12px;
      border-radius: 6px;
      box-shadow: 0px 0px transparent;
      background: ${({ theme }) => theme.colors.PrimaryBgColor};
      font-family: ${({ theme }) => theme.fonts.Roboto};
    }

    button {
      cursor: pointer;
      border: none;
      font-family: ${({ theme }) => theme.fonts.Roboto};
    }
  }
`;

export default GlobalStyle;
