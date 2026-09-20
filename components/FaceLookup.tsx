'use client';

import { useState } from 'react';
import { Upload, Search, ExternalLink, Image as ImageIcon } from 'lucide-react';

const FACE_ENGINES = [
  { name: 'PimEyes', url: 'https://pimeyes.com/', desc: 'Face search engine — reverse image across web' },
  { name: 'FaceCheck.id', url: 'https://facecheck.id/', desc: 'AI face search, social & web results' },
  { name: 'Yandex Images', url: 'https://yandex.com/images/', desc: 'Strong reverse image search, often finds faces' },
  { name: 'Google Lens', url: 'https://lens.google.com/', desc: 'Google visual search' },
  { name: 'TinEye', url: 'https://tineye.com/', desc: 'Classic reverse image' },
  { name: 'Social Searcher', url: 'https://www.social-searcher.com/', desc: 'Social media face / name cross' },
];

export default function FaceLookup() {
  const [preview, setPreview] = useState<string | null>(null);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    setPreview(url);
  };

  return (
    <div className="space-y-6">
      <div className="hex-card rounded-2xl p-6">
        <h2 className="font-display text-xl font-semibold mb-1 flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-hex-crimson" />
          Face Lookup
        </h2>
        <p className="text-xs text-hex-muted font-mono mb-5">
          upload a face → open engines. most require manual upload on their side (no public free API).
        </p>

        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-hex-smoke rounded-2xl cursor-pointer hover:border-hex-blood/50 transition-colors bg-hex-ash/30">
          {preview ? (
            <img src={preview} alt="preview" className="h-full object-contain rounded-xl" />
          ) : (
            <div className="flex flex-col items-center gap-2 text-hex-muted">
              <Upload className="w-8 h-8" />
              <span className="text-sm font-mono">drop face image or click</span>
            </div>
          )}
          <input type="file" accept="image/*" className="hidden" onChange={onFile} />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FACE_ENGINES.map((eng) => (
          <a
            key={eng.name}
            href={eng.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hex-card rounded-2xl p-5 flex flex-col hover:border-hex-blood group"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display font-semibold group-hover:text-hex-crimson transition-colors">{eng.name}</h3>
              <ExternalLink className="w-4 h-4 text-hex-muted group-hover:text-hex-crimson" />
            </div>
            <p className="text-xs text-hex-muted flex-1">{eng.desc}</p>
            <span className="mt-3 text-[10px] font-mono text-hex-crimson/80 uppercase tracking-wider">open engine →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
