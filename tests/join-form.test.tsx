import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import JoinForm from '@/components/join-form';

describe('JoinForm', () => {
  it('submits valid data', async () => {
    render(<JoinForm />);
    fireEvent.input(screen.getByPlaceholderText('Name'), { target: { value: 'John' } });
    fireEvent.input(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.input(screen.getByPlaceholderText('Area of interest'), { target: { value: 'Wellness' } });
    fireEvent.input(screen.getByPlaceholderText('Message'), { target: { value: 'Hello world message' } });
    global.fetch = vi.fn().mockResolvedValue({ ok: true }) as any;
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  });
});
