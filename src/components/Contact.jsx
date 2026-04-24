import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-glass)' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          <div className="animate-fade-in delay-100">
            <h2 className="title" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Initiate <span className="text-gradient-blue">Gateway</span> Activation
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem' }}>
              Secure your sovereign infrastructure allocation. Connect with our deployment team to discuss your hyperscale or sovereign datacenter requirements.
            </p>
            
            <form className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', background: 'var(--bg-primary)' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Company / Organization</label>
                <input type="text" placeholder="Acme Corp" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Requirement</label>
                <select style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontFamily: 'inherit' }}>
                  <option>Hyperscale Allocation</option>
                  <option>Hardware Partnership / Manufacturing</option>
                  <option>Government / Sovereign Data Center</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem', fontSize: '1.1rem' }}>
                Submit Inquiry
              </button>
            </form>
          </div>
          
          <div className="animate-fade-in delay-200" style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
            <img 
              src="/new_pdf_images/slide_14.png" 
              alt="Gateway Activation" 
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}