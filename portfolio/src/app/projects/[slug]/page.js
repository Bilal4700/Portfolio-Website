const PROJECTS = {
  "professor-review-platform": {
    title: "RateMyDino — Professor Review Platform",
    description:
      "Full‑stack app: Flask REST API, Next.js frontend, BeautifulSoup scraping, and AI‑generated summaries.",
    mediaType: "video",
    // TODO: Place video at public/videos/RateMyDino.mp4
    videoSrc: "/videos/RateMyDino.mp4",
    overview:
      "Developed a full‑stack platform to collect and summarize professor reviews. The backend scrapes RateMyProf data and exposes a clean REST API; the frontend offers fast search and readable AI summaries.",
    tech: ["Flask", "Next.js", "MySQL", "BeautifulSoup", "OpenAI"],
    features: [
      "Scrapes and normalizes reviews into a relational schema",
      "REST API consumed by a Next.js frontend",
      "LLM powered summaries to improve readability"
    ]
  },
  "movie-theatre-booking": {
    title: "AcmePlex — Movie Theatre Booking",
    description:
      "Spring Boot backend, React UI, and MySQL with auth, seat booking, and ticket management.",
    mediaType: "video",
    // TODO: Place video at public/videos/AcmePlex.mp4
    videoSrc: "/videos/AcmePlex.mp4",
    overview:
      "A responsive ticketing app supporting seat selection, authentication‑gated content, and robust booking flows with edit/cancel and double‑booking prevention.",
    tech: ["Spring Boot", "React", "MySQL", "Auth"],
    features: [
      "Auth‑based access control for exclusive content",
      "Atomic booking flow persists seat and ticket",
      "Edit/cancel with consistency safeguards"
    ]
  },
  "calgary-subway-gui": {
    title: "Calgary LRT SIM — Transit Display GUI",
    description:
      "Java Swing UI (JFrame/JPanel) with MySQL via JDBC, live data, ads, weather and news integration.",
    mediaType: "video",
    // TODO: Place video at public/videos/Calgary_LRT_SIM.mp4
    videoSrc: "/videos/Calgary_LRT_SIM.mp4",
    overview:
      "A Java‑based GUI that visualizes train locations and rotates dynamic ads with live weather and news. Built to simulate realistic transit monitoring.",
    tech: ["Java (Swing)", "MySQL", "JDBC", "Public APIs"],
    features: [
      "Live visualization of transit movement",
      "Dynamic ads managed in MySQL",
      "Weather/news fetched from public APIs"
    ]
  },
  "defi-stablecoin": {
    title: "DeFi Stablecoin — Smart Contract",
    description:
      "Solidity protocol on Sepolia: 200% overcollateralization, health factor, liquidation, Chainlink oracles.",
    mediaType: "image",
    // TODO: Place thumbnail at public/thumbnails/defi-stablecoin.jpg
    imageSrc: "/thumbnails/defi-stablecoin.jpg",
    overview:
      "A stablecoin protocol emphasizing safety and price stability with robust collateralization and liquidation mechanisms.",
    tech: ["Solidity", "OpenZeppelin", "Chainlink oracles", "Sepolia"],
    features: [
      "200% overcollateralization and health factor checks",
      "Liquidation engine to manage under‑collateralized positions",
      "ERC‑20 token with secure mint/burn/transfer"
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = PROJECTS[params.slug];
  return {
    title: project ? `${project.title} | Project` : "Project",
    description: project?.description
  };
}

export default function ProjectPage({ params }) {
  const project = PROJECTS[params.slug];
  if (!project) {
    return (
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <a className="underline text-sm" href="/">Back to Home</a>
      </div>
    );
  }

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">{project.title}</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">{project.description}</p>
      </header>

      <div className="rounded-lg overflow-hidden border border-black/[.08] dark:border-white/[.145]">
        {project.mediaType === "video" ? (
          <video controls className="w-full h-auto">
            {/* TODO: Place your video file at public/videos/<name>.mp4 */}
            <source src={project.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="p-6 flex items-center justify-center">
            <img src={project.imageSrc} alt={project.title} className="max-h-72 opacity-90" />
          </div>
        )}
      </div>

      {/* Project details */}
      {project.overview ? (
        <section className="space-y-2">
          <h2 className="text-base font-medium">Overview</h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-3xl">{project.overview}</p>
        </section>
      ) : null}

      {project.tech ? (
        <section className="space-y-2">
          <h2 className="text-base font-medium">Tech</h2>
          <ul className="flex flex-wrap gap-2 text-xs">
            {project.tech.map((t) => (
              <li key={t} className="bg-black/[.05] dark:bg-white/[.08] rounded px-2 py-1">{t}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.features ? (
        <section className="space-y-2">
          <h2 className="text-base font-medium">Key Features</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="text-sm">
        <a className="underline" href="/">← Back to Home</a>
      </div>
    </article>
  );
}


