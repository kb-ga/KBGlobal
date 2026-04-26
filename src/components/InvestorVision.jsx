import React from 'react';

export default function InvestorVision() {
  const metrics = [
    { value: '100+', label: 'Strategic Collaborations', description: 'Establishing a massive, interconnected network of manufacturing and technology partners globally.' },
    { value: 'Distributed', label: 'Resilient Supply Chain', description: 'Building a robust, de-risked infrastructure that eliminates single points of failure.' },
    { value: 'Sovereign', label: 'Local Execution', description: 'Ensuring absolute compliance, data security, and localized production capabilities.' },
    { value: 'Scale', label: 'For the AI Era', description: 'Rapidly expanding hardware and compute capacity to meet the exponential demands of LLMs.' }
  ];

  const focuses = [
    {
      title: 'Monetizing the Manufacturing White Space',
      description: 'While tech software captures the bulk of institutional capital, the physical hardware enabling AI is severely underfunded. We offer first-mover advantage into this massive, high-barrier, and highly profitable underserved market.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '32px', height: '32px' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'High-Yield Core Value Chains',
      description: 'We strategically allocate capital across mission-critical, high-growth sectors—Semiconductors, Electronics, Data Centers, and Industrial Automation—focusing on asymmetric upside with strong downside protection.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '32px', height: '32px' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: 'Capitalizing on Global Thematic Shifts',
      description: 'We leverage massive geopolitical macro tailwinds. The forced "China + N" supply chain decoupling and the urgent global race for sovereign import substitution guarantee long-term, structural demand for our investments.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '32px', height: '32px' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="investors" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden', padding: '3rem 0' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header */}
        <div className="text-center animate-fade-in" style={{ marginBottom: '2rem' }}>
          <h2 className="title" style={{ fontSize: 'clamp(2.2rem, 3vw, 2.8rem)', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Value Proposition for <span className="text-gradient-blue">Investors</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '900px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.5' }}>
            We are setting up <strong>100+ elite collaborations</strong> to create a fully distributed, sovereign supply chain. In the current era of exponential AI growth, relying on centralized, legacy infrastructure is a critical vulnerability. Our blueprint decentralizes manufacturing, securing the hardware ecosystem required to power the future.
          </p>
        </div>

        {/* Vision Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className={`glass-card animate-fade-in delay-${(idx + 1) * 100}`} 
              style={{ 
                padding: '1.5rem', 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                borderTop: idx % 2 === 0 ? '4px solid var(--accent-gold)' : '4px solid var(--accent-blue)',
                transition: 'transform 0.3s ease',
                cursor: 'default',
                background: 'var(--bg-primary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} 
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: metric.value === '100+' ? '2.5rem' : '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', lineHeight: 1 }}>
                {metric.value}
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 700 }}>{metric.label}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.4' }}>{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Strategy Grid */}
        <div className="animate-fade-in delay-100" style={{ margin: '0 auto' }}>
          
          <h3 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.6rem)', color: 'var(--text-primary)', marginBottom: '2rem', fontWeight: 700, textAlign: 'center', lineHeight: '1.4' }}>
            Deploying strategic capital into the Sovereign AI architecture.
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
            {focuses.map((focus, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', background: 'var(--bg-primary)', padding: '1.75rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(37,99,235,0.02))', 
                  borderRadius: '12px',
                  color: 'var(--accent-blue)'
                }}>
                  {focus.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>{focus.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>{focus.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
