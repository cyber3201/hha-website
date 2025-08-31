import Breadcrumbs from '@/components/breadcrumbs';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <Breadcrumbs />
      <h1 className="text-3xl font-serif mb-4">Contact</h1>
      <ContactForm />
    </div>
  );
}
