import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./components/Router";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
