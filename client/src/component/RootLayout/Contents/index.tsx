import { useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import BreadcrumbsComp from "./Breadcrumbs";
import { useLocation } from "react-router-dom";
import { MenuOpenContext } from "../../../context/MenuContext";

// Main 영역 스타일
const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
  //   shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean; drawerWidth: number }>(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: `-${drawerWidth}px`,
  height: "100vh",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 0,
    width: `calc(100% - ${drawerWidth}px)`,
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

export default function Contents({
  open,
  drawerWidth,
}: {
  open: boolean;
  drawerWidth: number;
}) {
  const location = useLocation();
  const { menuName, fomatMenuList } = useContext(MenuOpenContext);

  useEffect(() => {
    fomatMenuList();
  }, [location.pathname]);

  return (
    <Main open={open} drawerWidth={drawerWidth}>
      <DrawerHeader />
      <BreadcrumbsComp menuName={menuName} />
      <Outlet />
    </Main>
  );
}
