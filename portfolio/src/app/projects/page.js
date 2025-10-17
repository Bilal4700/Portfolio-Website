const projects = [
  {
    slug: "professor-review-platform",
    title: "RateMyDino — Professor Review Platform",
    excerpt: "Flask REST API + Next.js UI with AI-generated summaries."
  },
  {
    slug: "movie-theatre-booking",
    title: "AcmePlex — Movie Theatre Booking",
    excerpt: "Spring Boot backend with React UI and MySQL."
  },
  {
    slug: "calgary-subway-gui",
    title: "Calgry LRT SIM — Transit Display GUI",
    excerpt: "Java GUI with MySQL, live data and ads integration."
  },
  {
    slug: "defi-stablecoin",
    title: "DeFi Stablecoin — Smart Contract",
    excerpt: "Solidity on Sepolia with oracles and liquidation engine."
  }
];

export const metadata = {
  title: "Projects | Muhammad Bilal",
  description: "A collection of selected projects with details and media."
};

export default function ProjectsIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.slug} className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-4">
            <a className="block hover:underline" href={`/projects/${p.slug}`}>
              <div className="text-base font-medium">{p.title}</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">{p.excerpt}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


