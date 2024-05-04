import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { theme } from "./Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <CssBaseline />
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>
);
