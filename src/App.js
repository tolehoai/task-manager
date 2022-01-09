import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: red[500],
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {" "}
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
