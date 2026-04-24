import React from 'react';

export default function AdvisoryKBGA() {
  return (
    <section id="advisory" className="section" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="text-center animate-fade-in" style={{ marginBottom: '4rem' }}>
          <h2 className="title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Strategic <span className="text-gradient-gold">Advisory</span>
          </h2>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>
            Global Advisors. Local Knowledge.
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '850px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
            KB Global Advisors (KBGA) is our dedicated strategic advisory arm. We bridge the gap between high-level international strategy and on-the-ground execution. Our network of distinguished advisors provides unparalleled insights, ensuring that global sovereign AI initiatives succeed within complex, local geopolitical and regulatory landscapes.
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem', fontSize: '1.1rem', borderRadius: '8px', display: 'inline-block' }}>
              Talk to us
            </a>
          </div>
        </div>

        <div className="grid-2" style={{ gap: '2rem' }}>
          <div 
            className="glass-card animate-fade-in delay-100" 
            style={{ 
              padding: '2.5rem', 
              borderTop: '3px solid var(--accent-blue)', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              transition: 'transform 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} 
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ 
              width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(37,99,235,0.02))', 
              borderRadius: '12px', color: 'var(--accent-blue)', marginBottom: '0.5rem' 
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '32px', height: '32px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 700 }}>Global Perspective</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              We design macroeconomic, geopolitical, and technological roadmaps that position our partners at the forefront of the global Sovereign AI movement.
            </p>
          </div>

          <div 
            className="glass-card animate-fade-in delay-200" 
            style={{ 
              padding: '2.5rem', 
              borderTop: '3px solid var(--accent-gold)', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              transition: 'transform 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} 
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ 
              width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              background: 'linear-gradient(135deg, rgba(180,83,9,0.1), rgba(180,83,9,0.02))', 
              borderRadius: '12px', color: 'var(--accent-gold)', marginBottom: '0.5rem' 
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '32px', height: '32px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 700 }}>Local Intelligence</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Our regional experts hold deep operational, legal, and cultural knowledge, ensuring frictionless integration and compliance within specific sovereign borders.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
