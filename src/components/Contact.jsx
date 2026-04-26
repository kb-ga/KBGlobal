import React, { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    requirement: 'Hyperscale Allocation'
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // 1. Save to inquiries collection for records
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        timestamp: serverTimestamp()
      });

      // 2. Write to mail collection to trigger the extension (Functionless Email)
      await addDoc(collection(db, 'mail'), {
        to: 'karthik@kb-ga.com',
        message: {
          subject: `New Gateway Inquiry from ${formData.name}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #2563eb;">New Gateway Inquiry</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Company:</strong> ${formData.company}</p>
              <p><strong>Requirement:</strong> ${formData.requirement}</p>
              <p style="color: #666; font-size: 12px; margin-top: 20px;">Submitted from Sovereign AI Gateway</p>
            </div>
          `,
        },
      });

      setStatus('success');
      setFormData({ name: '', company: '', email: '', requirement: 'Hyperscale Allocation' });
    } catch (error) {
      console.error("Error submitting inquiry: ", error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-glass)' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          <div className="animate-fade-in delay-100">
            <h2 className="title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: '1.1' }}>
              Initiate <span className="text-gradient-blue">Gateway</span> Activation
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '1.6' }}>
              Secure your sovereign infrastructure allocation. Connect with our deployment team to discuss your hyperscale or sovereign datacenter requirements.
            </p>
            
            {status === 'success' ? (
              <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', background: 'var(--bg-primary)', border: '1px solid var(--accent-gold)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Inquiry Received</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Our deployment team will contact you within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn btn-secondary" 
                  style={{ marginTop: '1.5rem' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', background: 'var(--bg-primary)' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontFamily: 'inherit' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com" 
                    style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontFamily: 'inherit' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Company / Organization</label>
                  <input 
                    type="text" 
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp" 
                    style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontFamily: 'inherit' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Requirement</label>
                  <select 
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontFamily: 'inherit' }}
                  >
                    <option>Hyperscale Allocation</option>
                    <option>Hardware Partnership / Manufacturing</option>
                    <option>Government / Sovereign Data Center</option>
                    <option>Other</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="btn btn-primary" 
                  style={{ marginTop: '1rem', padding: '1rem', fontSize: '1.1rem', opacity: status === 'loading' ? 0.7 : 1 }}
                >
                  {status === 'loading' ? 'Processing...' : 'Submit Inquiry'}
                </button>
                {status === 'error' && (
                  <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '0.5rem' }}>Failed to submit. Please try again or email us directly.</p>
                )}
              </form>
            )}
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