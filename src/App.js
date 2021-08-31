import React from "react";
import Header from "./Head/Header";
import Body from "./Body/Body";
import "./App.css";
import theme from './theme';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Header />
      <Body />
      </ThemeProvider>
    </div>
  );
}

export default App;
