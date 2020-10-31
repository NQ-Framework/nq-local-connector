import * as React from "react";
import { hot } from "react-hot-loader";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { customTheme } from "./theme/theme";
import LoginPage from "./components/pages/login";

const App = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <LoginPage />
  </ThemeProvider>
);

export default hot(module)(App);
