import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ContactForm from '@/components/contact-form';

describe('ContactForm', () => {
  it('submits', async () => {
    render(<ContactForm />);
    fireEvent.input(screen.getByPlaceholderText('Name'), { target: { value: 'Jane' } });
    fireEvent.input(screen.getByPlaceholderText('Email'), { target: { value: 'jane@example.com' } });
    fireEvent.input(screen.getByPlaceholderText('Message'), { target: { value: 'Hello there message' } });
    global.fetch = vi.fn().mockResolvedValue({ ok: true }) as any;
    fireEvent.click(screen.getByText('Send'));
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  });
});
