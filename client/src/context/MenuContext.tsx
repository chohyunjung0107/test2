// src/contexts/MenuOpenContext.tsx
import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type OpenMap = Record<string, boolean>;

interface MenuOpenContextType {
  openMap: OpenMap;
  toggleMenu: (key: string) => void;
  setOpenMap: React.Dispatch<React.SetStateAction<OpenMap>>;
}

const MenuOpenContext = createContext<MenuOpenContextType | undefined>(
  undefined
);

export const useMenuOpen = () => {
  const context = useContext(MenuOpenContext);
  if (!context) {
    throw new Error("useMenuOpen must be used within a MenuOpenProvider");
  }
  return context;
};

export const MenuOpenProvider = ({ children }: { children: ReactNode }) => {
  const [openMap, setOpenMap] = useState<OpenMap>({});

  const toggleMenu = (key: string) => {
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <MenuOpenContext.Provider value={{ openMap, toggleMenu, setOpenMap }}>
      {children}
    </MenuOpenContext.Provider>
  );
};
