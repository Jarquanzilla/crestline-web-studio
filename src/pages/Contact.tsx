import React, { useState } from 'react';
import { PricingCalculator } from '../components/PricingCalculator';
import { SITE } from '../siteConfig';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New inquiry from ${business || name || 'your site'}`;
    const body = `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\n\n${message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30"
          />
          <input
            type="text"
            placeholder="Business name"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30"
          />
          <textarea
            placeholder="What do you need?"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30 resize-none"
          />
          <button
            type="submit"
            className="text-label border border-white/30 px-6 py-3 hover:bg-white hover:text-ink transition-colors self-start mt-2"
          >
            Send
          </button>
          <p className="text-white/30 text-xs">Opens your email client, addressed to {SITE.email}.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
