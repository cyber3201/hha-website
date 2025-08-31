interface QuoteCardProps {
  quote: string;
  author?: string;
}

export default function QuoteCard({ quote, author }: QuoteCardProps) {
  return (
    <blockquote className="p-6 bg-white dark:bg-neutral rounded-2xl shadow">
      <p className="italic">{quote}</p>
      {author && <footer className="mt-2 text-right">— {author}</footer>}
    </blockquote>
  );
}
