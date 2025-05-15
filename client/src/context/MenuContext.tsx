import React, { createContext, useState } from "react";
import type { ReactNode } from "react";
import MenuList from "../assets/MenuList";

interface MenuOpenContextType {
  openMenu: boolean;
  toggleMenu: () => void;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  drawerWidth: number;
  menuName: string[];
  fomatMenuList: () => void;
}

/**
 * MenuOpenContext
 * @description 사이드 메뉴의 열림/닫힘 상태와 관련된 정보를 제공하는 Context
 * @type {MenuOpenContextType}
 * @property {boolean} openMenu - 사이드 메뉴의 열림/닫힘 상태
 * @property {function} toggleMenu - 사이드 메뉴의 열림/닫힘 상태를 토글하는 함수
 * @property {function} setOpenMenu - 사이드 메뉴의 열림/닫힘 상태를 설정하는 함수
 * @property {number} drawerWidth - 사이드 메뉴의 너비
 * @property {string[]} menuName - 현재 라우터에 해당하는 메뉴의 이름 배열
 * @property {function} fomatMenuList - 현재 라우터에 해당하는 메뉴의 이름을 업데이트하는 함수
 */
export const MenuOpenContext = createContext<MenuOpenContextType>({
  openMenu: true,
  toggleMenu: () => {},
  setOpenMenu: () => {},
  drawerWidth: 240,
  menuName: [],
  fomatMenuList: () => {},
});

export const MenuOpenProvider = ({ children }: { children: ReactNode }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const [menuName, setMenuName] = React.useState<string[]>([]);
  const drawerWidth = 240;

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const fomatMenuList = () => {
    const path = location.pathname;
    const pathArray = path.split("/").filter((item) => item !== "");
    const menuList: string[] = [];

    const findMenu = (menuItems: typeof MenuList, pathArray: string[]) => {
      for (const item of menuItems) {
        if (item.path === `/${pathArray.join("/")}`) {
          menuList.push(item.title);
          return true;
        }
        if (item.children) {
          if (findMenu(item.children, pathArray)) {
            menuList.unshift(item.title);
            return true;
          }
        }
      }
      return false;
    };

    findMenu(MenuList, pathArray);

    return setMenuName(pathArray);
  };

  return (
    <MenuOpenContext.Provider
      value={{
        openMenu,
        toggleMenu,
        setOpenMenu,
        drawerWidth,
        menuName,
        fomatMenuList,
      }}
    >
      {children}
    </MenuOpenContext.Provider>
  );
};
