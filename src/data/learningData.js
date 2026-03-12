// ============================================================
// React Study - 학습 콘텐츠 데이터
// ============================================================

// ===== 1. 검색 데이터 =====
export const searchData = [
  { title: 'JSX 문법', category: 'React 기초', path: '/basics', icon: '📝' },
  { title: '컴포넌트 이해', category: 'React 기초', path: '/basics', icon: '🧩' },
  { title: 'Props 전달', category: 'React 기초', path: '/basics', icon: '📨' },
  { title: 'State 관리', category: 'React 기초', path: '/basics', icon: '💾' },
  { title: '이벤트 핸들링', category: 'React 기초', path: '/basics', icon: '🖱️' },
  { title: '조건부 렌더링', category: 'React 기초', path: '/basics', icon: '🔀' },
  { title: '리스트 렌더링', category: 'React 기초', path: '/basics', icon: '📋' },
  { title: 'useState', category: 'Hooks', path: '/hooks', icon: '🔄' },
  { title: 'useEffect', category: 'Hooks', path: '/hooks', icon: '⚡' },
  { title: 'useContext', category: 'Hooks', path: '/hooks', icon: '🌐' },
  { title: 'useRef', category: 'Hooks', path: '/hooks', icon: '📌' },
  { title: 'useMemo & useCallback', category: 'Hooks', path: '/hooks', icon: '🚀' },
  { title: 'useReducer', category: 'Hooks', path: '/hooks', icon: '🔧' },
  { title: '커스텀 훅', category: 'Hooks', path: '/hooks', icon: '🎣' },
  { title: 'React Router', category: '상태관리 & 라우팅', path: '/state-routing', icon: '🗺️' },
  { title: 'Context API', category: '상태관리 & 라우팅', path: '/state-routing', icon: '📡' },
  { title: '상태관리 패턴', category: '상태관리 & 라우팅', path: '/state-routing', icon: '🏗️' },
  { title: 'Zustand', category: '상태관리 & 라우팅', path: '/state-routing', icon: '🐻' },
  { title: 'CSS Modules', category: '스타일링', path: '/styling', icon: '🎨' },
  { title: 'Styled Components', category: '스타일링', path: '/styling', icon: '💅' },
  { title: 'Tailwind CSS', category: '스타일링', path: '/styling', icon: '🌊' },
  { title: '반응형 디자인', category: '스타일링', path: '/styling', icon: '📱' },
  { title: '성능 최적화', category: '심화학습', path: '/advanced', icon: '⚡' },
  { title: 'TypeScript + React', category: '심화학습', path: '/advanced', icon: '🔷' },
  { title: '테스팅', category: '심화학습', path: '/advanced', icon: '🧪' },
  { title: 'Next.js 소개', category: '심화학습', path: '/advanced', icon: '▲' },
  { title: '폼 처리', category: '심화학습', path: '/advanced', icon: '📝' },
  { title: 'API 연동', category: '심화학습', path: '/advanced', icon: '🔗' },
];

// ===== 2. React 기초 토픽 =====
export const basicsTopics = [
  {
    id: 'jsx',
    title: 'JSX 문법',
    icon: '📝',
    description: 'JSX는 JavaScript 안에서 HTML과 유사한 문법을 사용할 수 있게 해주는 React의 핵심 문법입니다. 컴포넌트의 UI를 직관적으로 표현할 수 있습니다.',
    content: [
      { subtitle: 'JSX란?', text: 'JSX(JavaScript XML)는 JavaScript를 확장한 문법으로, React에서 UI를 정의할 때 사용합니다. HTML처럼 보이지만 실제로는 JavaScript 함수 호출로 변환됩니다.' },
      { subtitle: 'JSX 핵심 규칙', items: ['반드시 하나의 루트 요소로 감싸야 합니다 (<> ... </> 또는 <div>)', 'class 대신 className을 사용합니다', 'JavaScript 표현식은 중괄호 {}로 감쌉니다', '모든 태그는 반드시 닫아야 합니다 (<br /> <img />)', 'style은 객체로 전달합니다: style={{ color: "red" }}'] },
      { subtitle: 'JSX 안에서 JavaScript 사용', items: ['변수: {name}', '함수 호출: {formatDate(date)}', '삼항 연산자: {isLoggedIn ? "환영합니다" : "로그인하세요"}', '배열 메서드: {items.map(item => <li>{item}</li>)}'] },
    ],
    code: `// JSX 기본 사용법
function Welcome() {
  const name = "리액트";
  const isLoggedIn = true;

  return (
    <div className="welcome">
      <h1>안녕하세요, {name}!</h1>
      <p>{isLoggedIn ? "환영합니다" : "로그인하세요"}</p>
      <ul>
        {["React", "Vue", "Angular"].map((fw, i) => (
          <li key={i}>{fw}</li>
        ))}
      </ul>
      <img src="/logo.png" alt="로고" />
    </div>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'component',
    title: '컴포넌트 이해',
    icon: '🧩',
    description: '컴포넌트는 React 애플리케이션의 기본 빌딩 블록입니다. UI를 독립적이고 재사용 가능한 조각으로 나누어 관리합니다.',
    content: [
      { subtitle: '컴포넌트란?', text: '컴포넌트는 UI의 독립적인 조각입니다. 레고 블록처럼 작은 컴포넌트를 조합하여 복잡한 UI를 구성합니다. React에서는 함수형 컴포넌트를 주로 사용합니다.' },
      { subtitle: '컴포넌트 작성 규칙', items: ['컴포넌트 이름은 반드시 대문자로 시작 (PascalCase)', '하나의 파일에 하나의 주요 컴포넌트를 작성', 'JSX를 반환(return)해야 합니다', 'export default로 내보내기', '파일명은 컴포넌트명과 동일하게 (.jsx 확장자)'] },
      { subtitle: '컴포넌트 분리 기준', items: ['재사용 가능한 UI 조각 (Button, Card, Modal)', '독립적인 기능 단위 (Header, Sidebar, Footer)', '페이지 단위 (Home, About, Contact)', '데이터 처리 로직이 복잡한 부분'] },
    ],
    code: `// 함수형 컴포넌트 기본 구조
function Button({ text, onClick, variant = "primary" }) {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

// 컴포넌트 조합
function App() {
  return (
    <div>
      <Header />
      <main>
        <Button text="클릭하세요" onClick={() => alert("클릭!")} />
        <Button text="취소" variant="secondary" />
      </main>
      <Footer />
    </div>
  );
}

export default App;`,
    codeLang: 'jsx',
  },
  {
    id: 'props',
    title: 'Props 전달',
    icon: '📨',
    description: 'Props(Properties)는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법입니다. 컴포넌트를 재사용 가능하게 만드는 핵심 개념입니다.',
    content: [
      { subtitle: 'Props란?', text: 'Props는 컴포넌트에 전달하는 인자(argument)입니다. HTML 속성(attribute)처럼 사용하며, 컴포넌트 내부에서 읽기 전용으로 사용됩니다. Props는 절대 수정하면 안 됩니다.' },
      { subtitle: 'Props 사용법', items: ['부모에서 속성으로 전달: <Card title="제목" />', '자식에서 구조분해로 받기: function Card({ title })', 'children props: 컴포넌트 태그 사이의 내용', '기본값 설정: function Card({ title = "기본 제목" })', 'spread 연산자: <Card {...cardData} />'] },
      { subtitle: 'Props 주의사항', items: ['Props는 읽기 전용 (수정 금지)', '단방향 데이터 흐름: 부모 → 자식', '너무 많은 Props는 코드 냄새 (리팩토링 필요)', 'Props Drilling 문제는 Context API로 해결'] },
    ],
    code: `// Props 전달과 사용
function UserCard({ name, age, avatar, children }) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{age}세</p>
      {children}
    </div>
  );
}

// 부모 컴포넌트에서 사용
function App() {
  const user = {
    name: "김철수",
    age: 28,
    avatar: "/avatar.png"
  };

  return (
    <UserCard {...user}>
      <button>프로필 보기</button>
    </UserCard>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'state',
    title: 'State 관리',
    icon: '💾',
    description: 'State는 컴포넌트 내부에서 관리하는 동적인 데이터입니다. State가 변경되면 컴포넌트가 자동으로 다시 렌더링됩니다.',
    content: [
      { subtitle: 'State란?', text: 'State는 컴포넌트의 "기억"입니다. 사용자 입력, 서버 응답 등으로 변하는 데이터를 관리합니다. State가 변경되면 React가 자동으로 UI를 업데이트합니다.' },
      { subtitle: 'State vs Props', items: ['State: 컴포넌트 내부에서 관리, 변경 가능', 'Props: 외부에서 전달, 읽기 전용', 'State 변경 → 리렌더링 발생', 'Props 변경 → 부모가 다시 렌더링할 때 반영'] },
      { subtitle: 'State 업데이트 규칙', items: ['직접 수정 금지: state = "new" (X)', 'setState 함수 사용: setState("new") (O)', '배열/객체는 새로운 참조로 업데이트', '이전 값 기반 업데이트: setState(prev => prev + 1)', 'State 업데이트는 비동기적 (배치 처리)'] },
    ],
    code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // 숫자 업데이트
  const increment = () => setCount(prev => prev + 1);

  // 배열 업데이트 (새 배열 생성)
  const addItem = () => {
    setItems(prev => [...prev, \`아이템 \${prev.length + 1}\`]);
  };

  // 배열에서 삭제
  const removeItem = (index) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>카운터: {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={addItem}>아이템 추가</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => removeItem(i)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'events',
    title: '이벤트 핸들링',
    icon: '🖱️',
    description: 'React에서 이벤트를 처리하는 방법을 배웁니다. DOM 이벤트와 유사하지만 camelCase를 사용하고, 함수 참조를 전달합니다.',
    content: [
      { subtitle: 'React 이벤트 특징', items: ['camelCase로 이벤트명 작성: onClick, onChange, onSubmit', '함수 참조를 전달: onClick={handleClick} (괄호 없음)', 'event 객체가 자동으로 전달됨 (SyntheticEvent)', 'preventDefault()로 기본 동작 방지', 'stopPropagation()으로 이벤트 전파 방지'] },
      { subtitle: '자주 쓰는 이벤트', items: ['onClick: 클릭 이벤트', 'onChange: 입력값 변경', 'onSubmit: 폼 제출', 'onKeyDown / onKeyUp: 키보드 이벤트', 'onFocus / onBlur: 포커스 이벤트', 'onMouseEnter / onMouseLeave: 마우스 호버'] },
    ],
    code: `import { useState } from 'react';

function EventExample() {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState('');

  // 클릭 이벤트
  const handleClick = () => {
    alert('버튼이 클릭되었습니다!');
  };

  // 입력 변경 이벤트
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 폼 제출 이벤트
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    setSubmitted(text);
    setText('');
  };

  return (
    <div>
      <button onClick={handleClick}>클릭하세요</button>

      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={handleChange}
          placeholder="텍스트를 입력하세요"
        />
        <button type="submit">제출</button>
      </form>

      {submitted && <p>제출된 텍스트: {submitted}</p>}
    </div>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'conditional',
    title: '조건부 렌더링',
    icon: '🔀',
    description: '특정 조건에 따라 다른 UI를 보여주는 조건부 렌더링 패턴을 학습합니다. if문, 삼항 연산자, 논리 연산자 등을 활용합니다.',
    content: [
      { subtitle: '조건부 렌더링 방법', items: ['삼항 연산자: {condition ? <A /> : <B />}', '논리 AND: {condition && <Component />}', 'if/else: 함수 내에서 분기 처리', 'switch/case: 여러 조건 분기', '즉시 반환: if (!data) return <Loading />'] },
      { subtitle: '주의사항', items: ['0은 falsy지만 React에서 렌더링됨: {count && <span>{count}</span>}', '빈 문자열도 falsy이므로 주의', 'null, undefined, false, true는 렌더링되지 않음', '복잡한 조건은 변수로 분리하여 가독성 향상'] },
    ],
    code: `function Dashboard({ user, notifications, isLoading }) {
  // 로딩 상태 처리 (early return)
  if (isLoading) {
    return <div className="loading">로딩 중...</div>;
  }

  // 미로그인 상태
  if (!user) {
    return <div>로그인이 필요합니다.</div>;
  }

  return (
    <div>
      {/* 삼항 연산자 */}
      <h1>{user.isAdmin ? "관리자" : "사용자"} 대시보드</h1>

      {/* 논리 AND 연산자 */}
      {notifications.length > 0 && (
        <div className="badge">
          {notifications.length}개의 알림
        </div>
      )}

      {/* 조건에 따른 컴포넌트 선택 */}
      {user.role === 'admin' && <AdminPanel />}
      {user.role === 'editor' && <EditorPanel />}
      {user.role === 'viewer' && <ViewerPanel />}
    </div>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'list',
    title: '리스트 렌더링',
    icon: '📋',
    description: '배열 데이터를 반복하여 UI 요소를 생성하는 리스트 렌더링을 배웁니다. map()을 사용하며 key prop이 핵심입니다.',
    content: [
      { subtitle: 'map()으로 리스트 렌더링', text: 'JavaScript의 map() 메서드를 사용하여 배열의 각 요소를 JSX로 변환합니다. 각 요소에는 고유한 key prop을 반드시 지정해야 합니다.' },
      { subtitle: 'key의 중요성', items: ['key는 React가 어떤 항목이 변경되었는지 식별하는 데 사용', '배열의 index를 key로 사용하는 것은 비추천 (순서 변경 시 문제)', '데이터의 고유 ID를 key로 사용하는 것이 최선', 'key는 형제(sibling) 요소 사이에서만 고유하면 됨', 'key는 props로 전달되지 않음 (별도로 전달 필요)'] },
    ],
    code: `function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'React 공부하기', done: false },
    { id: 2, text: 'Hooks 이해하기', done: true },
    { id: 3, text: '프로젝트 만들기', done: false },
  ]);

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{
          textDecoration: todo.done ? 'line-through' : 'none'
        }}>
          <span onClick={() => toggleTodo(todo.id)}>
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}`,
    codeLang: 'jsx',
  },
];

// ===== 3. Hooks 토픽 =====
export const hooksTopics = [
  {
    id: 'useState',
    title: 'useState',
    icon: '🔄',
    description: 'useState는 컴포넌트에 상태(state)를 추가하는 가장 기본적인 Hook입니다. 상태값과 상태를 업데이트하는 함수를 반환합니다.',
    content: [
      { subtitle: '기본 사용법', text: 'const [state, setState] = useState(initialValue) 형태로 사용합니다. initialValue는 초기값이며, setState로 상태를 업데이트합니다.' },
      { subtitle: '다양한 상태 타입', items: ['숫자: useState(0)', '문자열: useState("")', '불리언: useState(false)', '배열: useState([])', '객체: useState({ name: "", age: 0 })', '함수 초기화: useState(() => expensiveComputation())'] },
      { subtitle: '상태 업데이트 패턴', items: ['직접 값 전달: setState(newValue)', '함수형 업데이트: setState(prev => prev + 1)', '객체 업데이트: setState(prev => ({ ...prev, name: "new" }))', '배열 추가: setState(prev => [...prev, newItem])', '배열 삭제: setState(prev => prev.filter(item => item.id !== id))'] },
    ],
    code: `import { useState } from 'react';

function UserForm() {
  // 여러 상태 관리
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: 0,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 유효성 검사
    const newErrors = {};
    if (!form.name) newErrors.name = '이름을 입력하세요';
    if (!form.email) newErrors.email = '이메일을 입력하세요';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('제출:', form);
    setForm({ name: '', email: '', age: 0 });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} />
      {errors.name && <span>{errors.name}</span>}
      <input name="email" value={form.email} onChange={handleChange} />
      {errors.email && <span>{errors.email}</span>}
      <button type="submit">제출</button>
    </form>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'useEffect',
    title: 'useEffect',
    icon: '⚡',
    description: 'useEffect는 컴포넌트의 사이드 이펙트(부수효과)를 처리하는 Hook입니다. 데이터 요청, DOM 조작, 타이머 설정 등에 사용합니다.',
    content: [
      { subtitle: '사이드 이펙트란?', text: '사이드 이펙트는 렌더링 자체 외에 발생하는 작업입니다. API 호출, 이벤트 리스너 등록, DOM 직접 조작, 타이머 설정 등이 해당합니다.' },
      { subtitle: '의존성 배열 패턴', items: ['useEffect(() => {}, []) - 마운트 시 1번만 실행', 'useEffect(() => {}, [dep]) - dep이 변경될 때마다 실행', 'useEffect(() => {}) - 매 렌더링마다 실행 (비추천)', 'return () => {} - 클린업 함수 (언마운트 또는 재실행 전)'] },
      { subtitle: '자주 쓰는 패턴', items: ['API 데이터 가져오기', '이벤트 리스너 등록/해제', '타이머 설정/해제', 'localStorage 동기화', '문서 타이틀 변경'] },
    ],
    code: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // API 호출 (userId 변경 시 재실행)
  useEffect(() => {
    setLoading(true);
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  // 문서 타이틀 변경
  useEffect(() => {
    document.title = user ? \`\${user.name}의 프로필\` : '로딩 중...';
  }, [user]);

  // 이벤트 리스너 (마운트/언마운트)
  useEffect(() => {
    const handleResize = () => {
      console.log('창 크기:', window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // 클린업 함수 (언마운트 시 실행)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (!user) return <div>사용자를 찾을 수 없습니다</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'useContext',
    title: 'useContext',
    icon: '🌐',
    description: 'useContext는 컴포넌트 트리 전체에서 데이터를 공유할 수 있게 해주는 Hook입니다. Props Drilling 문제를 해결합니다.',
    content: [
      { subtitle: 'Props Drilling 문제', text: '부모에서 깊이 중첩된 자식까지 props를 전달하려면 중간 컴포넌트들이 모두 props를 받아서 전달해야 합니다. Context를 사용하면 이 과정을 생략할 수 있습니다.' },
      { subtitle: 'Context 사용 3단계', items: ['1. createContext()로 Context 생성', '2. Provider로 값을 제공', '3. useContext()로 값을 소비'] },
      { subtitle: '적합한 사용 사례', items: ['테마 (다크모드/라이트모드)', '로그인 사용자 정보', '언어 설정 (i18n)', '전역 설정값'] },
    ],
    code: `import { createContext, useContext, useState } from 'react';

// 1. Context 생성
const AuthContext = createContext();

// 2. Provider 컴포넌트
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 커스텀 Hook으로 감싸기
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be within AuthProvider');
  return context;
}

// 3. 어디서든 사용
function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav>
      {user ? (
        <>
          <span>{user.name}님</span>
          <button onClick={logout}>로그아웃</button>
        </>
      ) : (
        <a href="/login">로그인</a>
      )}
    </nav>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'useRef',
    title: 'useRef',
    icon: '📌',
    description: 'useRef는 렌더링 사이에 값을 유지하면서도 리렌더링을 발생시키지 않는 Hook입니다. DOM 요소 접근이나 이전 값 저장에 사용됩니다.',
    content: [
      { subtitle: 'useRef의 두 가지 용도', items: ['1. DOM 요소에 직접 접근: <input ref={inputRef} />', '2. 렌더링에 영향 없는 값 저장: 타이머 ID, 이전 값 등'] },
      { subtitle: 'useState와의 차이', items: ['useRef: 값 변경 시 리렌더링 안 됨', 'useState: 값 변경 시 리렌더링 발생', 'useRef.current로 값에 접근/수정', 'useRef는 항상 동일한 객체를 반환'] },
    ],
    code: `import { useRef, useState, useEffect } from 'react';

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);  // 타이머 ID 저장
  const inputRef = useRef(null);  // DOM 요소 참조

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    // DOM 요소에 포커스
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>{time}초</h2>
      <input ref={inputRef} placeholder="메모" />
      <button onClick={handleStart}>시작</button>
      <button onClick={handleStop}>정지</button>
      <button onClick={handleReset}>초기화</button>
    </div>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'useMemo-useCallback',
    title: 'useMemo & useCallback',
    icon: '🚀',
    description: 'useMemo는 계산된 값을 메모이제이션하고, useCallback은 함수를 메모이제이션합니다. 불필요한 연산과 리렌더링을 방지하여 성능을 최적화합니다.',
    content: [
      { subtitle: 'useMemo', text: '비용이 큰 계산 결과를 캐시합니다. 의존성이 변경되지 않으면 이전 결과를 재사용합니다. const result = useMemo(() => expensiveCalculation(a, b), [a, b])' },
      { subtitle: 'useCallback', text: '함수 자체를 메모이제이션합니다. 자식 컴포넌트에 콜백을 전달할 때 불필요한 리렌더링을 방지합니다. const handleClick = useCallback(() => { ... }, [deps])' },
      { subtitle: '언제 사용해야 하나?', items: ['useMemo: 무거운 계산이 매 렌더링마다 실행될 때', 'useCallback: React.memo로 감싼 자식에 함수를 전달할 때', '성능 문제가 실제로 발생할 때만 사용', '모든 곳에 쓰면 오히려 성능 저하 (메모이제이션도 비용)'] },
    ],
    code: `import { useMemo, useCallback, useState, memo } from 'react';

// React.memo로 감싼 자식 컴포넌트
const ExpensiveList = memo(function ExpensiveList({ items, onItemClick }) {
  console.log('ExpensiveList 렌더링');
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => onItemClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
});

function App() {
  const [query, setQuery] = useState('');
  const [items] = useState([
    { id: 1, name: '사과', price: 1000 },
    { id: 2, name: '바나나', price: 2000 },
    { id: 3, name: '체리', price: 3000 },
  ]);

  // useMemo: 필터링 결과 캐시
  const filteredItems = useMemo(() => {
    console.log('필터링 계산 실행');
    return items.filter(item =>
      item.name.includes(query)
    );
  }, [items, query]);

  // useCallback: 함수 메모이제이션
  const handleItemClick = useCallback((id) => {
    console.log('클릭된 아이템:', id);
  }, []);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ExpensiveList items={filteredItems} onItemClick={handleItemClick} />
    </div>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'useReducer',
    title: 'useReducer',
    icon: '🔧',
    description: 'useReducer는 복잡한 상태 로직을 관리하기 위한 Hook입니다. useState의 대안으로, 상태 업데이트 로직을 컴포넌트 외부로 분리할 수 있습니다.',
    content: [
      { subtitle: 'useReducer vs useState', items: ['useState: 간단한 상태 (숫자, 문자열, 불리언)', 'useReducer: 복잡한 상태 (여러 값이 연관된 객체)', 'useReducer: 상태 업데이트 로직이 복잡할 때', 'useReducer: 다음 상태가 이전 상태에 의존할 때'] },
      { subtitle: '핵심 개념', items: ['reducer: (state, action) => newState 순수 함수', 'dispatch: action을 보내는 함수', 'action: { type: "ACTION_TYPE", payload: data }', 'initialState: 초기 상태값'] },
    ],
    code: `import { useReducer } from 'react';

// 초기 상태
const initialState = {
  todos: [],
  filter: 'all',
};

// Reducer 함수
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          done: false,
        }],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, done: !todo.done }
            : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  return (
    <div>
      <button onClick={() => addTodo('새 할일')}>추가</button>
      {state.todos.map(todo => (
        <div key={todo.id} onClick={() => toggleTodo(todo.id)}>
          {todo.done ? '✅' : '⬜'} {todo.text}
        </div>
      ))}
    </div>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'custom-hook',
    title: '커스텀 훅',
    icon: '🎣',
    description: '커스텀 훅은 반복되는 로직을 재사용 가능한 함수로 추출하는 패턴입니다. use로 시작하는 함수명으로 작성하며, 다른 Hook을 내부에서 사용할 수 있습니다.',
    content: [
      { subtitle: '커스텀 훅이란?', text: '커스텀 훅은 상태 로직을 재사용하기 위한 함수입니다. 여러 컴포넌트에서 동일한 로직을 사용할 때 커스텀 훅으로 추출하여 코드 중복을 제거합니다.' },
      { subtitle: '작성 규칙', items: ['함수명은 반드시 use로 시작: useLocalStorage, useFetch', '내부에서 다른 Hook을 사용할 수 있음', '값과 함수를 반환 (배열 또는 객체)', '일반 함수처럼 인자를 받을 수 있음'] },
      { subtitle: '자주 만드는 커스텀 훅', items: ['useFetch: API 데이터 가져오기', 'useLocalStorage: 로컬 스토리지 동기화', 'useDebounce: 입력 디바운싱', 'useToggle: 불리언 토글', 'useForm: 폼 상태 관리'] },
    ],
    code: `import { useState, useEffect } from 'react';

// 커스텀 훅: API 데이터 가져오기
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url, { signal: controller.signal });
        const json = await res.json();
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// 커스텀 훅: 로컬 스토리지 동기화
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// 사용 예시
function UserList() {
  const { data: users, loading, error } = useFetch('/api/users');
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
    codeLang: 'jsx',
  },
];

// ===== 4. 상태관리 & 라우팅 토픽 =====
export const stateRoutingTopics = [
  {
    id: 'react-router',
    title: 'React Router',
    icon: '🗺️',
    description: 'React Router는 SPA(Single Page Application)에서 페이지 전환을 구현하는 라이브러리입니다. URL에 따라 다른 컴포넌트를 렌더링합니다.',
    content: [
      { subtitle: 'SPA와 라우팅', text: 'SPA는 하나의 HTML 페이지에서 JavaScript로 화면을 전환합니다. React Router는 URL을 감시하고, URL에 맞는 컴포넌트를 렌더링해 줍니다.' },
      { subtitle: '핵심 컴포넌트', items: ['BrowserRouter / HashRouter: 라우터 설정', 'Routes: 라우트를 감싸는 컨테이너', 'Route: 경로와 컴포넌트 매핑', 'Link / NavLink: 페이지 이동 링크', 'Outlet: 중첩 라우트의 자식 렌더링', 'useNavigate: 프로그래밍 방식 이동', 'useParams: URL 파라미터 읽기'] },
    ],
    code: `import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
        <Link to="/users">사용자</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// URL 파라미터 사용
function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>사용자 #{id}</h2>
      <button onClick={() => navigate('/')}>홈으로</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'context-api',
    title: 'Context API',
    icon: '📡',
    description: 'Context API는 React 내장 상태 관리 도구입니다. Props Drilling 없이 컴포넌트 트리 전체에서 데이터를 공유할 수 있습니다.',
    content: [
      { subtitle: 'Context API 패턴', text: 'Context + useReducer 조합으로 간단한 전역 상태 관리를 구현할 수 있습니다. 작은 프로젝트에서는 외부 라이브러리 없이도 충분합니다.' },
      { subtitle: '구조 설계', items: ['Context 파일을 별도 분리 (context/AuthContext.jsx)', 'Provider 컴포넌트에서 상태 로직 관리', '커스텀 Hook으로 사용 편의성 제공 (useAuth)', '여러 Context를 조합하여 사용 가능'] },
      { subtitle: '주의사항', items: ['Context 값이 변경되면 모든 소비자가 리렌더링', '자주 변경되는 값은 Context를 분리하여 관리', '큰 규모에서는 Zustand, Redux 등 고려'] },
    ],
    code: `// context/CartContext.jsx
import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR' });
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);`,
    codeLang: 'jsx',
  },
  {
    id: 'state-patterns',
    title: '상태관리 패턴',
    icon: '🏗️',
    description: 'React 애플리케이션의 상태를 효과적으로 관리하기 위한 다양한 패턴과 원칙을 학습합니다.',
    content: [
      { subtitle: '상태의 종류', items: ['로컬 상태: 하나의 컴포넌트에서만 사용 (useState)', '공유 상태: 여러 컴포넌트가 사용 (상태 끌어올리기)', '전역 상태: 앱 전체에서 사용 (Context, Zustand)', '서버 상태: API 데이터 (React Query, SWR)', 'URL 상태: URL 파라미터, 쿼리스트링'] },
      { subtitle: '상태 설계 원칙', items: ['최소한의 상태만 유지 (계산 가능한 값은 상태로 두지 않기)', '상태를 가능한 가까운 곳에 배치', '관련된 상태는 하나의 객체로 그룹화', '상태의 정규화 (중복 데이터 제거)', '불변성 유지 (직접 수정 금지)'] },
    ],
    code: `// 상태 끌어올리기 (Lifting State Up) 패턴
import { useState } from 'react';

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = { c: '섭씨', f: '화씨' };

  return (
    <fieldset>
      <legend>{scaleNames[scale]} 온도를 입력하세요:</legend>
      <input
        value={temperature}
        onChange={e => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const toCelsius = (f) => ((f - 32) * 5 / 9).toFixed(1);
  const toFahrenheit = (c) => ((c * 9 / 5) + 32).toFixed(1);

  const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={(t) => { setTemperature(t); setScale('c'); }}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={(t) => { setTemperature(t); setScale('f'); }}
      />
    </div>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'zustand',
    title: 'Zustand',
    icon: '🐻',
    description: 'Zustand는 간결하고 유연한 상태 관리 라이브러리입니다. Redux보다 훨씬 간단한 API로 전역 상태를 관리할 수 있습니다.',
    content: [
      { subtitle: 'Zustand의 장점', items: ['보일러플레이트가 거의 없음', 'Provider로 감싸지 않아도 됨', 'React 외부에서도 상태 접근 가능', '작은 번들 크기 (~1KB)', 'TypeScript 지원 우수'] },
      { subtitle: 'Redux vs Zustand', items: ['Redux: 엄격한 패턴, 큰 규모에 적합, 미들웨어 풍부', 'Zustand: 간결한 API, 빠른 개발, 작은 규모에 최적', '러닝 커브: Zustand << Redux', 'DevTools: 둘 다 지원'] },
    ],
    code: `// npm install zustand

import { create } from 'zustand';

// 스토어 생성
const useStore = create((set, get) => ({
  // 상태
  count: 0,
  user: null,
  todos: [],

  // 액션
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),

  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),

  addTodo: (text) => set(state => ({
    todos: [...state.todos, { id: Date.now(), text, done: false }],
  })),

  toggleTodo: (id) => set(state => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ),
  })),

  // 계산된 값 (get 사용)
  getDoneTodos: () => get().todos.filter(t => t.done),
}));

// 컴포넌트에서 사용
function Counter() {
  const count = useStore(state => state.count);
  const increment = useStore(state => state.increment);

  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>+1</button>
    </div>
  );
}`,
    codeLang: 'jsx',
  },
];

// ===== 5. 스타일링 토픽 =====
export const stylingTopics = [
  {
    id: 'css-modules',
    title: 'CSS Modules',
    icon: '🎨',
    description: 'CSS Modules는 CSS 클래스명을 자동으로 고유하게 만들어 스타일 충돌을 방지합니다. Vite와 CRA에서 기본 지원됩니다.',
    content: [
      { subtitle: 'CSS Modules란?', text: 'CSS Modules는 CSS 파일을 모듈처럼 import하여 사용합니다. 클래스명이 자동으로 해시되어 다른 컴포넌트와 충돌하지 않습니다.' },
      { subtitle: '사용법', items: ['파일명: Component.module.css', 'import styles from "./Component.module.css"', 'className={styles.container}', '여러 클래스: className={`${styles.btn} ${styles.primary}`}', 'Vite에서 기본 지원 (별도 설정 불필요)'] },
    ],
    code: `/* Button.module.css */
.button {
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.primary {
  background: #0046C8;
  color: white;
  border: none;
}

.primary:hover {
  background: #002E8A;
}

.outline {
  background: transparent;
  color: #0046C8;
  border: 2px solid #0046C8;
}

/* Button.jsx */
import styles from './Button.module.css';

function Button({ children, variant = 'primary', onClick }) {
  return (
    <button
      className={\`\${styles.button} \${styles[variant]}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'styled-components',
    title: 'Styled Components',
    icon: '💅',
    description: 'Styled Components는 CSS-in-JS 라이브러리로, JavaScript 안에서 CSS를 작성합니다. 동적 스타일링과 테마 적용이 간편합니다.',
    content: [
      { subtitle: 'CSS-in-JS란?', text: 'CSS를 JavaScript 파일 안에서 작성하는 방식입니다. 컴포넌트와 스타일이 같은 파일에 있어 관리가 편하고, props를 활용한 동적 스타일링이 가능합니다.' },
      { subtitle: '장점', items: ['스코프가 자동으로 제한됨 (충돌 없음)', 'props 기반 동적 스타일링', '테마 시스템 내장 (ThemeProvider)', '자동 벤더 프리픽스', 'SSR(서버 사이드 렌더링) 지원'] },
    ],
    code: `// npm install styled-components
import styled from 'styled-components';

// 기본 스타일 컴포넌트
const Card = styled.div\`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
\`;

// Props 기반 동적 스타일링
const Button = styled.button\`
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;

  background: \${props => props.variant === 'primary' ? '#0046C8' : '#E5E7EB'};
  color: \${props => props.variant === 'primary' ? 'white' : '#111827'};

  &:hover {
    opacity: 0.9;
  }
\`;

// 스타일 확장
const LargeButton = styled(Button)\`
  padding: 16px 32px;
  font-size: 18px;
\`;

// 사용
function App() {
  return (
    <Card>
      <h2>제목</h2>
      <Button variant="primary">확인</Button>
      <LargeButton>큰 버튼</LargeButton>
    </Card>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    icon: '🌊',
    description: 'Tailwind CSS는 유틸리티 퍼스트 CSS 프레임워크입니다. 미리 정의된 클래스를 조합하여 빠르게 스타일링합니다.',
    content: [
      { subtitle: 'Tailwind CSS란?', text: 'Tailwind는 bg-blue-500, text-lg, p-4 같은 유틸리티 클래스를 조합하여 스타일을 적용합니다. CSS 파일을 따로 작성하지 않아도 되며, 빠른 프로토타이핑에 최적입니다.' },
      { subtitle: '자주 쓰는 클래스', items: ['레이아웃: flex, grid, justify-center, items-center', '크기: w-full, h-screen, max-w-lg', '여백: p-4, m-2, px-6, mt-8, gap-4', '색상: bg-blue-500, text-white, border-gray-300', '타이포: text-xl, font-bold, text-center', '반응형: sm:, md:, lg: 접두사'] },
    ],
    code: `// Tailwind CSS 설치: npm install tailwindcss @tailwindcss/vite
// vite.config.js에 플러그인 추가

// 컴포넌트에서 사용
function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6
                    hover:-translate-y-1 transition-transform duration-200
                    border border-gray-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        {product.description}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-semibold text-xl">
          {product.price.toLocaleString()}원
        </span>
        <button className="bg-blue-600 text-white px-4 py-2
                          rounded-lg hover:bg-blue-700
                          transition-colors">
          구매하기
        </button>
      </div>
    </div>
  );
}

// 반응형 그리드 레이아웃
function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'responsive',
    title: '반응형 디자인',
    icon: '📱',
    description: '다양한 화면 크기에 대응하는 반응형 웹 디자인을 React에서 구현하는 방법을 학습합니다.',
    content: [
      { subtitle: '반응형 디자인 원칙', items: ['모바일 퍼스트 (Mobile First) 접근', 'CSS 미디어 쿼리 활용', 'flexbox와 grid로 유연한 레이아웃', 'rem/em 단위 사용 (px 대신)', 'viewport meta 태그 필수'] },
      { subtitle: 'React에서의 반응형', items: ['CSS 미디어 쿼리: 가장 기본적인 방법', 'CSS Variables: 동적 테마와 크기 조절', 'useMediaQuery 커스텀 훅: JS로 화면 크기 감지', '조건부 렌더링: 화면 크기에 따라 다른 컴포넌트'] },
    ],
    code: `import { useState, useEffect } from 'react';

// 커스텀 훅: 화면 크기 감지
function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

// 반응형 레이아웃 컴포넌트
function Layout({ children }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="layout">
      {!isMobile && <Sidebar />}
      <main>{children}</main>
      {isMobile && <MobileBottomNav />}
    </div>
  );
}

/* CSS 미디어 쿼리 예시 */
/*
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 768px) {
  .container { padding: 0 16px; }
  .grid { grid-template-columns: 1fr; }
  .hero h1 { font-size: 28px; }
}

@media (max-width: 480px) {
  .container { padding: 0 12px; }
  .hero { padding: 32px 12px; }
}
*/`,
    codeLang: 'jsx',
  },
];

// ===== 6. 심화학습 토픽 =====
export const advancedTopics = [
  {
    id: 'performance',
    title: '성능 최적화',
    icon: '⚡',
    description: 'React 애플리케이션의 성능을 최적화하는 다양한 기법을 학습합니다. 불필요한 리렌더링 방지, 코드 분할, 지연 로딩 등을 다룹니다.',
    content: [
      { subtitle: '리렌더링 최적화', items: ['React.memo: 컴포넌트 메모이제이션', 'useMemo: 계산 결과 캐시', 'useCallback: 함수 메모이제이션', '상태를 최대한 가까운 곳에 배치', '컴포넌트 분리로 리렌더링 범위 축소'] },
      { subtitle: '코드 분할 & 지연 로딩', items: ['React.lazy(): 동적 import', 'Suspense: 로딩 상태 표시', '라우트 기반 코드 분할', '이미지 지연 로딩 (loading="lazy")', 'Intersection Observer API 활용'] },
      { subtitle: '성능 측정 도구', items: ['React DevTools Profiler', 'Chrome Performance 탭', 'Lighthouse 감사', 'why-did-you-render 라이브러리'] },
    ],
    code: `import { lazy, Suspense, memo, useMemo, useCallback } from 'react';

// 코드 분할: 라우트별 지연 로딩
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}

// React.memo: Props가 변경되지 않으면 리렌더링 방지
const TodoItem = memo(function TodoItem({ todo, onToggle }) {
  console.log('TodoItem 렌더링:', todo.text);
  return (
    <li onClick={() => onToggle(todo.id)}>
      {todo.done ? '✅' : '⬜'} {todo.text}
    </li>
  );
});

// 최적화된 리스트 컴포넌트
function TodoList({ todos }) {
  const onToggle = useCallback((id) => {
    // 토글 로직
  }, []);

  const sortedTodos = useMemo(() => {
    return [...todos].sort((a, b) => a.text.localeCompare(b.text));
  }, [todos]);

  return (
    <ul>
      {sortedTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'typescript',
    title: 'TypeScript + React',
    icon: '🔷',
    description: 'TypeScript를 React와 함께 사용하면 타입 안전성을 확보하여 버그를 줄이고, IDE의 자동완성 지원을 극대화할 수 있습니다.',
    content: [
      { subtitle: 'TypeScript를 쓰는 이유', items: ['컴파일 타임에 타입 오류 발견', 'IDE 자동완성과 문서화 지원', '리팩토링 안전성 향상', 'Props 타입이 곧 문서가 됨', '대규모 프로젝트에서 필수'] },
      { subtitle: 'React에서 자주 쓰는 타입', items: ['React.FC<Props>: 함수형 컴포넌트 타입', 'React.ReactNode: JSX 반환 타입', 'React.ChangeEvent<HTMLInputElement>: 이벤트 타입', 'React.MouseEvent: 마우스 이벤트', 'React.FormEvent: 폼 이벤트'] },
    ],
    code: `// TypeScript + React 예시

// Props 타입 정의
interface UserCardProps {
  name: string;
  age: number;
  email?: string;  // 선택적 prop
  onEdit: (id: number) => void;
  children?: React.ReactNode;
}

function UserCard({ name, age, email, onEdit, children }: UserCardProps) {
  return (
    <div>
      <h3>{name} ({age}세)</h3>
      {email && <p>{email}</p>}
      {children}
    </div>
  );
}

// useState with TypeScript
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      done: false,
    };
    setTodos(prev => [...prev, newTodo]);
    setInput('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={(e: React.FormEvent) => { e.preventDefault(); addTodo(); }}>
      <input value={input} onChange={handleChange} />
      <button type="submit">추가</button>
    </form>
  );
}`,
    codeLang: 'tsx',
  },
  {
    id: 'testing',
    title: '테스팅',
    icon: '🧪',
    description: 'React 컴포넌트의 테스트를 작성하는 방법을 학습합니다. Vitest, React Testing Library를 활용하여 안정적인 코드를 유지합니다.',
    content: [
      { subtitle: '테스트의 종류', items: ['단위 테스트(Unit): 개별 함수/컴포넌트 테스트', '통합 테스트(Integration): 여러 컴포넌트 조합 테스트', 'E2E 테스트: 사용자 시나리오 전체 테스트 (Playwright)', '스냅샷 테스트: UI 변경 감지'] },
      { subtitle: '테스트 도구', items: ['Vitest: Vite 기반 빠른 테스트 러너', 'React Testing Library: 사용자 관점 컴포넌트 테스트', 'MSW: API 모킹', 'Playwright: E2E 브라우저 테스트'] },
    ],
    code: `// npm install -D vitest @testing-library/react @testing-library/jest-dom

// Counter.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Counter from './Counter';

describe('Counter 컴포넌트', () => {
  it('초기값 0을 렌더링한다', () => {
    render(<Counter />);
    expect(screen.getByText('카운터: 0')).toBeInTheDocument();
  });

  it('+1 버튼 클릭 시 카운터가 증가한다', () => {
    render(<Counter />);
    const button = screen.getByText('+1');

    fireEvent.click(button);

    expect(screen.getByText('카운터: 1')).toBeInTheDocument();
  });

  it('리셋 버튼 클릭 시 0으로 초기화된다', () => {
    render(<Counter />);

    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('리셋'));

    expect(screen.getByText('카운터: 0')).toBeInTheDocument();
  });
});`,
    codeLang: 'jsx',
  },
  {
    id: 'nextjs',
    title: 'Next.js 소개',
    icon: '▲',
    description: 'Next.js는 React 기반의 풀스택 프레임워크입니다. SSR, SSG, API 라우트 등 프로덕션에 필요한 기능을 기본 제공합니다.',
    content: [
      { subtitle: 'Next.js vs React (Vite)', items: ['React(Vite): 클라이언트 렌더링(CSR), 순수 SPA', 'Next.js: SSR + SSG + CSR 모두 지원', 'Next.js: 파일 기반 라우팅 내장', 'Next.js: API 라우트로 백엔드까지', 'Next.js: 이미지 최적화, 폰트 최적화 내장'] },
      { subtitle: 'Next.js 핵심 기능', items: ['App Router: 서버/클라이언트 컴포넌트 분리', 'Server Components: 서버에서 렌더링 (기본값)', 'API Routes: app/api/ 디렉토리에 백엔드 로직', 'Middleware: 요청 처리 전 로직', 'Image, Font, Script 최적화 컴포넌트'] },
    ],
    code: `// Next.js App Router 기본 구조

// app/layout.js (루트 레이아웃)
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <nav>네비게이션</nav>
        {children}
        <footer>푸터</footer>
      </body>
    </html>
  );
}

// app/page.js (홈 페이지 - 서버 컴포넌트)
async function Home() {
  // 서버에서 직접 데이터 가져오기
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return (
    <main>
      <h1>블로그</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </main>
  );
}

// app/api/hello/route.js (API 라우트)
export async function GET() {
  return Response.json({
    message: 'Hello from Next.js API!',
  });
}`,
    codeLang: 'jsx',
  },
  {
    id: 'forms',
    title: '폼 처리',
    icon: '📝',
    description: 'React에서 폼 데이터를 관리하는 제어/비제어 컴포넌트 패턴과, 유효성 검사 구현 방법을 학습합니다.',
    content: [
      { subtitle: '제어 컴포넌트 vs 비제어 컴포넌트', items: ['제어(Controlled): state로 값 관리, onChange로 업데이트', '비제어(Uncontrolled): ref로 DOM에서 직접 값 읽기', '대부분의 경우 제어 컴포넌트 권장', '파일 입력(<input type="file" />)은 비제어 사용'] },
      { subtitle: '유효성 검사', items: ['실시간 검사: onChange에서 처리', '제출 시 검사: onSubmit에서 처리', 'HTML5 기본 검사: required, pattern, min/max', '라이브러리: React Hook Form, Zod, Yup'] },
    ],
    code: `import { useState } from 'react';

function SignupForm() {
  const [form, setForm] = useState({
    username: '', email: '', password: '', confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (form.username.length < 2) newErrors.username = '2자 이상 입력하세요';
    if (!/\\S+@\\S+\\.\\S+/.test(form.email)) newErrors.email = '유효한 이메일을 입력하세요';
    if (form.password.length < 8) newErrors.password = '8자 이상 입력하세요';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = '비밀번호가 일치하지 않습니다';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // 실시간 에러 제거
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log('회원가입 데이터:', form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="username" value={form.username}
               onChange={handleChange} placeholder="사용자명" />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div>
        <input name="email" value={form.email}
               onChange={handleChange} placeholder="이메일" />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <button type="submit">가입하기</button>
    </form>
  );
}`,
    codeLang: 'jsx',
  },
  {
    id: 'api-integration',
    title: 'API 연동',
    icon: '🔗',
    description: '외부 API와 통신하는 패턴을 학습합니다. fetch, axios를 활용한 CRUD 구현과 로딩/에러 상태 처리를 다룹니다.',
    content: [
      { subtitle: 'API 연동 패턴', items: ['useEffect + fetch: 기본 패턴', 'axios: HTTP 클라이언트 라이브러리', '커스텀 훅: useFetch, useApi', 'React Query / SWR: 서버 상태 관리 라이브러리', 'AbortController: 요청 취소 처리'] },
      { subtitle: '상태 관리', items: ['로딩 상태: isLoading', '에러 상태: error', '데이터 상태: data', '낙관적 업데이트 (Optimistic Update)', '재시도 로직 (Retry)'] },
    ],
    code: `import { useState, useEffect } from 'react';

// API 연동 CRUD 예시
function PostManager() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  // READ: 데이터 가져오기
  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const res = await fetch(API_URL + '?_limit=10');
        if (!res.ok) throw new Error('데이터를 불러올 수 없습니다');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // CREATE: 새 게시글 작성
  const createPost = async (title, body) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body, userId: 1 }),
    });
    const newPost = await res.json();
    setPosts(prev => [newPost, ...prev]);
  };

  // DELETE: 게시글 삭제
  const deletePost = async (id) => {
    await fetch(\`\${API_URL}/\${id}\`, { method: 'DELETE' });
    setPosts(prev => prev.filter(p => p.id !== id));
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error}</p>;

  return (
    <div>
      <button onClick={() => createPost('새 글', '내용')}>글 작성</button>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <button onClick={() => deletePost(post.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}`,
    codeLang: 'jsx',
  },
];

// ===== 7. FAQ 데이터 =====
export const faqData = [
  {
    question: 'React는 프레임워크인가요, 라이브러리인가요?',
    answer: 'React는 UI를 구축하기 위한 "라이브러리"입니다. Angular나 Vue와 달리 라우팅, 상태관리 등을 내장하지 않고, 필요한 라이브러리를 선택하여 조합합니다. 이러한 유연성이 React의 큰 장점이지만, 초보자에게는 선택의 부담이 될 수 있습니다. Next.js를 사용하면 이런 결정들이 미리 되어 있어 편리합니다.',
  },
  {
    question: 'useState와 useRef의 차이점은 무엇인가요?',
    answer: 'useState는 값이 변경되면 컴포넌트가 리렌더링됩니다. 화면에 보이는 데이터를 관리할 때 사용합니다. useRef는 값이 변경되어도 리렌더링이 발생하지 않습니다. DOM 요소 접근이나 타이머 ID 저장 등 화면에 직접 영향을 주지 않는 값을 저장할 때 사용합니다.',
  },
  {
    question: 'useEffect의 의존성 배열에 무엇을 넣어야 하나요?',
    answer: 'useEffect 내부에서 사용하는 모든 외부 변수(props, state, 함수)를 의존성 배열에 넣어야 합니다. ESLint의 react-hooks/exhaustive-deps 규칙이 이를 자동으로 경고해줍니다. 빈 배열 []은 마운트 시 1번만 실행, 배열 생략은 매 렌더링마다 실행됩니다. 무한 루프를 방지하려면 setState 함수 형태를 사용하거나 useCallback으로 함수를 메모이제이션하세요.',
  },
  {
    question: 'Props Drilling이 무엇이고 어떻게 해결하나요?',
    answer: 'Props Drilling은 상위 컴포넌트의 데이터를 여러 중간 컴포넌트를 거쳐 깊이 중첩된 자식에게 전달하는 현상입니다. 해결 방법으로는 1) Context API: React 내장 기능으로 전역 데이터 공유, 2) Zustand/Redux: 외부 상태 관리 라이브러리, 3) 컴포넌트 합성(Composition): children props 활용이 있습니다.',
  },
  {
    question: 'React에서 CSS를 적용하는 가장 좋은 방법은?',
    answer: '프로젝트 규모와 팀 선호도에 따라 다릅니다. CSS Modules는 스타일 충돌 없이 전통적인 CSS 작성이 가능하여 대부분의 프로젝트에 적합합니다. Tailwind CSS는 빠른 개발과 일관된 디자인이 필요할 때 좋습니다. Styled Components는 동적 스타일링이 많을 때 유용합니다. 작은 프로젝트에서는 일반 CSS도 충분합니다.',
  },
  {
    question: 'React와 Next.js 중 어떤 것을 배워야 하나요?',
    answer: 'React 기초를 먼저 배우세요. 컴포넌트, Props, State, Hooks, 이벤트 핸들링 등 React의 핵심 개념은 Next.js에서도 동일하게 사용됩니다. React를 충분히 이해한 후 Next.js를 배우면 SSR, SSG, API Routes 등의 추가 기능을 쉽게 이해할 수 있습니다. SEO가 중요한 프로젝트라면 Next.js가 필수입니다.',
  },
  {
    question: 'key prop은 왜 필요한가요?',
    answer: 'React는 key를 사용하여 리스트에서 어떤 항목이 변경/추가/삭제되었는지 효율적으로 판단합니다. key가 없거나 index를 key로 사용하면, 항목 순서가 바뀔 때 React가 전체 리스트를 다시 렌더링하여 성능이 저하됩니다. 데이터의 고유 ID를 key로 사용하는 것이 가장 좋습니다.',
  },
  {
    question: '상태 관리 라이브러리는 반드시 필요한가요?',
    answer: '아닙니다. useState와 Context API만으로 충분한 프로젝트가 많습니다. 상태 관리 라이브러리는 1) 전역 상태가 많고 복잡할 때, 2) 여러 컴포넌트에서 동일한 데이터를 자주 공유할 때, 3) 서버 상태 캐싱이 필요할 때 도입하세요. 작은 프로젝트에서 Redux를 쓰는 것은 과한 선택입니다. Zustand처럼 가벼운 라이브러리부터 시작하세요.',
  },
];

// ===== 8. 교육과정 데이터 =====
export const educationData = [
  {
    id: 'beginner',
    level: '입문',
    title: 'React 시작하기',
    description: 'JavaScript 기초 지식이 있다면 시작할 수 있는 React 입문 과정입니다. 컴포넌트와 JSX의 기본 개념을 배웁니다.',
    topics: [
      'React란 무엇인가',
      'JSX 문법 이해하기',
      '컴포넌트 만들기',
      'Props로 데이터 전달',
      'State로 동적 UI 만들기',
      '이벤트 핸들링',
      '조건부/리스트 렌더링',
    ],
  },
  {
    id: 'elementary',
    level: '초급',
    title: 'React Hooks 마스터',
    description: 'React의 핵심인 Hooks를 깊이 있게 학습합니다. 상태 관리부터 사이드 이펙트 처리까지 실전 패턴을 익힙니다.',
    topics: [
      'useState 심화',
      'useEffect 패턴',
      'useContext로 전역 상태',
      'useRef 활용법',
      'useMemo & useCallback',
      'useReducer 복잡한 상태',
      '커스텀 훅 만들기',
    ],
  },
  {
    id: 'intermediate',
    level: '중급',
    title: '실전 React 프로젝트',
    description: '라우팅, 상태관리, 스타일링, API 연동까지 실전 프로젝트를 만들면서 학습합니다.',
    topics: [
      'React Router로 SPA 구축',
      'Context API & Zustand 상태관리',
      'CSS Modules / Tailwind CSS 스타일링',
      'REST API 연동 (CRUD)',
      '폼 처리와 유효성 검사',
      '인증 기능 구현',
      'GitHub Pages / Vercel 배포',
    ],
  },
  {
    id: 'advanced',
    level: '고급',
    title: '프로덕션 React',
    description: '프로덕션 수준의 React 애플리케이션을 구축하기 위한 고급 기술을 학습합니다.',
    topics: [
      'TypeScript + React',
      '성능 최적화 (React.memo, 코드 분할)',
      '테스팅 (Vitest, Testing Library)',
      'Next.js 풀스택 개발',
      'CI/CD 파이프라인 구축',
      '접근성(a11y) & SEO 최적화',
      '디자인 시스템 구축',
    ],
  },
];
