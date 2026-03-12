import { useState } from 'react';
import Hero from '../components/Hero';
import CodeBlock from '../components/CodeBlock';
import { hooksTopics } from '../data/learningData';

export default function HooksGuide() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const topic = hooksTopics[selectedIndex];

  return (
    <>
      <Hero
        title="React Hooks"
        subtitle="useState, useEffect, useContext 등 React Hooks를 깊이 있게 학습합니다."
      />

      <div className="sub-nav">
        <div className="sub-nav-inner">
          {hooksTopics.map((t, i) => (
            <button
              key={i}
              className={`sub-nav-tab${selectedIndex === i ? ' active' : ''}`}
              onClick={() => setSelectedIndex(i)}
            >
              {t.title}
            </button>
          ))}
        </div>
      </div>

      <div className="main-section">
        <div className="topic-card">
          <div className="topic-card-header">
            <div className="topic-card-icon">{topic.icon}</div>
            <div className="topic-card-title">{topic.title}</div>
          </div>
          <div className="topic-card-body">
            <p>{topic.description}</p>
            {topic.content.map((section, idx) => (
              <div key={idx}>
                {section.subtitle && <h4>{section.subtitle}</h4>}
                {section.text && <p>{section.text}</p>}
                {section.items && (
                  <ul>
                    {section.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}
            {topic.code && (
              <CodeBlock code={topic.code} language={topic.codeLang || 'jsx'} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
