import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactForm from '@/components/contact-form';

describe('ContactForm', () => {
  it('submits', async () => {
    render(<ContactForm />);
    fireEvent.input(screen.getByPlaceholderText('Name'), { target: { value: 'Jane' } });
    fireEvent.input(screen.getByPlaceholderText('Email'), { target: { value: 'jane@example.com' } });
    fireEvent.input(screen.getByPlaceholderText('Message'), { target: { value: 'Hello there message' } });
    fireEvent.click(screen.getByText('Send'));
    await waitFor(() => expect(screen.getByText(/Thanks for reaching out/i)).toBeInTheDocument());
  });
});
