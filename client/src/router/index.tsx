import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from '@component/RootLayout';
import { lazy } from 'react';
import Loadable from '@component/Loadable';

const Home = Loadable(lazy(() => import('@pages/Home')));

const Login = Loadable(lazy(() => import('@pages/Login')));

//모니터링
const TagMonitoring = Loadable(lazy(() => import('@pages/monitoring/Tag')));
const GwMonitoring = Loadable(lazy(() => import('@pages/monitoring/Gw')));
const MapMonitoring = Loadable(lazy(() => import('@pages/monitoring/Map')));

//이력
const AlarmHis = Loadable(lazy(() => import('@pages/history/Alarm')));
const AssetMoveHis = Loadable(lazy(() => import('@pages/history/AssetMove')));
const HitMap = Loadable(lazy(() => import('@pages/history/HitMap')));

//시스템 설정
const GwManagement = Loadable(lazy(() => import('@pages/systemSetting/Gw')));
const MapManagement = Loadable(lazy(() => import('@pages/systemSetting/Map')));
const AssetManagement = Loadable(
  lazy(() => import('@pages/systemSetting/Asset')),
);

//관리자 설정
const UserManagement = Loadable(lazy(() => import('@pages/adminSetting/User')));
const AuthManagement = Loadable(lazy(() => import('@pages/adminSetting/Auth')));

//개인설정
const AlarmSetting = Loadable(lazy(() => import('@pages/setting/Alarm')));

//popup
const UserPopup = Loadable(lazy(() => import('@component/Modal/UserPopup')));

const routerConfig = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      //모니터링
      {
        path: 'monitoring/tag',
        element: <TagMonitoring />,
      },
      {
        path: 'monitoring/gw',
        element: <GwMonitoring />,
      },
      {
        path: 'monitoring/map',
        element: <MapMonitoring />,
      },
      // 이력
      {
        path: 'history/alarm',
        element: <AlarmHis />,
      },
      {
        path: 'history/asset-move',
        element: <AssetMoveHis />,
      },
      {
        path: 'history/hitmap',
        element: <HitMap />,
      },
      //시스템설정
      {
        path: 'system/Gw',
        element: <GwManagement />,
      },
      {
        path: 'system/map',
        element: <MapManagement />,
      },
      {
        path: 'system/asset',
        element: <AssetManagement />,
      },

      //관리자 설정
      {
        path: 'admin/user',
        element: <UserManagement />,
      },
      {
        path: 'admin/auth',
        element: <AuthManagement />,
      },
      //개인설정
      {
        path: 'setting/alarm',
        element: <AlarmSetting />,
      },
    ],
  },
  {
    path: '/user/add' /** 사용자 추가 팝업 */,
    element: <UserPopup />,
  },
  {
    path: '/user/update' /** 사용자 수정 팝업 */,
    element: <UserPopup />,
  },
  {
    path: '*',
    element: <div>404 Not Found</div>,
  },
];

const MainRoutes = createBrowserRouter(routerConfig);

export default function RootRouters() {
  return <RouterProvider router={MainRoutes} />;
}
