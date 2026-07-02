import React, { useState } from 'react';
import { PricingCalculator } from '../components/PricingCalculator';
import { SITE } from '../siteConfig';

// PLACEHOLDER: swap in the deployed novallem-contact-relay Worker URL
// (e.g. 'https://novallem-contact-relay.<subdomain>.workers.dev').
const CONTACT_RELAY_URL = 'https://novallem-contact-relay.nealechristian4.workers.dev';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(CONTACT_RELAY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ site: 'novallem', name, email, business, message }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <section className="pt-40 pb-24 px-6 md:px-10">
        <h1 className="text-huge text-5xl md:text-7xl mb-4">Message sent</h1>
        <p className="text-white/50 max-w-lg">Thanks — we'll get back to you within 1 business day.</p>
      </section>
    );
  }

  return (
    <section className="pt-40 pb-24 px-6 md:px-10">
      <h1 className="text-huge text-5xl md:text-7xl mb-4">Let's talk</h1>
      <p className="text-white/40 max-w-lg mb-16">
        Estimate your project below, then send a message — no obligation, no pressure.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <PricingCalculator />

        <form className="border border-line p-8 md:p-12 bg-charcoal flex flex-col gap-5" onSubmit={handleSubmit}>
          <p className="text-label text-white/40 mb-2">Send a message</p>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30"
          />
          <input
            type="text"
            name="business"
            placeholder="Business name"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30"
          />
          <textarea
            name="message"
            placeholder="What do you need?"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30 resize-none"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="text-label border border-white/30 px-6 py-3 hover:bg-white hover:text-ink transition-colors self-start mt-2 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
          {status === 'error' && (
            <p className="text-red-400/80 text-xs">
              Something went wrong — email {SITE.email} directly instead.
            </p>
          )}
          <p className="text-white/30 text-xs">Goes straight to {SITE.email}.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
