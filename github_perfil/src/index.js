import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>
);