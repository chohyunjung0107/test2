# 프로젝트 개요

![Image](https://github.com/user-attachments/assets/ed15c65e-39fa-425f-8e3f-51d654a4b01f)
![Image](https://github.com/user-attachments/assets/5eee1905-f902-4a9f-9b0d-c3647ce56f67)
![Image](https://github.com/user-attachments/assets/5eee1905-f902-4a9f-9b0d-c3647ce56f67)

- header, sideMenu(toggle), contents 3개의 영역으로 레이아웃 구성
- 디자인 라이브러리와 그리드는 mui를 사용

# verstion

- [npm] 20.16.0
- [react] 19.1.0
- [vite] 6.3.5

# 로컬 시작

## 노드 모듈 설치

```
// test-project-chohyunjung/client 경로에서
npm i
// test-project-chohyunjung/server 경로에서
npm i
//test-project-chohyunjung 디렉토리 경로에서
npm i
```

## 로컬에서 시작하기

```
// test-project-chohyunjung 디렉토리 경로에서 아래 명령어 시작
npm run start

```

# 서버+클라이언트 폴더 구조

```
├─client
│  ├─public
│  └─src
│      ├─api
│      ├─assets
│      ├─component
│      │  ├─Modal
│      │  ├─RootLayout
│      │  │  ├─Contents
│      │  │  ├─Header
│      │  │  └─SideMenu
│      │  └─User
│      ├─context
│      ├─hook
│      ├─pages
│      ├─router
│      └─type
└─server

```
