'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-4">
      <ol className="flex flex-wrap gap-1">
        <li>
          <Link href="/" className="text-brand-500">Home</Link>
        </li>
        {segments.map((segment, i) => {
          const href = '/' + segments.slice(0, i + 1).join('/');
          return (
            <li key={href} className="flex items-center gap-1">
              <span>/</span>
              <Link href={href}>{segment}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
