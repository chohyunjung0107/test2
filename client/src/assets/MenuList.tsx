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
    title: "대시보드",
    path: "/",
    icon: <InboxIcon />,
  },
  /** 모니터링 */
  {
    title: "모니터링",
    path: "/monitoring",
    icon: <SendIcon />,
    children: [
        {
          title: "태그 현황",
          path: "monitoring/tag",
          icon: <StarBorder />,
        },
        {
          title: "게이트웨이 현황",
          path: "monitoring/gw",
          icon: <StarBorder />,
        },
         {
          title: "지도 현황",
          path: "monitoring/map",
          icon: <StarBorder />,
        },
      ],
  },
  /** 이력 */
  {
    title: "이력",
    path: "/history",
    icon: <SendIcon />,
    children: [
        {
          title: "알람 이력",
          path: "history/alarm",
          icon: <StarBorder />,
        },
        {
          title: "자산 이동 이력",
          path: "history/asset-move",
          icon: <StarBorder />,
        },
         {
          title: "히트맵",
          path: "history/hitmap",
          icon: <StarBorder />,
        },
      ],
  },

  /** 시스템 설정 */
  {
    title: "시스템 설정",
    path: "/system",
    icon: <SendIcon />,
    children: [
        {
          title: "게이트웨이 관리",
          path: "system/Gw",
          icon: <StarBorder />,
        },
        {
          title: "지도 관리",
          path: "system/map",
          icon: <StarBorder />,
        },
        {
          title: "자산 관리",
          path: "system/asset",
          icon: <StarBorder />,
        },
      ],
  },
  /** 관리자 설정 */
   {
    title: "관리자 설정",
    path: "/admin",
    icon: <SendIcon />,
    children: [
        {
          title: "사용자 관리",
          path: "admin/user",
          icon: <StarBorder />,
        },
        {
          title: "권한 관리",
          path: "admin/auth",
          icon: <StarBorder />,
        },
      ],
  },
  /** 개인 설정 */
  {
    title: "개인설정",
    path: "/setting",
    icon: <DraftsIcon />,
    children: [
          {
            title: "알람 관리",
            path: "setting/alarm",
            icon: <StarBorder />,
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
