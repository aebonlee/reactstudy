import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import {
  FiCode, FiAnchor, FiLayers, FiFeather,
  FiZap, FiHelpCircle, FiBookOpen
} from 'react-icons/fi';

interface Category {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

interface RoadmapStep {
  title: string;
  desc: string;
}

const categories: Category[] = [
  { to: '/basics', icon: <FiCode size={24} />, title: 'React 기초', description: 'JSX, 컴포넌트, Props, State 등 React의 핵심 개념을 학습합니다.', badge: '7 토픽' },
  { to: '/hooks', icon: <FiAnchor size={24} />, title: 'Hooks', description: 'useState, useEffect, useContext 등 React Hooks를 깊이 있게 배웁니다.', badge: '7 토픽' },
  { to: '/state-routing', icon: <FiLayers size={24} />, title: '상태관리 & 라우팅', description: 'React Router, Context API, Zustand로 앱 구조를 설계합니다.', badge: '4 토픽' },
  { to: '/styling', icon: <FiFeather size={24} />, title: '스타일링', description: 'CSS Modules, Styled Components, Tailwind CSS 등 스타일링 기법을 익힙니다.', badge: '4 토픽' },
  { to: '/advanced', icon: <FiZap size={24} />, title: '심화학습', description: '성능 최적화, TypeScript, 테스팅, Next.js 등 고급 주제를 다룹니다.', badge: '6 토픽' },
  { to: '/qna', icon: <FiHelpCircle size={24} />, title: 'Q&A', description: 'React 학습 중 자주 묻는 질문과 답변을 모았습니다.' },
  { to: '/education', icon: <FiBookOpen size={24} />, title: '교육과정', description: '체계적인 커리큘럼으로 React를 단계별로 학습하세요.' },
];

const roadmapSteps: RoadmapStep[] = [
  { title: 'React 기초 이해', desc: 'JSX, 컴포넌트, Props, State 등 React의 핵심 개념과 동작 원리를 학습합니다.' },
  { title: 'Hooks 마스터', desc: 'useState, useEffect, useContext 등 React Hooks를 활용한 상태 관리와 사이드 이펙트 처리를 익힙니다.' },
  { title: '앱 구조 설계', desc: 'React Router로 SPA를 구축하고, Context API/Zustand로 전역 상태를 관리합니다.' },
  { title: '실전 프로젝트', desc: '스타일링, API 연동, 폼 처리, 성능 최적화까지 적용하여 완성도 높은 프로젝트를 만듭니다.' },
];

export default function Home(): React.ReactElement {
  return (
    <>
      <Hero
        title="React 완전정복"
        subtitle="컴포넌트 기반 UI 라이브러리 React를 체계적으로 배우고, 나만의 웹 애플리케이션을 만들어보세요. 기초부터 심화까지 한 번에 학습합니다."
        stats={[
          { number: '7', label: '학습 영역' },
          { number: '35+', label: '실전 토픽' },
          { number: '100+', label: '코드 예제' },
        ]}
      />

      <div className="main-section">
        <h2 className="section-title">학습 카테고리</h2>
        <p className="section-subtitle">React 개발에 필요한 모든 지식을 체계적으로 학습하세요</p>

        <div className="card-grid">
          {categories.map((cat, i) => (
            <Link to={cat.to} key={i} className="card" style={{ textDecoration: 'none' }}>
              <div className="card-icon">{cat.icon}</div>
              <div className="card-title">{cat.title}</div>
              <div className="card-desc">{cat.description}</div>
              {cat.badge && <span className="card-badge">{cat.badge}</span>}
            </Link>
          ))}
        </div>
      </div>

      <div className="main-section">
        <h2 className="section-title">학습 로드맵</h2>
        <p className="section-subtitle">단계별로 따라가며 React 개발의 전체 흐름을 이해하세요</p>

        <div className="roadmap">
          {roadmapSteps.map((step, i) => (
            <div className="roadmap-item" key={i}>
              <h4>Step {i + 1}. {step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
