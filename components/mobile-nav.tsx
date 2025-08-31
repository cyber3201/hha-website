'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface MobileNavProps {
  items: { href: string; label: string }[];
  onClose: () => void;
}

export default function MobileNav({ items, onClose }: MobileNavProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-white dark:bg-neutral p-6">
      <button onClick={onClose} aria-label="Close Menu" className="mb-4">
        <X />
      </button>
      <nav className="flex flex-col gap-4">
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose} className="text-lg">
            {item.label}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}
