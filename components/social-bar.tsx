import { Facebook, Instagram, Twitter } from 'lucide-react';

const socials = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' }
];

export default function SocialBar() {
  return (
    <ul className="flex gap-4">
      {socials.map(({ href, icon: Icon, label }) => (
        <li key={href}>
          <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
