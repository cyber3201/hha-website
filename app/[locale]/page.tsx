import { NextSeo } from 'next-seo';
import Hero from '@/components/hero';
import Link from 'next/link';
import QuoteCard from '@/components/quote-card';
import { content } from '@/lib/content';

export default function HomePage() {
  return (
    <div>
      <NextSeo title="Holistic Health Academy" />
      <Hero title="Holistic Health Academy" cta={{ href: '/join-us', label: 'Join Us' }} />
      <section className="max-w-5xl mx-auto p-8 grid gap-8">
        <div>
          <h2 className="text-2xl font-serif mb-2">Mission</h2>
          <p>{content.mission.body.slice(0, 200)}...</p>
          <Link href="/mission" className="text-brand-500">
            Read more
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-serif mb-2">Vision</h2>
          <p>{content.vision.body.slice(0, 200)}...</p>
          <Link href="/vision" className="text-brand-500">
            Read more
          </Link>
        </div>
        <QuoteCard quote={content.presidentWord.body} author="President" />
      </section>
    </div>
  );
}
