//내부 import
import RootRouters from "./router";
import { MenuOpenProvider } from "./context/MenuContext";

export default function App() {
  return (
    <MenuOpenProvider>
      <RootRouters />
    </MenuOpenProvider>
  );
}
