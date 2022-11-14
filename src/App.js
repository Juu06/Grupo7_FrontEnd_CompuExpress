import "./App.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppBar from "./componentes/AppBar";
import Tabs from "./componentes/Tabs";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <AppBar />
        <Tabs />
      </React.Fragment>
    </div>
  );
}

export default App;
