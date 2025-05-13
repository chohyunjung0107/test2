import type { ReactElement } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import StarBorder from "@mui/icons-material/StarBorder";

// 메뉴 항목 타입 정의
export interface TMenuItem {
  title: string;
  router: string;
  icon: ReactElement;
  children?: TMenuItem[];
}

// 메뉴 데이터
const MenuList: TMenuItem[] = [
  {
    title: "MES",
    router: "/menu1",
    icon: <InboxIcon />,
    children: [
      {
        title: "SYSTEM",
        router: "/menu1/menu1-1",
        icon: <DraftsIcon />,
        children: [
          {
            title: "사용자 관리",
            router: "/menu1/menu1-1/menu1-1-1",
            icon: <StarBorder />,
          },
          {
            title: "권한한 관리",
            router: "/menu1/menu1-1/menu1-1-2",
            icon: <StarBorder />,
          },
        ],
      },
    ],
  },
  {
    title: "메뉴2",
    router: "/menu2",
    icon: <SendIcon />,
  },
  {
    title: "메뉴3",
    router: "/menu3",
    icon: <DraftsIcon />,
    children: [
      {
        title: "메뉴3-1",
        router: "/menu1/menu1-1",
        icon: <DraftsIcon />,
        children: [
          {
            title: "메뉴3-1-1",
            router: "/menu1/menu1-1/menu1-1-1",
            icon: <StarBorder />,
          },
        ],
      },
    ],
  },
];

export default MenuList;
