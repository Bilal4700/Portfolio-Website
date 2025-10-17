export const metadata = {
  title: "About Me | Muhammad Bilal",
  description: "About and social links."
};

const socials = [
  { label: "Phone", href: "tel:+15876646272" },
  { label: "Email", href: "mailto:muhammad.bilal2@ucalgary.ca" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-bilal-955a12295/" },
  { label: "GitHub", href: "https://github.com/Bilal4700" }
];

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">About Me — Muhammad Bilal</h1>
      <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-2xl">
        Backend-focused developer with interests in cloud, infra-as-code, and AI-assisted
        developer workflows. Currently Backend Lead at Enactus Calgary and Research Assistant in
        Sustainable Development.
      </p>
      <section className="space-y-2">
        <h2 className="text-base font-medium">Find me online</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          {socials.map((s) => (
            <li key={s.label}>
              <a className="underline" href={s.href} target="_blank" rel="noreferrer noopener">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}


