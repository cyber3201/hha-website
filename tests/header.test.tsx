import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '@/components/header';
import { NextIntlClientProvider } from 'next-intl';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <NextIntlClientProvider locale="en" messages={{}}>{children}</NextIntlClientProvider>;
}

describe('Header', () => {
  it('renders navigation', () => {
    render(<Header />, { wrapper: Wrapper });
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
