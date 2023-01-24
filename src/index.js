import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import RoutesApp from "./routes/routes";
import GlobalStyle from "./styles/globalStyle/globalStyle";
import { themes } from "./styles/theme";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <ThemeProvider theme={themes}>
      <RoutesApp />
      <GlobalStyle />
    </ThemeProvider>
  </>
);
