import { content } from '@/lib/content';
import Breadcrumbs from '@/components/breadcrumbs';

export default function MissionPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <Breadcrumbs />
      <h1 className="text-3xl font-serif mb-4">{content.mission.title}</h1>
      <p>{content.mission.body}</p>
    </div>
  );
}
