const PROJECTS = {
	"professor-review-platform": {
		title: "RateMyDino — Professor Review Platform",
		description:
			"An innovative AI-powered platform that transforms thousands of UCalgary professor reviews into concise, meaningful insights for students.",
		mediaType: "video",
		// TODO: Place video at public/videos/RateMyDino.mp4
		videoSrc: "/videos/RateMyDino.mp4",
		overview:
			"Revolutionizing how students explore professor feedback through AI-driven analysis. This platform automatically aggregates and processes reviews for over 3,200 UCalgary professors, turning scattered feedback into actionable insights.",
		tech: [
			"Next.js",
			"Flask",
			"SQLite",
			"BeautifulSoup",
			"LLM Integration",
			"Google Auth",
		],
		features: [
			"Automated scraping and processing of 50,000+ student reviews",
			"AI-powered generation of comprehensive teaching insights",
			"Secure authentication and intuitive dashboard interface",
			"Real-time data aggregation and analysis pipeline",
		],
	},
	"movie-theatre-booking": {
		title: "AcmePlex — Movie Theatre Booking",
		description:
			"A comprehensive movie theatre booking system with real-time seat management, secure payments, and booking administration.",
		mediaType: "video",
		// TODO: Place video at public/videos/AcmePlex.mp4
		videoSrc: "/videos/AcmePlex.mp4",
		overview:
			"A full-stack cinema booking platform that brings the complete movie theatre experience online. Features real-time seat selection, secure payment processing, and comprehensive booking management for both users and administrators.",
		tech: ["React", "Spring Boot", "MySQL", "Redux", "JWT Auth"],
		features: [
			"Real-time seat availability and dynamic selection system",
			"Secure credit card storage for registered users",
			"Full booking lifecycle management including refunds",
			"Role-based access for guests and authenticated users",
		],
	},
	"calgary-subway-gui": {
		title: "Calgary LRT SIM — Transit Display GUI",
		description:
			"An interactive simulation system visualizing Calgary's transit network with real-time train tracking and city information integration.",
		mediaType: "video",
		// TODO: Place video at public/videos/Calgary_LRT_SIM.mp4
		videoSrc: "/videos/Calgary_LRT_SIM.mp4",
		overview:
			"A desktop application that combines real-time transit visualization with live city information. The system provides an interactive map of Calgary's subway network, complete with live train tracking, weather updates, and news integration.",
		tech: [
			"Java Swing",
			"Multi-threading",
			"Weather API",
			"News API",
			"Custom Animation System",
		],
		features: [
			"Real-time visualization of train movements across the network",
			"Interactive train tracking with highlight functionality",
			"Live weather forecasts for Canadian cities",
			"Dynamic news feed with country-specific updates",
		],
	},
	"defi-stablecoin": {
		title: "DSC — Decentralized Stablecoin",
		description:
			"A transparent, overcollateralized stablecoin implementation on Sepolia testnet, showcasing core DeFi mechanics.",
		mediaType: "image",
		// TODO: Place thumbnail at public/thumbnails/defi-stablecoin.jpg
		imageSrc: "/thumbnails/defi-stablecoin.jpg",
		overview:
			"An educational implementation of a decentralized stablecoin protocol that maintains a 1:1 peg to USD through overcollateralization. Built with transparency and security in mind, demonstrating fundamental DeFi concepts without governance complexity.",
		tech: [
			"Solidity",
			"Foundry",
			"Chainlink Oracles",
			"OpenZeppelin",
			"Automated Testing",
		],
		features: [
			"ETH/BTC collateral with 200% minimum threshold",
			"Automated liquidation system with 10% liquidator bonus",
			"Real-time price feeds via Chainlink oracles",
			"Comprehensive testing suite and security measures",
		],
	},
};

export function generateStaticParams() {
	return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
	const project = PROJECTS[params.slug];
	return {
		title: project ? `${project.title} | Project` : "Project",
		description: project?.description,
	};
}

export default function ProjectPage({ params }) {
	const project = PROJECTS[params.slug];
	if (!project) {
		return (
			<div className="space-y-2">
				<h1 className="text-2xl font-semibold">Project not found</h1>
				<a className="underline text-sm" href="/">
					Back to Home
				</a>
			</div>
		);
	}

	return (
		<article className="space-y-6">
			<header className="space-y-2">
				<h1 className="text-2xl font-semibold tracking-tight">
					{project.title}
				</h1>
				<p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
					{project.description}
				</p>
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
						<img
							src={project.imageSrc}
							alt={project.title}
							className="max-h-72 opacity-90"
						/>
					</div>
				)}
			</div>

			{/* Project details */}
			{project.overview ? (
				<section className="space-y-2">
					<h2 className="text-base font-medium">Overview</h2>
					<p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-3xl">
						{project.overview}
					</p>
				</section>
			) : null}

			{project.tech ? (
				<section className="space-y-2">
					<h2 className="text-base font-medium">Tech</h2>
					<ul className="flex flex-wrap gap-2 text-xs">
						{project.tech.map((t) => (
							<li
								key={t}
								className="bg-black/[.05] dark:bg-white/[.08] rounded px-2 py-1"
							>
								{t}
							</li>
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
				<a className="underline" href="/">
					← Back to Home
				</a>
			</div>
		</article>
	);
}
