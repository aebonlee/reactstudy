# React Study - 리액트 완전정복

> 리액트(React) 학습에 필요한 모든 것을 체계적으로 배울 수 있는 교육 플랫폼

**[https://reactstudy.dreamitbiz.com](https://reactstudy.dreamitbiz.com)**

---

## 프로젝트 소개

React Study는 React 개발에 필요한 핵심 개념을 단계별로 학습할 수 있는 웹 기반 교육 플랫폼입니다.
컴포넌트, Hooks, 상태관리, 라우팅, 스타일링부터 TypeScript, 테스팅, Next.js까지 실무에 필요한 모든 내용을 다룹니다.

## 학습 카테고리

| 카테고리 | 토픽 수 | 주요 내용 |
|---------|--------|----------|
| **React 기초** | 7 | JSX, 컴포넌트, Props, State, 이벤트, 조건부/리스트 렌더링 |
| **Hooks** | 7 | useState, useEffect, useContext, useRef, useMemo/useCallback, useReducer, 커스텀 훅 |
| **상태관리 & 라우팅** | 4 | React Router, Context API, 상태관리 패턴, Zustand |
| **스타일링** | 4 | CSS Modules, Styled Components, Tailwind CSS, 반응형 디자인 |
| **심화학습** | 6 | 성능 최적화, TypeScript, 테스팅, Next.js, 폼 처리, API 연동 |
| **Q&A** | 8 | 자주 묻는 질문과 답변 |
| **교육과정** | 4 | 입문 - 초급 - 중급 - 고급 커리큘럼 |

## 기술 스택

- **프레임워크:** React 19
- **빌드 도구:** Vite 7
- **라우팅:** React Router DOM 7
- **아이콘:** React Icons
- **배포:** GitHub Pages

## 주요 기능

- **다크/라이트 모드** - 시간 기반 자동 감지, 수동 토글
- **5가지 색상 테마** - Blue, Red, Green, Purple, Orange
- **글로벌 검색** - `Ctrl+K`로 전체 토픽 검색
- **반응형 디자인** - 데스크톱, 태블릿, 모바일 대응
- **코드 블록** - 복사 기능 포함, 언어별 표시
- **학습 로드맵** - 단계별 학습 경로 안내

## 시작하기

```bash
# 저장소 클론
git clone https://github.com/aebonlee/reactstudy.git
cd reactstudy

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```

## 프로젝트 구조

```
src/
├── main.jsx                 # 앱 진입점
├── App.jsx                  # 라우팅 설정
├── context/
│   └── ThemeContext.jsx      # 테마/UI 상태 관리
├── components/
│   ├── Navbar.jsx            # 네비게이션 바
│   ├── Hero.jsx              # 히어로 섹션
│   ├── Card.jsx              # 카드 컴포넌트
│   ├── CodeBlock.jsx         # 코드 블록
│   ├── SearchModal.jsx       # 검색 모달
│   ├── MobileDrawer.jsx      # 모바일 메뉴
│   └── Footer.jsx            # 푸터
├── pages/
│   ├── Home.jsx              # 홈
│   ├── ReactBasics.jsx       # React 기초
│   ├── HooksGuide.jsx        # Hooks
│   ├── StateRouting.jsx      # 상태관리 & 라우팅
│   ├── StylingGuide.jsx      # 스타일링
│   ├── AdvancedTopics.jsx    # 심화학습
│   ├── QnA.jsx               # Q&A
│   └── Education.jsx         # 교육과정
├── data/
│   └── learningData.js       # 학습 콘텐츠 데이터
└── styles/
    └── global.css            # 디자인 시스템
```

## 연락처

- **이메일:** aebon@dreamitbiz.com
- **전화:** 010-3700-0629
- **카카오톡:** aebon

## 라이선스

(c) 2025 드림아이티비즈(DreamIT Biz). All rights reserved.
Designed by Ph.D Aebon Lee
