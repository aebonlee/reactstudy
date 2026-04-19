import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiSun, FiMoon, FiMenu, FiLogIn, FiLogOut } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/basics', label: 'React 기초' },
  { path: '/hooks', label: 'Hooks' },
  { path: '/state-routing', label: '상태관리 & 라우팅' },
  { path: '/styling', label: '스타일링' },
  { path: '/advanced', label: '심화학습' },
  { path: '/qna', label: 'Q&A' },
  { path: '/education', label: '교육과정' },
];

const colorMap: Record<string, string> = {
  blue: '#0046C8',
  red: '#DC2626',
  green: '#059669',
  purple: '#7C3AED',
  orange: '#EA580C',
};

export default function Navbar(): React.ReactElement {
  const location = useLocation();
  const { isDark, toggleTheme, colorTheme, setColorTheme, COLORS, setSearchOpen, setMobileMenuOpen } = useTheme();
  const { isAuthenticated, logout, user } = useAuth();
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

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

          <div
            className="color-picker-wrap"
            onMouseEnter={() => setColorPickerOpen(true)}
            onMouseLeave={() => setColorPickerOpen(false)}
          >
            <button
              className="color-picker-trigger"
              style={{ background: colorMap[colorTheme] || '#0046C8' }}
              title="테마 색상"
              onClick={() => setColorPickerOpen(v => !v)}
            />
            {colorPickerOpen && (
              <div className="color-picker-popup">
                {COLORS.map(color => (
                  <button
                    key={color}
                    className={`color-dot ${colorTheme === color ? 'active' : ''}`}
                    style={{ background: colorMap[color] || '#0046C8' }}
                    onClick={() => { setColorTheme(color); setColorPickerOpen(false); }}
                    title={color}
                  />
                ))}
              </div>
            )}
          </div>

          {isAuthenticated ? (
            <button className="nav-action-btn" onClick={() => logout()} title={`로그아웃 (${user?.email ?? ''})`}>
              <FiLogOut />
            </button>
          ) : (
            <Link to="/login" className="nav-action-btn" title="로그인">
              <FiLogIn />
            </Link>
          )}

          <button className="hamburger-btn" onClick={() => setMobileMenuOpen(true)}>
            <FiMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export { navItems };
export type { NavItem };
