import React from 'react';

export default function AboutKBGH() {
  const steps = [
    {
      id: 6,
      title: 'Advisory',
      description: 'Strategic global advisors providing localized knowledge and execution capabilities.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '100%', height: '100%' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 1,
      title: 'Distribution',
      description: 'Instant integration into our established vendor ecosystem.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '100%', height: '100%' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Licensing',
      description: 'Monetize proprietary tech within our secure legal framework.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '100%', height: '100%' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Tech Transfer',
      description: 'Seamless migration of technical IP into sovereign zones.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '100%', height: '100%' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Joint Ventures',
      description: 'Shared equity structures utilizing our Singapore hub.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '100%', height: '100%' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Manufacturing Collaborations',
      description: 'Direct operational integration inside KBGH "local secure clusters".',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '100%', height: '100%' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  return (
    <section id="capabilities" style={{ padding: '4rem 0', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Orbs */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37,99,235,0.03) 0%, rgba(248,250,252,0) 70%)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(180,83,9,0.03) 0%, rgba(248,250,252,0) 70%)', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          {/* Left Side: Proposition Text */}
          <div className="animate-fade-in delay-100">
            <h2 className="title" style={{ fontSize: 'clamp(2.5rem, 3.5vw, 3rem)', marginBottom: '1.2rem', color: 'var(--text-primary)', lineHeight: '1.1' }}>
              <span className="text-gradient-blue">What do we do?</span>
            </h2>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500, borderLeft: '3px solid var(--accent-gold)', paddingLeft: '1rem' }}>
              Sovereign Infrastructure. <br/>Frictionless Execution.
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
              <strong>KB Global Holdings, Inc. (KBGH)</strong> optimizes the components supply chain and ecosystem to scale compute capacity for AI datacenters and nascent technologies.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              We provide a frictionless partnership model that de-risks the roadmap for component manufacturers, guaranteeing compliant entry into new markets, large-scale demand, and global growth. We invite Taiwanese manufacturing leaders to integrate their proprietary technology into our fully shielded global ecosystem.
            </p>
          </div>

          {/* Right Side: Partnership Cards Grid */}
          <div className="animate-fade-in delay-200" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1rem' }}>
            {steps.map((step, idx) => (
              <div 
                key={step.id} 
                className="glass-card" 
                style={{ 
                  padding: '1.25rem', 
                  borderTop: '3px solid var(--accent-blue)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.75rem',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }} 
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                }} 
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    width: '36px', 
                    height: '36px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(37,99,235,0.02))', 
                    borderRadius: '8px',
                    color: 'var(--accent-blue)'
                  }}>
                    {step.icon}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 700, margin: 0 }}>{step.title}</h4>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.4', margin: 0 }}>{step.description}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Collaboration in a Box Slide */}
        <div className="animate-fade-in delay-300" style={{ marginTop: '5rem', padding: '1rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem', textAlign: 'center' }}>
            Collaboration in a <span className="text-gradient-blue">Box</span>
          </h3>
          <img 
            src="/new_pdf_images/slide_11.png" 
            alt="Collaboration in a Box" 
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px', mixBlendMode: 'multiply' }}
          />
        </div>

      </div>
    </section>
  );
}