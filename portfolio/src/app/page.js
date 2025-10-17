import Image from "next/image";
import WorkExperience from "./components/WorkExperience";

const projects = [
	{
		slug: "professor-review-platform",
		title: "RateMyDino — Professor Review Platform",
		excerpt: "Flask REST API + Next.js UI with AI-generated summaries.",
		mediaType: "video",
		// TODO: Place video at public/videos/RateMyDino.mp4
		videoSrc: "/videos/RateMyDino.mp4",
		// TODO: Place thumbnail at public/thumbnails/RateMyDino.jpg
		thumbnailSrc: "/thumbnails/RateMyDino.jpg",
	},
	{
		slug: "movie-theatre-booking",
		title: "AcmePlex — Movie Theatre Booking",
		excerpt: "Spring Boot backend with React UI and MySQL.",
		mediaType: "video",
		// TODO: Place video at public/videos/AcmePlex.mp4
		videoSrc: "/videos/AcmePlex.mp4",
		// TODO: Place thumbnail at public/thumbnails/AcmePlex.jpg
		thumbnailSrc: "/thumbnails/AcmePlex.jpg",
	},
	{
		slug: "calgary-subway-gui",
		title: "Calgary LRT SIM — Transit Display GUI",
		excerpt: "Java GUI with MySQL, live data and ads integration.",
		mediaType: "video",
		// TODO: Place video at public/videos/Calgary_LRT_SIM.mp4
		videoSrc: "/videos/Calgary_LRT_SIM.mp4",
		// TODO: Place thumbnail at public/thumbnails/Calgary_LRT_SIM.jpg
		thumbnailSrc: "/thumbnails/Calgary_LRT_SIM.jpg",
	},
	{
		slug: "defi-stablecoin",
		title: "DeFi Stablecoin — Smart Contract",
		excerpt: "Solidity on Sepolia with oracles and liquidation engine.",
		mediaType: "image",
		// TODO: Place thumbnail at public/thumbnails/defi-stablecoin.jpg
		imageSrc: "/thumbnails/defi-stablecoin.jpg",
	},
];

export default function Home() {
	return (
		<div className="space-y-10">
			<section className="space-y-3">
				<h1 className="text-3xl font-semibold tracking-tight">
					Hi, I’m Muhammad Bilal
				</h1>
				<p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
					Backend-focused developer working across cloud, infra-as-code, and
					full‑stack systems. I build reliable backends and polished UIs.
				</p>
				<div className="flex gap-3 text-sm">
					<a className="underline" href="/about">
						About Me
					</a>
					<a className="underline" href="/resume">
						Resume
					</a>
				</div>
			</section>

			<section>
				<WorkExperience
					items={[
						{
							role: "Backend-Lead",
							company: "Enactus (Calgary)",
							period: "Jul 2025 — Present",
							logo: "/images/enactus-logo.png",
							description:
								"Leading backend architecture for the Student Learning Portal (Wealth Part).",
							bullets: [
								"Designed REST APIs",
								"Integrated third‑party auth",
								"Improved CI/CD and testing",
							],
						},
						{
							role: "Research Assistant - Sustainable devops",
							company: "University of Calgary (Supervisor: Prof. Novarun Deb)",
							period: "Sep 2025 — Present",
							logo: "/images/research-image.png",
							description:
								"Researching sustainable development operations with a focus on energy-efficient cloud deployments.",
							bullets: [
								"Built reproducible experiments",
								"Automated data collection pipelines",
							],
						},
					]}
				/>
			</section>

			<section className="space-y-6">
				<h2 className="text-xl font-medium">Featured Projects</h2>
				<div className="grid gap-6 md:grid-cols-2">
					{projects.map((p) => (
						<a
							key={p.slug}
							href={`/projects/${p.slug}`}
							className="group block rounded-lg border border-black/[.08] dark:border-white/[.145] p-4 hover:bg-black/[.02] dark:hover:bg-white/[.03] transition-colors"
						>
							<div className="aspect-video rounded-md overflow-hidden border border-black/[.06] dark:border-white/[.08] bg-black/[.04] dark:bg-white/[.06] flex items-center justify-center">
								{p.mediaType === "image" ? (
									<Image
										src={p.imageSrc}
										alt={p.title}
										width={400}
										height={225}
										className="w-full h-full object-cover opacity-90"
									/>
								) : (
									// Prefer showing a static thumbnail on the card; video plays on detail page
									<img
										src={p.thumbnailSrc}
										alt={`${p.title} thumbnail`}
										className="w-full h-full object-cover opacity-90"
									/>
								)}
							</div>
							<h3 className="mt-3 text-base font-semibold group-hover:underline">
								{p.title}
							</h3>
							<p className="text-sm text-neutral-600 dark:text-neutral-400">
								{p.excerpt}
							</p>
						</a>
					))}
				</div>
			</section>
		</div>
	);
}
