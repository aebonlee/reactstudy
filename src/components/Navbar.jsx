import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiSun, FiMoon, FiMenu } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { path: '/', label: '홈' },
  { path: '/basics', label: 'React 기초' },
  { path: '/hooks', label: 'Hooks' },
  { path: '/state-routing', label: '상태관리 & 라우팅' },
  { path: '/styling', label: '스타일링' },
  { path: '/advanced', label: '심화학습' },
  { path: '/qna', label: 'Q&A' },
  { path: '/education', label: '교육과정' },
];

export default function Navbar() {
  const location = useLocation();
  const { isDark, toggleTheme, colorTheme, setColorTheme, COLORS, setSearchOpen, setMobileMenuOpen } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="brand-main">React</span>
          <span className="brand-accent">Study</span>
          <span className="brand-sub">리액트 학습</span>
        </Link>

        <div className="navbar-links">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="nav-action-btn" onClick={() => setSearchOpen(true)} title="검색 (Ctrl+K)">
            <FiSearch />
          </button>

          <button className="nav-action-btn" onClick={toggleTheme} title={isDark ? '라이트 모드' : '다크 모드'}>
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          <div className="color-picker">
            {COLORS.map(color => (
              <button
                key={color}
                className={`color-dot ${colorTheme === color ? 'active' : ''}`}
                style={{
                  background: {
                    blue: '#0046C8',
                    red: '#DC2626',
                    green: '#059669',
                    purple: '#7C3AED',
                    orange: '#EA580C',
                  }[color],
                }}
                onClick={() => setColorTheme(color)}
                title={color}
              />
            ))}
          </div>

          <button className="hamburger-btn" onClick={() => setMobileMenuOpen(true)}>
            <FiMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export { navItems };
