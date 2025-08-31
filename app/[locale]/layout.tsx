import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Holistic Health Academy'
};

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  const dir = params.locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={params.locale} dir={dir}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <a href="#content" className="sr-only focus:not-sr-only">
            Skip to content
          </a>
          <Header />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
