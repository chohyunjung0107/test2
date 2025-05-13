import type { ReactElement } from "react";

import { lazy } from "react";
import Loadable from "../component/Loadable";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import StarBorder from "@mui/icons-material/StarBorder";

import RootLayout from "../component/RootLayout";

const UserPage = Loadable(lazy(() => import("../pages/UserPage")));

// 메뉴 항목 타입 정의
export interface TMenuItem {
  title: string;
  path: string;
  icon: ReactElement;
  element?: ReactElement;
  children?: TMenuItem[];
}

// 메뉴 데이터
const MenuList: TMenuItem[] = [
  {
    title: "MES",
    path: "/mes",
    icon: <InboxIcon />,
    element: <RootLayout />,
    children: [
      {
        title: "SYSTEM",
        path: "/system",
        icon: <DraftsIcon />,
        children: [
          {
            title: "사용자 관리",
            path: "/mes/system/user",
            icon: <StarBorder />,
            element: <UserPage />,
          },
          {
            title: "권한한 관리",
            path: "/mes/system/auth",
            icon: <StarBorder />,
            element: <div>권한 관리</div>,
          },
        ],
      },
    ],
  },
  {
    title: "메뉴2",
    path: "/menu2",
    icon: <SendIcon />,
  },
  {
    title: "메뉴3",
    path: "/menu3",
    icon: <DraftsIcon />,
    children: [
      {
        title: "메뉴3-1",
        path: "/menu1/menu1-1",
        icon: <DraftsIcon />,
        children: [
          {
            title: "메뉴3-1-1",
            path: "/menu1/menu1-1/menu1-1-1",
            icon: <StarBorder />,
          },
        ],
      },
    ],
  },
];

export default MenuList;
