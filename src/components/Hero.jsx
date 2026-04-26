import React from 'react';
import newLogo from '../assets/new_logo.png';

export default function Hero() {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', padding: '8rem 0 4rem' }}>
      {/* Background glow effects */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '1000px', height: '1000px', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, rgba(248,250,252,0) 60%)', zIndex: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', top: '0', right: '0', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(180,83,9,0.04) 0%, rgba(248,250,252,0) 60%)', zIndex: 0, pointerEvents: 'none' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          <style>
            {`
              @keyframes floatLogo {
                0% { transform: translateY(0px); opacity: 0; }
                20% { opacity: 1; }
                50% { transform: translateY(-15px); opacity: 1; }
                100% { transform: translateY(0px); opacity: 1; }
              }
              .hero-logo {
                animation: floatLogo 6s ease-in-out infinite;
              }
            `}
          </style>
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src={newLogo} 
              alt="KBGH Logo" 
              className="hero-logo" 
              style={{ height: 'clamp(100px, 15vw, 160px)', objectFit: 'contain', marginBottom: '2rem', mixBlendMode: 'multiply' }} 
            />
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', background: 'rgba(212, 175, 55, 0.08)', padding: '0.6rem 1.5rem', borderRadius: '40px', border: '1px solid rgba(180, 83, 9, 0.3)', backdropFilter: 'blur(5px)' }}>
              <span style={{ color: 'var(--accent-gold)', fontWeight: 600, letterSpacing: '1px', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', textTransform: 'uppercase', textAlign: 'center' }}>Architecting Sovereign AI Infrastructure</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: '1.05', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>
              Sovereign <span className="text-gradient-blue">AI Blueprint</span>
            </h1>
            
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem auto', lineHeight: '1.6', padding: '0 1rem' }}>
              Optimizing the global supply chain to exponentially increase compute capacity for AI datacenters through sovereign manufacturing.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#capabilities" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '50px', background: 'linear-gradient(135deg, var(--accent-blue), #1e40af)', boxShadow: '0 10px 25px rgba(37,99,235,0.3)', minWidth: '250px' }}>Discover the Blueprint</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}