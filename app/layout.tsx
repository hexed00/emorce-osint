import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EMORCE OSINT · Vault',
  description: 'Full spectrum intelligence arsenal — breaches, usernames, faces, leaks, recon',
  icons: { icon: '/icon.jpg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
