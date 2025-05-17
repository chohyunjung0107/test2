# 프로젝트 개요

![Image](https://github.com/user-attachments/assets/ed15c65e-39fa-425f-8e3f-51d654a4b01f)
![Image](https://github.com/user-attachments/assets/58ac6936-5e30-492e-97af-20a6e8afa308)
![Image](https://github.com/user-attachments/assets/5eee1905-f902-4a9f-9b0d-c3647ce56f67)

- 전체 레이아웃은 header, sideMenu(toggle), contents 3개의 영역으로 레이아웃 구성
- Header :

  - MAIN LOGO버튼을 클릭하면 컨텍스트 메뉴가 뜹니다.
  - LOGO를 클릭하면 /home으로 이동합니다.
  - 햄버거 버튼을 글릭하면 사이드 메뉴가 토글됩니다.
  - 탭메뉴 : 페이지가 이동하면 히스토리가 탭으로 생성됩니다. 탭을 클릭하면 해당 페이지로 이동합니다.
  - 테마변경 : 아이콘을 클릭하면 다크모드 혹은 라이트모드로 변경이 가능합니다.

- SideMenu : 상단에는 헤더와 동일하게 컨텍스트메뉴와 /home이동합니다.

  - 메뉴는 총 3개의 뎁스로 이루어져있으며 'assets/MenuList' 배열을 기반으로 렌더링합니다.

- contents : 페이지를 이동할 경우 렌더링 되는 컴포넌트입니다.
  - 해당 라우터로 이동할 경우 메뉴컨텍스트에서 가지고 있는 값을 브래드 스크럼의 형태로 데이터를 포멧팅합니다.
- 사용자 관리 페이지 : 기본적으로 사용자 CRUD 기능이 동작하는 페이지입니다
  - 엑셀로 내보내기와 인쇄 기능은 상단의 버튼을 확인할 수 있습니다.

# 상태관리

- 리액트 내장 hook인인 useContext를 사용하고 있습니다.
- [constext/MenuContext.tsx] 메뉴의 현재 상태인 블리언값과 토글메뉴 함수, 브레드스크럼으로 사용하는 메뉴명 등을 글로벌 스테이트로 가지고 있습니다.
- [constext/ModeContext.tsx] 테마를 바꿀 수 있는 값을 글로벌로 가지고 있는 컨텍스트 메뉴입니다.

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
│      ├─api //api 공통 호출 인스턴스와 엔드포인트 정리
│      ├─assets //메뉴 리스트, 엑셀 익스포트할 수 있는 공통함수와 배열
│      ├─component //UI기준으로 분리가 가능한 컴포넌트별로 항목에 맞게 폴더링
│      │  ├─Modal
│      │  ├─RootLayout
│      │  │  ├─Contents
│      │  │  ├─Header
│      │  │  └─SideMenu
│      │  └─User
│      ├─context //사이드 메뉴와 모드 글로벌 값
│      ├─hook // 사용자 리스트를 GET하는 API를 훅
│      ├─pages // 메뉴에 해당하는 페이지단 컴포넌트
│      ├─router // 렌더링되는 라우터를 설정하고 관리
│      └─type // 공통 타입을 정리
└─server //화면단에 뿌려지는 API와 데이터를 JSON

```
