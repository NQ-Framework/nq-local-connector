import * as React from "react";
import { hot } from "react-hot-loader";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { customTheme } from "./theme/theme";
import { MemoryRouter } from "react-router-dom"
import MainRouter from "./components/pages/mainRouter";

const App = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <MemoryRouter>
      <MainRouter></MainRouter>
    </MemoryRouter>
  </ThemeProvider>
);

export default hot(module)(App);
