export const metadata = {
  title: "Resume | Muhammad Bilal",
  description: "Experience, education, and selected achievements."
};

const resume = {
  summary:
    "Developer with a focus on product, strong fundamentals in web and data, and a track record of shipping polished experiences.",
  experience: [
    {
      role: "Software Developer",
      company: "Project & Freelance",
      period: "2022 — Present",
      bullets: [
        "Built full‑stack apps with Next.js and Node.js",
        "Led feature delivery with attention to UX and performance",
        "Automated CI/CD and optimized deployments"
      ]
    }
  ],
  education: [
    {
      degree: "BSc, Computer Science",
      school: "University of Calgary",
      period: "In progress"
    }
  ]
};

export default function ResumePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
      {/* Keep only the PDF and download/open options */}
      <div className="flex items-center gap-4 text-sm">
        <a className="underline" href="/Resume.pdf" download>Download PDF</a>
        <a className="underline" href="/Resume.pdf" target="_blank" rel="noreferrer noopener">Open in new tab</a>
      </div>

      <div className="rounded-lg overflow-hidden border border-black/[.08] dark:border-white/[.145] shadow-sm">
        <object data="/Resume.pdf#view=FitH" type="application/pdf" className="w-full" style={{ height: "min(90vh, 1200px)" }}>
          <div className="p-4 text-sm">
            Couldn’t display the PDF. Try <a className="underline" href="/Resume.pdf" target="_blank" rel="noreferrer noopener">opening it</a> or <a className="underline" href="/Resume.pdf" download>downloading it</a>.
          </div>
        </object>
      </div>
    </div>
  );
}


