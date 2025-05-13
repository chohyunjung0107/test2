import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import type { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

//내부 import
import RootLayout from "./component/RootLayout";
import RootRouters from "./router";

export default function App() {
  return <RootRouters />;
}
