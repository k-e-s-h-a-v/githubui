import React from "react";
import Header from "./Head/Header";
import Body from "./Body/Body";
import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Body />
    </ThemeProvider>
  );
}

export default App;
