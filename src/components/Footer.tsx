import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-line px-6 md:px-10 py-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div>
        <p className="text-huge text-3xl mb-2">Crestline Web Studio</p>
        <p className="text-white/40 text-sm">Tulsa, OK — websites for local businesses.</p>
      </div>
      <div className="flex gap-8 text-label text-white/40">
        <Link to="/work" className="hover:text-white transition-colors">Work</Link>
        <Link to="/journal" className="hover:text-white transition-colors">Journal</Link>
        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
      </div>
      <p className="text-white/30 text-xs">© {new Date().getFullYear()} Crestline Web Studio</p>
    </footer>
  );
};
