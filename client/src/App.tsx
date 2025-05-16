import { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import type { Theme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

//내부 import
import RootRouters from "./router";
import { MenuOpenProvider } from "./context/MenuContext";
import { IsModeProvider, IsModeContext } from "./context/ModeContext";

export default function App() {
  return (
    <IsModeProvider>
      <InnerApp />
    </IsModeProvider>
  );
}

function InnerApp() {
  const { isDark } = useContext(IsModeContext);

  const darkTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: () => ({
          "html, body, #root": {
            margin: 0,
            padding: 0,
            fontSize: "1rem",
            // [theme.breakpoints.up("sm")]: {
            //   fontSize: "10px",
            // },
            // [theme.breakpoints.up("md")]: {
            //   fontSize: "13px",
            // },
            // [theme.breakpoints.up("lg")]: {
            //   fontSize: "1rem",
            // },
          },
          a: {
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          },
          "*": {
            boxSizing: "border-box",
          },
        }),
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MenuOpenProvider>
        <RootRouters />
      </MenuOpenProvider>
    </ThemeProvider>
  );
}
