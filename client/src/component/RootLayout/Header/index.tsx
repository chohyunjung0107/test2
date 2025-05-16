import { useContext, useState, useEffect } from "react";

import { useLocation, Link, NavLink, useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import {
  Toolbar,
  Typography,
  IconButton,
  AppBar as MuiAppBar,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import HighlightOffOutlined from "@mui/icons-material/HighlightOffOutlined";

//내부 import
import MenuPopupState from "./MenuPopupState";
import { IsModeContext } from "../../../context/ModeContext";
import { childMenu } from "../../../assets/MenuList";

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
  const navigate = useNavigate();
  const { isDark, toggleMode } = useContext(IsModeContext);
  const [tabList, setTabList] = useState<{ name: string; router: string }[]>(
    []
  );

  const handleTabClose = (
    e: React.MouseEvent<HTMLButtonElement>,
    router: string
  ) => {
    e.preventDefault();

    //현재 라우터의 탭을 닫으면 이전 탭으로 이동
    const currentPath = location.pathname;
    if (currentPath === router) {
      navigate(tabList[tabList.length - 2].router);
    }

    //tabList에서 현재 탭을 삭제
    const newTabList = tabList?.filter((item) => item.router !== router);
    setTabList(newTabList);
  };

  const handleInTabPage = (pathname: string) => {
    //tabList에 이미 존재하는지 확인하고 존재하면 그냥 리턴해버림
    const isExist = tabList?.some((item) => item.router === pathname);
    if (isExist) return;

    //tabList의 length가 7개 이상이면 가장 오래된 탭을 삭제
    if (tabList.length >= 7) {
      const newTabList = tabList.slice(1);
      setTabList(newTabList);
    }

    const d = childMenu.filter((page) => {
      return page.path === pathname;
    });

    return setTabList((prev: any) => {
      return [...prev, { name: d[0].title, router: d[0].path }];
    });
  };

  useEffect(() => {
    handleInTabPage(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {/* AppBar */}
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Stack direction={"row"} alignItems="center" gap={2}>
            {!open && (
              <>
                <MenuPopupState />

                <Link href="/">
                  <Typography variant="h6" noWrap>
                    LOGO
                  </Typography>
                </Link>
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
            <div
              style={{
                width: "50%",
                display: "flex",
                flex: 1,
                marginBottom: "-19px",
              }}
            >
              {tabList &&
                tabList?.map((item) => {
                  return (
                    <NavLink
                      to={`${item.router}`}
                      key={item.router}
                      className={({ isActive }: { isActive: boolean }) =>
                        `tab-item ${isActive ? "active" : ""}`
                      }
                    >
                      <span className="tab-label">{item.name}</span>
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={(event) => {
                          event.preventDefault();
                          handleTabClose(event, item.router);
                        }}
                      >
                        <HighlightOffOutlined />
                      </IconButton>
                    </NavLink>
                  );
                })}
            </div>
          </Stack>

          <Stack>
            <IconButton
              color="inherit"
              aria-label="theme mode"
              onClick={toggleMode}
              edge="start"
              // sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              {isDark ? <NightlightIcon /> : <LightModeIcon />}
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
