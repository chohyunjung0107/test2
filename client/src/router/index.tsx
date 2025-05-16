import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../component/RootLayout";
import { lazy } from "react";
import Loadable from "../component/Loadable";

const Home = Loadable(lazy(() => import("../pages/Home")));
const User = Loadable(lazy(() => import("../pages/UserPage")));
const Test1 = Loadable(lazy(() => import("../pages/Testpage1")));
const Test2 = Loadable(lazy(() => import("../pages/Testpage2")));
const Test3 = Loadable(lazy(() => import("../pages/Testpage3")));
const Test4 = Loadable(lazy(() => import("../pages/Testpage4")));
const Test5 = Loadable(lazy(() => import("../pages/Testpage5")));
const Test6 = Loadable(lazy(() => import("../pages/Testpage6")));
const Test7 = Loadable(lazy(() => import("../pages/Testpage7")));
const Test8 = Loadable(lazy(() => import("../pages/Testpage8")));
const Test9 = Loadable(lazy(() => import("../pages/Testpage9")));

//popup
const UserPopup = Loadable(lazy(() => import("../component/Modal/UserPopup")));

const routerConfig = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "mes/system/user",
        element: <User />,
      },
      {
        path: "mes/system/test1",
        element: <Test1 />,
      },
      {
        path: "mes/system/test2",
        element: <Test2 />,
      },
      {
        path: "mes/system/test3",
        element: <Test3 />,
      },
      {
        path: "mes/system/test4",
        element: <Test4 />,
      },
      {
        path: "mes/system/test5",
        element: <Test5 />,
      },
      {
        path: "mes/system/test6",
        element: <Test6 />,
      },
      {
        path: "mes/system/test7",
        element: <Test7 />,
      },
      {
        path: "mes/system/test8",
        element: <Test8 />,
      },
      {
        path: "mes/system/test9",
        element: <Test9 />,
      },
    ],
  },
  {
    path: "/user/add" /** 사용자 추가 팝업 */,
    element: <UserPopup />,
  },
  {
    path: "/user/update" /** 사용자 수정 팝업 */,
    element: <UserPopup />,
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
