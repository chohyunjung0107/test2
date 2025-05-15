import { useContext } from "react";
import { Box, CssBaseline } from "@mui/material";

//내부 import
import Header from "./Header/index";
import SideMenu from "./SideMenu/index";
import Contents from "./Contents/index";
import { MenuOpenContext } from "../../context/MenuContext";

export default function RootLayout() {
  const { openMenu, setOpenMenu, drawerWidth } = useContext(MenuOpenContext);

  const handleDrawerOpen = () => {
    setOpenMenu(true);
  };

  const handleDrawerClose = () => {
    setOpenMenu(false);
  };

  return (
    // <PrivateRoute>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Header */}
      <Header open={openMenu} handleDrawerOpen={handleDrawerOpen} />

      {/* Side-menu */}
      <SideMenu open={openMenu} handleDrawerClose={handleDrawerClose} />

      {/* Content */}
      <Contents open={openMenu} drawerWidth={drawerWidth} />
    </Box>
    // </PrivateRoute>
  );
}
