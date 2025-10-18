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
			<section className="space-y-6">
				<h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-violet-600 to-teal-400 bg-clip-text text-transparent">
					Hey there! I'm Muhammad Bilal 👋
				</h1>
				<div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
					<p>
						Welcome to my corner of the web, where code meets creativity! I'm a
						Software Engineering student at the University of Calgary, turning
						caffeine into code and ideas into innovation. 🚀
					</p>
					<p>
						Passionate about crafting elegant solutions in blockchain, software
						development, and machine learning. When I'm not coding, you'll find
						me exploring new technologies or building the next cool thing! 💡
					</p>
				</div>
				<div className="flex gap-4 text-sm">
					<a
						href="/about"
						className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-teal-400 text-white font-medium hover:opacity-90 transition-opacity"
					>
						More About Me
					</a>
					<a
						href="/resume"
						className="px-4 py-2 rounded-lg border border-black/[.08] dark:border-white/[.145] hover:bg-black/[.03] dark:hover:bg-white/[.03] transition-colors"
					>
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
								"Leading development of a learning portal that provides basic financial education for high-school students and newcomers to Canada. The portal delivers concise video lessons, structured course content, and short quizzes; the initial rollout targets 150 users with measured engagement and fortnightly content updates.",
						},
						{
							role: "Research Assistant - Sustainable devops",
							company: "University of Calgary (Supervisor: Prof. Novarun Deb)",
							period: "Sep 2025 — Present",
							logo: "/images/research-image.png",
							description:
								"Experimenting with large language models to generate Terraform scripts and comparing them against manual baselines across GCP, AWS and Azure, with the explicit goal of making infrastructure provisioning more sustainable. I evaluate correctness and efficiency and measure carbon emissions with CodeCarbon across repeated deployments to identify lower-emission patterns.",
						},
					]}
				/>
			</section>

			<section className="space-y-6">
				<h2 className="text-4xl font-bold">Projects</h2>
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
							<h3 className="mt-3 text-lg font-semibold group-hover:underline">
								{p.title}
							</h3>
							<p className="text-base text-neutral-600 dark:text-neutral-400">
								{p.excerpt}
							</p>
						</a>
					))}
				</div>
			</section>
		</div>
	);
}
