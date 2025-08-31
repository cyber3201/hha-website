'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    setSubmitted(true);
  };

  if (submitted) return <p>Thanks for reaching out.</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('name')} placeholder="Name" className="w-full p-2 border rounded" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <input {...register('email')} placeholder="Email" className="w-full p-2 border rounded" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <textarea {...register('message')} placeholder="Message" className="w-full p-2 border rounded" />
      {errors.message && <p className="text-red-500">{errors.message.message}</p>}
      <button disabled={isSubmitting} className="bg-brand-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  );
}
