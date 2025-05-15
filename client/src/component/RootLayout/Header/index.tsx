import { useContext, useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { styled } from "@mui/material/styles";
import {
  Toolbar,
  Typography,
  IconButton,
  AppBar as MuiAppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

//내부 import
import MenuPopupState from "./MenuPopupState";
import { MenuOpenContext } from "../../../context/MenuContext";
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

export default function Header({
  open,
  handleDrawerOpen,
}: {
  open: boolean;
  handleDrawerOpen: () => void;
}) {
  const location = useLocation();
  const { menuName, fomatMenuList } = useContext(MenuOpenContext);
  const [tabList, setTabList] = useState<string[]>([]);

  // const handleTabClose = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   //menuName을 클릭한 탭의 라우터를 제거한다.
  // };

  useEffect(() => {
    fomatMenuList();

    // 중복 값은 제거하고 새로운 배열로 생성
    const uniqueTabList = Array.from(
      new Set([...tabList, menuName[menuName.length - 1]])
    );
    setTabList(uniqueTabList);

    console.log("tabList", tabList);
  }, [location.pathname]);

  return (
    <>
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

          {/* =========TAB BAR=========== */}
          {/* <div
            style={{
              width: "50%",
              display: "flex",
              background: "red",
              flex: 1,
              marginBottom: "-19px",
            }}
          >
            {tabList &&
              tabList?.map((item, idx) => {
                return (
                  <NavLink
                    to={`/${item}`}
                    key={idx}
                    style={{
                      with: "15%",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "5px",
                      backgroundColor: "#fff",
                      color: "#000",
                    }}
                    className={({ isActive }: { isActive: boolean }) =>
                      isActive ? "active" : ""
                    }
                  >
                    <span>{item}</span>
                    <button onClick={handleTabClose}>x</button>
                  </NavLink>
                );
              })}
          </div> */}
        </Toolbar>
      </AppBar>
    </>
  );
}
