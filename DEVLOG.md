# React Study - 개발일지

## 2026-03-13 (1일차) - 프로젝트 초기 구축

### 프로젝트 개요
- **프로젝트명:** React Study - 리액트 완전정복
- **목적:** 리액트(React) 학습에 필요한 모든 내용을 체계적으로 배울 수 있는 교육 플랫폼
- **참고 프로젝트:** D:\webstudy (Vibe Backend Study - 바이브코딩 백엔드 학습 사이트)
- **리포지토리:** https://github.com/aebonlee/reactstudy

### 기술 스택
- **프레임워크:** React 19.2.0
- **빌드 도구:** Vite 7.3.1
- **라우팅:** React Router DOM 7.13.1
- **아이콘:** React Icons 5.6.0
- **배포:** GitHub Pages (gh-pages)
- **언어:** JavaScript (ES6+, JSX)

### 프로젝트 구조
```
D:\reactstudy/
├── public/
│   └── favicon.svg              # React 로고 파비콘
├── src/
│   ├── main.jsx                 # 앱 진입점 (HashRouter, ThemeProvider)
│   ├── App.jsx                  # 라우팅 설정 (8개 페이지)
│   ├── context/
│   │   └── ThemeContext.jsx     # 다크/라이트 테마, 색상 테마, 검색, 모바일 메뉴 상태
│   ├── components/
│   │   ├── Navbar.jsx           # 네비게이션 바 (테마 토글, 색상 선택, 검색)
│   │   ├── Hero.jsx             # 히어로 섹션 (타이틀, 서브타이틀, 통계)
│   │   ├── Card.jsx             # 재사용 카드 컴포넌트
│   │   ├── CodeBlock.jsx        # 코드 블록 (복사 기능 포함)
│   │   ├── SearchModal.jsx      # 검색 모달 (Ctrl+K)
│   │   ├── MobileDrawer.jsx     # 모바일 메뉴 드로어
│   │   └── Footer.jsx           # 푸터 (연락처, 패밀리 사이트)
│   ├── pages/
│   │   ├── Home.jsx             # 홈 (카테고리, 로드맵)
│   │   ├── ReactBasics.jsx      # React 기초 (7 토픽)
│   │   ├── HooksGuide.jsx       # Hooks (7 토픽)
│   │   ├── StateRouting.jsx     # 상태관리 & 라우팅 (4 토픽)
│   │   ├── StylingGuide.jsx     # 스타일링 (4 토픽)
│   │   ├── AdvancedTopics.jsx   # 심화학습 (6 토픽)
│   │   ├── QnA.jsx              # Q&A (8개 FAQ)
│   │   └── Education.jsx        # 교육과정 (4단계)
│   ├── data/
│   │   └── learningData.js      # 모든 학습 콘텐츠 데이터
│   └── styles/
│       └── global.css           # 전체 디자인 시스템 (CSS Variables)
├── index.html                   # HTML 템플릿
├── package.json                 # 의존성 및 스크립트
├── vite.config.js               # Vite 설정
├── eslint.config.js             # ESLint 설정
├── .gitignore                   # Git 제외 파일
└── DEVLOG.md                    # 개발일지 (본 파일)
```

### 구현된 기능

#### 1. 디자인 시스템 (webstudy와 동일 구조)
- **5가지 색상 테마:** Blue, Red, Green, Purple, Orange
- **다크/라이트 모드:** 시간 기반 자동 감지 (18시~06시 다크모드), localStorage 저장
- **반응형 디자인:** 데스크톱 / 태블릿 / 모바일 대응
- **글래스모피즘 네비게이션:** backdrop-filter blur 효과
- **히어로 섹션:** 그라디언트 배경, 블러 원형 오버레이

#### 2. 학습 콘텐츠 (총 35+ 토픽)

| 카테고리 | 토픽 수 | 주요 내용 |
|---------|--------|----------|
| React 기초 | 7 | JSX, 컴포넌트, Props, State, 이벤트, 조건부/리스트 렌더링 |
| Hooks | 7 | useState, useEffect, useContext, useRef, useMemo/useCallback, useReducer, 커스텀 훅 |
| 상태관리 & 라우팅 | 4 | React Router, Context API, 상태관리 패턴, Zustand |
| 스타일링 | 4 | CSS Modules, Styled Components, Tailwind CSS, 반응형 디자인 |
| 심화학습 | 6 | 성능 최적화, TypeScript, 테스팅, Next.js, 폼 처리, API 연동 |
| Q&A | 8 | 자주 묻는 질문과 답변 |
| 교육과정 | 4 | 입문 → 초급 → 중급 → 고급 커리큘럼 |

#### 3. UI/UX 기능
- **글로벌 검색 (Ctrl+K):** 전체 토픽 검색, 아이콘/카테고리 표시
- **서브 네비게이션:** 학습 페이지별 탭 형식 토픽 전환
- **코드 블록:** 복사 버튼, 언어 표시
- **FAQ 아코디언:** 펼침/접힘 애니메이션
- **로드맵:** 타임라인 형식 학습 경로
- **모바일 드로어:** 터치 친화적 네비게이션

### 작업 내역
1. Vite + React 프로젝트 초기화 (package.json, vite.config.js, index.html)
2. ThemeContext 구현 (다크모드, 색상 테마, 검색/모바일 메뉴 상태)
3. 공통 컴포넌트 7개 생성 (Navbar, Hero, Card, CodeBlock, SearchModal, MobileDrawer, Footer)
4. 학습 데이터 구축 (learningData.js - 28개 검색 항목, 35+ 토픽)
5. 페이지 컴포넌트 8개 생성
6. CSS 디자인 시스템 구축 (global.css - 18개 섹션)
7. 빌드 테스트 통과

### 빌드 결과
- index.html: 1.88 kB
- CSS: 19.07 kB (gzip: 4.19 kB)
- JS: 319.96 kB (gzip: 100.01 kB)
- 빌드 시간: ~2.25s
