'use client';

import { useState } from 'react';
import { ExternalLink, Search, Copy, Check, User, Mail, Globe, Fingerprint, Eye, Database, Network, Shield, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Tool = {
  id: string;
  name: string;
  url: string;
  desc: string;
  category: string;
  badges: string[];
  supports: ('email' | 'username' | 'phone' | 'domain' | 'ip' | 'hash' | 'name')[];
  icon: React.ReactNode;
};

const TOOLS: Tool[] = [
  { id: 'dehashed', name: 'DeHashed', url: 'https://dehashed.com/', desc: 'Premium breach search. Emails, usernames, IPs, passwords, hashes.', category: 'breach', badges: ['api','live'], supports: ['email','username','phone','ip','hash'], icon: <Database className="w-5 h-5" /> },
  { id: 'intelx', name: 'Intelligence X', url: 'https://intelx.io/', desc: 'Darknet, leaks, whois, public data. Strong free tier.', category: 'breach', badges: ['free','live'], supports: ['email','username','domain','ip','phone'], icon: <Eye className="w-5 h-5" /> },
  { id: 'leakcheck', name: 'LeakCheck', url: 'https://leakcheck.io/', desc: 'Fast breach lookup by email/username.', category: 'breach', badges: ['api','live'], supports: ['email','username'], icon: <Fingerprint className="w-5 h-5" /> },
  { id: 'openarchivex', name: 'OpenArchiveX', url: 'https://openarchivex.net/', desc: 'Open archive of breaches & dumps.', category: 'breach', badges: ['free','live'], supports: ['email','username','domain'], icon: <Database className="w-5 h-5" /> },
  { id: 'snusbase', name: 'Snusbase', url: 'https://snusbase.com/', desc: 'Leak search. Combo lists, stealer logs, hashes.', category: 'breach', badges: ['api','live'], supports: ['email','username','hash'], icon: <Zap className="w-5 h-5" /> },
  { id: 'tracked', name: 'Tracked.sh', url: 'https://tracked.sh/', desc: 'Modern leak & stealer intelligence.', category: 'breach', badges: ['live'], supports: ['email','username'], icon: <Eye className="w-5 h-5" /> },
  { id: 'hudson', name: 'Hudson Rock', url: 'https://www.hudsonrock.com/', desc: 'Cavalier free stealer infection lookup.', category: 'stealer', badges: ['free','live'], supports: ['email','domain'], icon: <Shield className="w-5 h-5" /> },
  { id: 'hibp', name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/', desc: 'Check if email has been in known breaches.', category: 'breach', badges: ['free','api','live'], supports: ['email'], icon: <Mail className="w-5 h-5" /> },
  { id: 'breachdir', name: 'BreachDirectory', url: 'https://breachdirectory.org/', desc: 'Free breach search with password exposure.', category: 'breach', badges: ['free','live'], supports: ['email','username'], icon: <Database className="w-5 h-5" /> },
  { id: 'sherlock', name: 'Sherlock', url: 'https://github.com/sherlock-project/sherlock', desc: 'Hunt usernames across 400+ networks.', category: 'username', badges: ['free','ext'], supports: ['username'], icon: <User className="w-5 h-5" /> },
  { id: 'whatsmyname', name: 'WhatsMyName', url: 'https://whatsmyname.app/', desc: 'Username search across hundreds of sites.', category: 'username', badges: ['free','live'], supports: ['username'], icon: <User className="w-5 h-5" /> },
  { id: 'maltego', name: 'Maltego', url: 'https://www.maltego.com/', desc: 'Graph-based link analysis.', category: 'graph', badges: ['ext'], supports: ['email','domain','ip','name','phone'], icon: <Network className="w-5 h-5" /> },
  { id: 'spiderfoot', name: 'SpiderFoot', url: 'https://github.com/smicallef/spiderfoot', desc: 'Open-source OSINT automation. 200+ modules.', category: 'recon', badges: ['free','ext'], supports: ['domain','ip','email','username','name'], icon: <Globe className="w-5 h-5" /> },
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'breach', label: 'Breaches' },
  { id: 'stealer', label: 'Stealer' },
  { id: 'username', label: 'Username' },
  { id: 'graph', label: 'Graph' },
  { id: 'recon', label: 'Recon' },
];

export default function ToolsGrid() {
  const [query, setQuery] = useState('');
  const [queryType, setQueryType] = useState<'email' | 'username' | 'phone' | 'domain' | 'ip' | 'hash' | 'name'>('email');
  const [cat, setCat] = useState('all');
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = TOOLS.filter((t) => cat === 'all' || t.category === cat);

  const openTool = (tool: Tool) => {
    let target = tool.url;
    if (query.trim()) {
      if (tool.id === 'hibp') target = `https://haveibeenpwned.com/account/${encodeURIComponent(query.trim())}`;
      else if (tool.id === 'intelx') target = `https://intelx.io/?s=${encodeURIComponent(query.trim())}`;
      else if (tool.id === 'leakcheck') target = `https://leakcheck.io/search?query=${encodeURIComponent(query.trim())}`;
      else if (tool.id === 'snusbase') target = `https://snusbase.com/search?q=${encodeURIComponent(query.trim())}`;
      else if (tool.id === 'dehashed') target = `https://app.dehashed.com/search?query=${encodeURIComponent(query.trim())}`;
      else if (tool.id === 'whatsmyname') target = `https://whatsmyname.app/?q=${encodeURIComponent(query.trim())}`;
      else if (tool.id === 'hudson') target = `https://www.hudsonrock.com/search?email=${encodeURIComponent(query.trim())}`;
      else if (tool.id === 'breachdir') target = `https://breachdirectory.org/?s=${encodeURIComponent(query.trim())}`;
    }
    window.open(target, '_blank', 'noopener,noreferrer');
  };

  const copyQuery = () => {
    navigator.clipboard.writeText(query);
    setCopied('q');
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="space-y-6">
      <div className="hex-card rounded-2xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-hex-muted" />
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="email · username · phone · domain · ip · hash..." className="hex-input w-full pl-10 pr-4 py-3 rounded-xl font-mono text-sm" />
          </div>
          <select value={queryType} onChange={(e) => setQueryType(e.target.value as any)} className="hex-input px-4 py-3 rounded-xl font-mono text-sm min-w-[140px]">
            <option value="email">Email</option>
            <option value="username">Username</option>
            <option value="phone">Phone</option>
            <option value="domain">Domain</option>
            <option value="ip">IP</option>
            <option value="hash">Hash</option>
            <option value="name">Name</option>
          </select>
        </div>
        <p className="text-[11px] text-hex-muted font-mono">enter a target → click any engine below. deep-links fire when supported.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all ${cat === c.id ? 'bg-hex-blood/30 text-hex-crimson border border-hex-blood/50 tab-active' : 'bg-hex-ash/60 text-hex-muted border border-transparent hover:border-hex-smoke'}`}>
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((tool, i) => (
            <motion.div key={tool.id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ delay: i * 0.03 }} className="hex-card rounded-2xl p-5 flex flex-col group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-hex-ash flex items-center justify-center text-hex-crimson border border-hex-smoke/60">{tool.icon}</div>
                  <div>
                    <h3 className="font-display font-semibold text-hex-bone group-hover:text-hex-crimson transition-colors">{tool.name}</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {tool.badges.map((b) => (
                        <span key={b} className={`tool-badge ${b === 'live' ? 'badge-live' : b === 'api' ? 'badge-api' : b === 'free' ? 'badge-free' : 'badge-ext'}`}>{b}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-hex-muted leading-relaxed mb-4 flex-1">{tool.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {tool.supports.map((s) => (
                  <span key={s} className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-hex-ash text-hex-muted border border-hex-smoke/40">{s}</span>
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={() => openTool(tool)} className="hex-btn flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase">
                  <ExternalLink className="w-3.5 h-3.5" /> open
                </button>
                {query.trim() && (
                  <button onClick={copyQuery} className="px-3 rounded-xl border border-hex-smoke bg-hex-ash/80 text-hex-muted hover:text-hex-bone hover:border-hex-blood/40 transition-colors" title="copy query">
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
