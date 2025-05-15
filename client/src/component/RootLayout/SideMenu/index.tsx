import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Drawer, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import MenuList from "../../../assets/MenuList";
import DrawerList from "../SideMenu/DraweList";
import MenuPopupState from "../Header/MenuPopupState";

const drawerWidth = 240;

// Drawer Header 스타일
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export default function SideMenu({
  open,
  handleDrawerClose,
}: {
  open: boolean;
  handleDrawerClose: () => void;
}) {
  const theme = useTheme();

  return (
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
          <Link href="/">
            <Typography variant="h6" noWrap>
              LOGO
            </Typography>
          </Link>
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
  );
}
