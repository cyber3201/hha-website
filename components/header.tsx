'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import MobileNav from './mobile-nav';
import ThemeToggle from './theme-toggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/mission', label: 'Mission' },
  { href: '/vision', label: 'Vision' },
  { href: '/president-word', label: "President's Word" },
  { href: '/about', label: 'About' },
  { href: '/join-us', label: 'Join Us' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-neutral/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center"><Image src='/logo.svg' alt='Holistic Health Academy' width={120} height={40}/></Link>
        <nav className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-brand-500 ${pathname === item.href ? 'text-brand-500 font-semibold' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open Menu">
            <Menu />
          </button>
        </div>
      </div>
      {open && <MobileNav items={navItems} onClose={() => setOpen(false)} />}
    </header>
  );
}
