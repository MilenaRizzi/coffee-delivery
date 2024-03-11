import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";
import { Router } from "./Router";

function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
  );
}

export default App;
