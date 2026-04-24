import React from 'react';
import Hero from './components/Hero';
import AdvisoryKBGA from './components/AdvisoryKBGA';
import AboutKBGH from './components/AboutKBGH';
import InvestorVision from './components/InvestorVision';

import Contact from './components/Contact';


function App() {
  return (
    <>
      <header style={{ padding: '0.5rem 2rem', borderBottom: '1px solid var(--border-glass)', background: 'var(--bg-glass)', backdropFilter: 'blur(12px)', position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ fontWeight: '700', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
              KB Global <span style={{ color: 'var(--accent-gold)' }}>Holdings</span>
            </div>
          </div>
          <nav className="desktop-nav" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#capabilities" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--text-primary)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>What do we do?</a>
            <a href="#investors" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--text-primary)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>Investors</a>
            <a href="#advisory" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--text-primary)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>Advisory</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', borderRadius: '6px' }}>Contact</a>
          </nav>
        </div>
      </header>

      <main style={{ paddingTop: '100px', overflowX: 'hidden' }}>
        <Hero />
        <AboutKBGH />
        <AdvisoryKBGA />
        <InvestorVision />
        <Contact />
      </main>

      <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--border-glass)', color: 'var(--text-secondary)', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <img 
            src="/logo_transparent.png" 
            alt="KBGA Logo" 
            style={{ height: '60px', objectFit: 'contain', opacity: 0.8 }} 
          />
          <p>&copy; {new Date().getFullYear()} KB Global Holdings (KBGH). Sovereign AI Blueprint.</p>
        </div>
      </footer>
    </>
  );
}

export default App;