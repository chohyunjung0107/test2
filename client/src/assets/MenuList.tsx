import type { ReactElement } from "react";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import StarBorder from "@mui/icons-material/StarBorder";

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
          },
          {
            title: "테스트1",
            path: "mes/system/test1",
            icon: <StarBorder />,
          },
          {
            title: "테스트2",
            path: "mes/system/test2",
            icon: <StarBorder />,
          },
          {
            title: "테스트3",
            path: "mes/system/test3",
            icon: <StarBorder />,
          },
          {
            title: "테스트4",
            path: "mes/system/test4",
            icon: <StarBorder />,
          },
          {
            title: "테스트5",
            path: "mes/system/test5",
            icon: <StarBorder />,
          },
          {
            title: "테스트6",
            path: "mes/system/test6",
            icon: <StarBorder />,
          },
          {
            title: "테스트7",
            path: "mes/system/test7",
            icon: <StarBorder />,
          },
          {
            title: "테스트8",
            path: "mes/system/test8",
            icon: <StarBorder />,
          },
          {
            title: "테스트9",
            path: "mes/system/test9",
            icon: <StarBorder />,
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

export const childMenu = [
  { title: "home", path: "/" },
  { title: "사용자 관리", path: "/mes/system/user" },
  { title: "테스트1", path: "/mes/system/test1" },
  { title: "테스트2", path: "/mes/system/test2" },
  { title: "테스트3", path: "/mes/system/test3" },
  { title: "테스트4", path: "/mes/system/test4" },
  { title: "테스트5", path: "/mes/system/test5" },
  { title: "테스트6", path: "/mes/system/test6" },
  { title: "테스트7", path: "/mes/system/test7" },
  { title: "테스트8", path: "/mes/system/test8" },
  { title: "테스트9", path: "/mes/system/test9" },
];
