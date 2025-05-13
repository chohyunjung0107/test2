import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../component/RootLayout";
import UserPage from "../pages/UserPage";

const routerConfig = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "mes/system/user",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
];

const MainRoutes = createBrowserRouter(routerConfig);

export default function RootRouters() {
  return <RouterProvider router={MainRoutes} />;
}
