# 프로젝트 개요

![Image](https://github.com/user-attachments/assets/ed15c65e-39fa-425f-8e3f-51d654a4b01f)
![Image](https://github.com/user-attachments/assets/58ac6936-5e30-492e-97af-20a6e8afa308)
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
