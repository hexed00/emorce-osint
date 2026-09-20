'use client';

import { useState } from 'react';
import ToolsGrid from './ToolsGrid';
import FaceLookup from './FaceLookup';
import UsernamePanel from './UsernamePanel';
import { Database, User, Image, Network, BookOpen } from 'lucide-react';

const TABS = [
  { id: 'engines', label: 'Engines', icon: <Database className="w-4 h-4" /> },
  { id: 'username', label: 'Username', icon: <User className="w-4 h-4" /> },
  { id: 'face', label: 'Face', icon: <Image className="w-4 h-4" /> },
  { id: 'graph', label: 'Graph / Recon', icon: <Network className="w-4 h-4" /> },
  { id: 'guide', label: 'Playbook', icon: <BookOpen className="w-4 h-4" /> },
];

export default function Tabs() {
  const [tab, setTab] = useState('engines');

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 flex-1 w-full">
      <div className="flex flex-wrap gap-1 mb-8 border-b border-hex-smoke/40 pb-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all ${
              tab === t.id
                ? 'text-hex-crimson tab-active'
                : 'text-hex-muted hover:text-hex-bone'
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'engines' && <ToolsGrid />}
      {tab === 'username' && <UsernamePanel />}
      {tab === 'face' && <FaceLookup />}
      {tab === 'graph' && (
        <div className="space-y-6">
          <div className="hex-card rounded-2xl p-6">
            <h2 className="font-display text-xl font-semibold mb-2">Graph & Automation</h2>
            <p className="text-sm text-hex-muted mb-6">
              Link analysis and automated recon. These run best self-hosted or as desktop apps.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="https://www.maltego.com/" target="_blank" rel="noopener noreferrer" className="hex-card rounded-xl p-5 border border-hex-smoke hover:border-hex-blood block">
                <h3 className="font-semibold text-hex-crimson mb-1">Maltego</h3>
                <p className="text-xs text-hex-muted">Graph link analysis. Transforms for domains, people, social, darknet. CE free edition available.</p>
              </a>
              <a href="https://github.com/smicallef/spiderfoot" target="_blank" rel="noopener noreferrer" className="hex-card rounded-xl p-5 border border-hex-smoke hover:border-hex-blood block">
                <h3 className="font-semibold text-hex-crimson mb-1">SpiderFoot</h3>
                <p className="text-xs text-hex-muted">200+ modules. Scan domain / IP / email / username. Docker or local. Full OSINT automation.</p>
              </a>
              <a href="https://github.com/laramies/theHarvester" target="_blank" rel="noopener noreferrer" className="hex-card rounded-xl p-5 border border-hex-smoke hover:border-hex-blood block">
                <h3 className="font-semibold text-hex-crimson mb-1">theHarvester</h3>
                <p className="text-xs text-hex-muted">Emails, subdomains, hosts, employee names from public sources.</p>
              </a>
              <a href="https://github.com/lanmaster53/recon-ng" target="_blank" rel="noopener noreferrer" className="hex-card rounded-xl p-5 border border-hex-smoke hover:border-hex-blood block">
                <h3 className="font-semibold text-hex-crimson mb-1">Recon-ng</h3>
                <p className="text-xs text-hex-muted">Modular recon framework. Web interface + CLI.</p>
              </a>
            </div>
          </div>
        </div>
      )}
      {tab === 'guide' && (
        <div className="space-y-6">
          <div className="hex-card rounded-2xl p-6">
            <h2 className="font-display text-xl font-semibold mb-4">Emorce OSINT Playbook</h2>
            <div className="space-y-5 text-sm text-hex-bone/90 leading-relaxed">
              <div>
                <h3 className="font-mono text-hex-crimson text-xs uppercase tracking-wider mb-2">1 · Target intake</h3>
                <p className="text-hex-muted">Start with email or username. If only a name, pivot through social first (WhatsMyName / Sherlock).</p>
              </div>
              <div>
                <h3 className="font-mono text-hex-crimson text-xs uppercase tracking-wider mb-2">2 · Breach sweep</h3>
                <p className="text-hex-muted">HIBP → LeakCheck → DeHashed → Snusbase → IntelX → BreachDirectory. Note passwords, old aliases, linked phones.</p>
              </div>
              <div>
                <h3 className="font-mono text-hex-crimson text-xs uppercase tracking-wider mb-2">3 · Stealer check</h3>
                <p className="text-hex-muted">Hudson Rock Cavalier free lookup. Confirms if credentials appeared in recent stealer logs.</p>
              </div>
              <div>
                <h3 className="font-mono text-hex-crimson text-xs uppercase tracking-wider mb-2">4 · Username footprint</h3>
                <p className="text-hex-muted">WhatsMyName + Sherlock. Collect profiles, then reverse image any avatars (PimEyes / FaceCheck).</p>
              </div>
              <div>
                <h3 className="font-mono text-hex-crimson text-xs uppercase tracking-wider mb-2">5 · Graph expand</h3>
                <p className="text-hex-muted">Maltego or SpiderFoot for domain / IP / related entities. Build the link map.</p>
              </div>
              <div>
                <h3 className="font-mono text-hex-crimson text-xs uppercase tracking-wider mb-2">6 · Archive & document</h3>
                <p className="text-hex-muted">Screenshot everything. Note sources and dates. OpenArchiveX for historical dumps.</p>
              </div>
            </div>
          </div>
          <div className="hex-card rounded-2xl p-5 border border-hex-blood/30">
            <p className="text-xs font-mono text-hex-muted">
              all engines linked here are third-party. respect their terms. this vault is a launcher + playbook for the emorce circle.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
