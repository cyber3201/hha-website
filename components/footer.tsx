import SocialBar from './social-bar';

export default function Footer() {
  return (
    <footer className="bg-brand-700 text-white mt-12">
      <div className="max-w-7xl mx-auto p-6">
        <SocialBar />
        <p className="mt-4 text-sm">© {new Date().getFullYear()} Holistic Health Academy</p>
      </div>
    </footer>
  );
}
