import React, { useState } from 'react';
import { PricingCalculator } from '../components/PricingCalculator';

// PLACEHOLDER: replace with your real Calendly link (Phase 1 Step 3.2.4).
const CALENDLY_URL = 'https://calendly.com/your-handle/intro-call';

export const Contact: React.FC = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section className="pt-40 pb-24 px-6 md:px-10">
      <h1 className="text-huge text-5xl md:text-7xl mb-4">Let's talk</h1>
      <p className="text-white/40 max-w-lg mb-16">
        Estimate your project below, then book a 15-minute call — no obligation, no pressure.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <PricingCalculator />

        <form
          className="border border-line p-8 md:p-12 bg-charcoal flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-label text-white/40 mb-2">Send a message</p>
          <input
            type="text"
            placeholder="Your name"
            className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30"
          />
          <input
            type="text"
            placeholder="Business name"
            className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30"
          />
          <textarea
            placeholder="What do you need?"
            rows={4}
            className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30 resize-none"
          />
          <button
            type="submit"
            className="text-label border border-white/30 px-6 py-3 hover:bg-white hover:text-ink transition-colors self-start mt-2"
          >
            Send
          </button>
        </form>
      </div>

      <div className="border border-line bg-charcoal p-8 md:p-12">
        <div className="flex items-baseline justify-between mb-6">
          <p className="text-label text-white/40">Or book directly</p>
          {!showCalendly && (
            <button
              onClick={() => setShowCalendly(true)}
              className="text-label border border-white/30 px-5 py-2 hover:bg-white hover:text-ink transition-colors"
            >
              Open scheduler
            </button>
          )}
        </div>
        {showCalendly && (
          <iframe
            src={CALENDLY_URL}
            title="Schedule a call"
            className="w-full h-[640px] border-0"
          />
        )}
      </div>
    </section>
  );
};

export default Contact;
