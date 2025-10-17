export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[.08] dark:border-white/[.145] mt-10">
      <div className="max-w-5xl mx-auto px-6 py-6 text-xs text-neutral-500 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Muhammad Bilal</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}


