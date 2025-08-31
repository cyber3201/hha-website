import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  cta?: { href: string; label: string };
}

export default function Hero({ title, cta }: HeroProps) {
  return (
    <section className="text-center py-24 bg-gradient-to-br from-brand-500 to-accent text-white">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif">
        {title}
      </motion.h1>
      {cta && (
        <Link href={cta.href} className="mt-8 inline-block bg-white text-brand-700 px-6 py-3 rounded-full">
          {cta.label}
        </Link>
      )}
    </section>
  );
}
