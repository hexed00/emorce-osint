'use client';

import { useState } from 'react';
import { User, ExternalLink, Search, Terminal } from 'lucide-react';

export default function UsernamePanel() {
  const [username, setUsername] = useState('');

  const sherlockCmd = username.trim()
    ? `sherlock ${username.trim()} --print-found`
    : 'sherlock <username> --print-found';

  const openWhatsMyName = () => {
    const q = username.trim() || '';
    window.open(`https://whatsmyname.app/?q=${encodeURIComponent(q)}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="hex-card rounded-2xl p-6">
        <h2 className="font-display text-xl font-semibold mb-1 flex items-center gap-2">
          <User className="w-5 h-5 text-hex-crimson" />
          Username Recon
        </h2>
        <p className="text-xs text-hex-muted font-mono mb-5">
          sherlock + whatsmyname + social footprint
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-hex-muted" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="target username"
              className="hex-input w-full pl-10 pr-4 py-3 rounded-xl font-mono text-sm"
            />
          </div>
          <button onClick={openWhatsMyName} className="hex-btn px-6 py-3 rounded-xl text-xs font-mono tracking-wider uppercase flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5" />
            whatsmyname
          </button>
        </div>

        <div className="bg-black/60 border border-hex-smoke rounded-xl p-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-hex-muted mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>sherlock cli</span>
          </div>
          <code className="text-hex-crimson select-all">{sherlockCmd}</code>
          <p className="mt-3 text-[10px] text-hex-muted">
            install: pip install sherlock-project · or clone github.com/sherlock-project/sherlock
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="https://whatsmyname.app/" target="_blank" rel="noopener noreferrer" className="hex-card rounded-2xl p-5 group">
          <h3 className="font-display font-semibold group-hover:text-hex-crimson">WhatsMyName</h3>
          <p className="text-xs text-hex-muted mt-1">Web UI · hundreds of sites · instant results</p>
        </a>
        <a href="https://github.com/sherlock-project/sherlock" target="_blank" rel="noopener noreferrer" className="hex-card rounded-2xl p-5 group">
          <h3 className="font-display font-semibold group-hover:text-hex-crimson">Sherlock</h3>
          <p className="text-xs text-hex-muted mt-1">CLI · 400+ networks · self-hosted power</p>
        </a>
        <a href="https://namechk.com/" target="_blank" rel="noopener noreferrer" className="hex-card rounded-2xl p-5 group">
          <h3 className="font-display font-semibold group-hover:text-hex-crimson">Namechk</h3>
          <p className="text-xs text-hex-muted mt-1">Quick username availability across platforms</p>
        </a>
        <a href="https://knowem.com/" target="_blank" rel="noopener noreferrer" className="hex-card rounded-2xl p-5 group">
          <h3 className="font-display font-semibold group-hover:text-hex-crimson">KnowEm</h3>
          <p className="text-xs text-hex-muted mt-1">Brand & username search across social</p>
        </a>
      </div>
    </div>
  );
}
