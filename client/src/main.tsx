import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./App";
import "./index.css";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  // <React.StrictMode>
  <StyledEngineProvider injectFirst>
    <Demo />
  </StyledEngineProvider>
  // </React.StrictMode>
);
