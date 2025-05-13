import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  Typography,
  IconButton,
  AppBar as MuiAppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import MenuList from "../../assets/MenuList";
import DrawerList from "./DraweList";
import MenuPopupState from "../MenuPopupState";
import { Outlet } from "react-router-dom";

import PrivateRoute from "../../router/PrivateRoute";

const drawerWidth = 240;

// AppBar 스타일 확장
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// Main 영역 스타일
const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: `-${drawerWidth}px`,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// Drawer Header 스타일
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export default function RootLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <PrivateRoute>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* AppBar */}
        <AppBar position="fixed" open={open}>
          <Toolbar sx={{ display: "flex", gap: 2 }}>
            {!open && (
              <>
                <MenuPopupState />
                <Typography variant="h6" noWrap>
                  LOGO
                </Typography>
              </>
            )}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <MenuPopupState />
              <Typography variant="h6" noWrap>
                LOGO
              </Typography>
            </Box>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <DrawerList MenuList={MenuList} />
        </Drawer>

        {/* Main Content */}
        <Main open={open}>
          <DrawerHeader />
          <Outlet />
        </Main>
      </Box>
    </PrivateRoute>
  );
}
