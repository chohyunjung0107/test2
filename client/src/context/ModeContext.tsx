import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface IsModeContextType {
  isDark: boolean;
  toggleMode: () => void;
}

export const IsModeContext = createContext<IsModeContextType>({
  isDark: true,
  toggleMode: () => {},
});

export const IsModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(true);

  const toggleMode = () => {
    setIsDark(!isDark);
  };

  return (
    <IsModeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </IsModeContext.Provider>
  );
};
