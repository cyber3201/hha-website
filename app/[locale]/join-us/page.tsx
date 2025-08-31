import Breadcrumbs from '@/components/breadcrumbs';
import JoinForm from '@/components/join-form';

export default function JoinUsPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <Breadcrumbs />
      <h1 className="text-3xl font-serif mb-4">Join Us</h1>
      <JoinForm />
    </div>
  );
}
