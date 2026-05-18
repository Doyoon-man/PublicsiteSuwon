# 📋 메인 페이지 웹 접근성 및 기능 자동화 테스트 계획서 (TEST PLAN)

본 계획서는 현재 React + Vite 기반의 `PublicsiteSuwon` 프로젝트 메인 페이지에 도입한 웹 접근성 및 핵심 인터랙티브 기능 자동화 테스트 시나리오를 정의합니다. 모든 테스트 시나리오는 **Given-When-Then** 구조를 엄격히 준수하여 설계되었습니다.

---

## 🎯 1. 테스트 목적 및 범위
* **목적**: 웹 접근성 표준(WCAG 2.1 AA 및 KWCAG 2.2) 준수 여부를 자동으로 상시 검증하고, 반응형 웹 디자인 및 주요 인터랙티브 흐름이 올바르게 동작하는지 확인하여 높은 수준의 UI 품질을 보장합니다.
* **테스트 대상**: 프로젝트 메인 페이지 (`/`) 및 관련 핵심 컴포넌트 ([Header.jsx](file:///d:/Vibe/PublicsiteSuwon/src/components/Header.jsx), [MainBanner.jsx](file:///d:/Vibe/PublicsiteSuwon/src/components/MainBanner.jsx), [ShortcutMenu.jsx](file:///d:/Vibe/PublicsiteSuwon/src/components/ShortcutMenu.jsx), [BoardSection.jsx](file:///d:/Vibe/PublicsiteSuwon/src/components/BoardSection.jsx), [Footer.jsx](file:///d:/Vibe/PublicsiteSuwon/src/components/Footer.jsx))
* **테스트 도구**: Playwright Test Runner + `@axe-core/playwright` 접근성 진단 엔진

---

## 🔍 2. 테스트 시나리오 정의 (Given-When-Then)

### ♿ 카테고리 A. 웹 접근성 (Accessibility Tests)

#### 시나리오 A-1. 본문 바로가기(Skip Link) 제공 및 동작 검증
* **Given (준비)**: 사용자가 브라우저를 통해 메인 페이지 (`/`)에 최초로 접속하고, 포커스가 문서 시작점에 위치해 있을 때
* **When (실행)**: 사용자가 키보드의 `Tab` 키를 1회 누를 때
* **Then (검증)**: 시각적으로 숨겨져 있던 "본문 바로가기" 링크(`.skip-link`)가 화면에 노출되어야 하며, 해당 링크를 실행(`Enter` 키 입력)하면 포커스가 메인 콘텐츠의 시작 영역인 `#main-content` 요소로 직접 이동해야 한다.

#### 시나리오 A-2. 이미지 대체 텍스트(alt 속성) 존재 여부 검증
* **Given (준비)**: 메인 페이지 (`/`)에 렌더링된 모든 이미지(`<img>`) 요소들과 SVG 아이콘들이 DOM 트리에 완전히 노출되었을 때
* **When (실행)**: 자동화 테스트 스캐너가 메인 페이지 내의 모든 이미지 및 그래픽 요소를 탐색할 때
* **Then (검증)**: 모든 의미 있는 이미지(`img`) 태그에는 비어있지 않은 적절한 `alt` 속성이 정의되어 있어야 하며, 순수 장식용 이미지 또는 SVG 아이콘에는 `aria-hidden="true"` 속성 또는 빈 `alt=""`가 지정되어 스크린 리더가 혼란스럽지 않아야 한다.

#### 시나리오 A-3. 시맨틱 HTML5 랜드마크 구조 검증
* **Given (준비)**: 메인 페이지 (`/`)의 레이아웃이 브라우저에 정상적으로 렌더링되었을 때
* **When (실행)**: 검색 로봇 및 보조 기술(스크린 리더)이 웹 페이지의 문서 구조를 파악할 때
* **Then (검증)**: 헤더 영역은 `<header>` 태그, 메인 콘텐츠는 `<main id="main-content" role="main">` 태그, 하단 영역은 `<footer>` 태그를 사용하여 마크업되어야 하며, 페이지당 단 하나의 `<h1>` 타이틀 태그만 존재해야 한다.

#### 시나리오 A-4. 텍스트 명도 대비(Color Contrast) 기준 검증
* **Given (준비)**: 메인 페이지 (`/`) 내 모든 텍스트 엘리먼트와 그 배경 레이어가 브라우저상에 온전히 스타일링되었을 때
* **When (실행)**: axe-core 접근성 검사 도구가 페이지 내 모든 텍스트 노드의 전경색(Color)과 배경색(Background Color)을 추출하여 대비율을 계산할 때
* **Then (검증)**: 일반 텍스트의 명도 대비는 최소 **4.5:1** 이상이어야 하며, 큰 텍스트(18pt/24px 이상 또는 굵은 14pt/18.67px 이상)의 명도 대비는 최소 **3:1** 이상을 만족하여 저시력자나 고령자도 텍스트를 인지할 수 있어야 한다.

---

### 📱 카테고리 B. 반응형 레이아웃 및 뷰포트별 노출 검증 (Responsive & Layout Tests)

#### 시나리오 B-1. 데스크톱 뷰포트(1280px 이상) 레이아웃 검증
* **Given (준비)**: 브라우저의 가로 뷰포트 크기가 **1280px** 이상(데스크톱 환경)으로 설정되고 메인 페이지 (`/`)로 이동했을 때
* **When (실행)**: 페이지의 레이아웃 구조와 각 컴포넌트의 가시성 상태를 검사할 때
* **Then (검증)**:
  - 데스크톱 전용 글로벌 네비게이션 바(GNB)가 상단 헤더에 정상 노출되어야 한다.
  - 모바일용 전체 메뉴 열기 버튼(햄버거 버튼)은 화면에서 숨겨져야 한다.
  - 게시판 섹션([BoardSection.jsx](file:///d:/Vibe/PublicsiteSuwon/src/components/BoardSection.jsx)) 내부의 그리드 구조가 데스크톱 최적화 2x2 형식 등으로 정렬되어 렌더링되어야 한다.

#### 시나리오 B-2. 모바일 뷰포트(768px 미만) 레이아웃 및 단축 메뉴 검증
* **Given (준비)**: 브라우저의 가로 뷰포트 크기가 **375px** (모바일 환경)로 설정되고 메인 페이지 (`/`)로 이동했을 때
* **When (실행)**: 페이지의 레이아웃 구조와 컴포넌트 노출 상태를 검사할 때
* **Then (검증)**:
  - 데스크톱용 GNB 및 로그인 글자 메뉴는 화면에서 숨겨져야 한다.
  - 모바일용 메뉴 버튼(햄버거 아이콘) 및 퀵메뉴/단축메뉴([ShortcutMenu.jsx](file:///d:/Vibe/PublicsiteSuwon/src/components/ShortcutMenu.jsx))가 화면 상에 레이아웃 배치 규격에 맞춰 정상적으로 노출되어야 한다.
  - 모바일 전용 배너 영역(`.mobile-banner-wrapper`)이 최상단에 정상적으로 표시되어야 한다.

---

### 🖱️ 카테고리 C. 인터랙티브 기능 및 내비게이션 (Interactive & Navigation Tests)

#### 시나리오 C-1. 데스크톱 GNB 드롭다운(메가 메뉴) 상호작용 검증
* **Given (준비)**: 뷰포트 크기가 데스크톱 모드(1280px)이고, 상단 헤더의 네비게이션 영역이 노출되어 있을 때
* **When (실행)**: 사용자가 네비게이션 메뉴 항목(예: '새소식', '정보공개' 등)에 마우스를 오버(Hover)하거나 포커스를 이동시킬 때
* **Then (검증)**: 하위 카테고리 링크들이 모여있는 메가 메뉴(Mega-Menu) 레이어가 자연스럽게 아래로 펼쳐지며 활성화되어야 하고, 마우스가 해당 영역을 벗어나면 서서히 숨겨져야 한다.

#### 시나리오 C-2. 모바일 사이드 메뉴(MobileMenu) 열기/닫기 인터랙션 검증
* **Given (준비)**: 뷰포트 크기가 모바일 모드(375px)이고, 상단 헤더에 모바일 전체 메뉴 버튼(햄버거 아이콘)만 노출되어 있을 때
* **When (실행)**: 사용자가 모바일 메뉴 버튼을 클릭(탭)할 때
* **Then (검증)**: 모바일 전체 메뉴 슬라이딩 드로어([MobileMenu.jsx](file:///d:/Vibe/PublicsiteSuwon/src/components/MobileMenu.jsx))가 화면 우측에서 스무스하게 레이오버로 활성화되어 노출되어야 하며, 이후 드로어 내부의 '닫기(X)' 버튼을 누르면 즉시 화면에서 사라져야 한다.

#### 시나리오 C-3. 로그인 화면 이동 및 뒤로 가기(닫기) 라우팅 검증
* **Given (준비)**: 사용자가 메인 페이지 (`/`)에 접속해 있는 상태일 때
* **When (실행)**: 헤더에 있는 '로그인' 버튼을 클릭할 때
* **Then (검증)**: URL 경로가 `/login`으로 즉시 라우팅되고 화면 전체에 로그인 폼([LoginScreen.jsx](file:///d:/Vibe/PublicsiteSuwon/src/components/LoginScreen.jsx))이 렌더링되어야 하며, 로그인 화면에서 '닫기(이전)' 버튼을 누르면 이전 페이지인 메인 페이지 (`/`)로 무결하게 돌아와야 한다.

---

## 🚀 3. 테스트 자동화 실행 및 통합 방안
* **테스트 명령어**: `npm run test:accessibility` 실행 시 전체 웹 접근성 및 인터랙션 시나리오를 통합 수행
* **CI/CD 연동**: GitHub Actions 등과 연동하여 Pull Request 및 main 브랜치 Push 발생 시 본 테스트 계획서의 시나리오가 자동으로 트리거되어 검증을 통과해야 배포가 완료되도록 구현
