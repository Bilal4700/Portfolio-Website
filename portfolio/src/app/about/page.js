export const metadata = {
	title: "About Me | Muhammad Bilal",
	description: "About and social links.",
};

const socials = [
	{ label: "Phone", href: "tel:+15876646272" },
	{ label: "Email", href: "mailto:muhammad.bilal2@ucalgary.ca" },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/muhammad-bilal-955a12295/",
	},
	{ label: "GitHub", href: "https://github.com/Bilal4700" },
];

export default function AboutPage() {
	return (
		<div className="max-w-4xl mx-auto space-y-12">
			{/* About Me Section */}
			<section className="space-y-8">
				<h1 className="text-5xl font-bold bg-gradient-to-r from-fuchsia-500 via-violet-600 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
					About Me
				</h1>
				<div className="prose prose-neutral dark:prose-invert max-w-none">
					<div className="glass p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
						<p className="text-lg leading-relaxed">
							Hey there! I’m a fourth-year Software Engineering student at the
							University of Calgary who loves turning bold ideas into real,
							working technology. I thrive on building end-to-end software —
							from designing scalable backends and deploying cloud
							infrastructure with Docker, Kubernetes, and Terraform, to crafting
							seamless user experiences on the frontend.
						</p>
						<p className="text-lg leading-relaxed mt-4">
							I’m passionate about blockchain development. I’ve built and
							deployed my own ERC-20 tokens and ERC-721 NFTs, exploring how
							decentralized systems, smart contracts, and oracles like Chainlink
							can power trustless, transparent applications.
						</p>
						<p className="text-lg leading-relaxed mt-4">
							Lately, I’ve been pushing the boundaries by combining AI and large
							language models with traditional software — integrating them into
							apps for intelligent automation, natural-language interfaces, and
							smarter decision-making. For me, every project is a chance to
							blend creativity with engineering and shape innovative solutions
							that solve real problems.
						</p>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="space-y-8">
				<h2 className="text-3xl font-bold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-teal-500 bg-clip-text text-transparent">
					Skills & Technologies
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="glass p-6 rounded-xl border border-white/10 hover:border-violet-500/30 transition-all duration-300 group">
						<h3 className="text-xl font-medium mb-4 text-violet-400 group-hover:text-violet-300 transition-colors">
							Programming Languages
						</h3>
						<div className="flex flex-wrap gap-2">
							{[
								"Python",
								"Java",
								"C/C++",
								"JavaScript",
								"TypeScript",
								"Solidity",
								"SQL",
								"HTML5",
								"CSS3",
								"Bash",
							].map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 rounded-full bg-violet-500/10 hover:bg-violet-500/20 text-sm border border-violet-500/20 hover:border-violet-500/30 transition-all duration-300"
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					<div className="glass p-6 rounded-xl border border-white/10 hover:border-fuchsia-500/30 transition-all duration-300 group">
						<h3 className="text-xl font-medium mb-4 text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors">
							Frameworks & Libraries
						</h3>
						<div className="flex flex-wrap gap-2">
							{[
								"React",
								"Next.js",
								"Spring Boot",
								"Flask",
								"Node.js",
								"JUnit",
								"PyTest",
								"Hardhat",
								"Foundry",
							].map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 rounded-full bg-fuchsia-500/10 hover:bg-fuchsia-500/20 text-sm border border-fuchsia-500/20 hover:border-fuchsia-500/30 transition-all duration-300"
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					<div className="glass p-6 rounded-xl border border-white/10 hover:border-pink-500/30 transition-all duration-300 group">
						<h3 className="text-xl font-medium mb-4 text-pink-400 group-hover:text-pink-300 transition-colors">
							Databases
						</h3>
						<div className="flex flex-wrap gap-2">
							{["MySQL", "Firestore", "PostgreSQL", "MongoDB", "Supabase"].map(
								(skill) => (
									<span
										key={skill}
										className="px-3 py-1 rounded-full bg-pink-500/10 hover:bg-pink-500/20 text-sm border border-pink-500/20 hover:border-pink-500/30 transition-all duration-300"
									>
										{skill}
									</span>
								)
							)}
						</div>
					</div>

					<div className="glass p-6 rounded-xl border border-white/10 hover:border-teal-500/30 transition-all duration-300 group">
						<h3 className="text-xl font-medium mb-4 text-teal-400 group-hover:text-teal-300 transition-colors">
							Cloud & DevOps
						</h3>
						<div className="flex flex-wrap gap-2">
							{[
								"GCP",
								"AWS",
								"Docker",
								"Kubernetes",
								"Terraform",
								"GitHub Actions",
								"Vercel",
								"Render",
							].map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 rounded-full bg-teal-500/10 hover:bg-teal-500/20 text-sm border border-teal-500/20 hover:border-teal-500/30 transition-all duration-300"
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					<div className="glass p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group">
						<h3 className="text-xl font-medium mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
							Machine Learning
						</h3>
						<div className="flex flex-wrap gap-2">
							{[
								"Pandas",
								"NumPy",
								"Data Cleaning",
								"Matplotlib",
								"Scikit-learn",
								"TensorFlow",
							].map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-sm border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					<div className="glass p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
						<h3 className="text-xl font-medium mb-4 text-purple-400 group-hover:text-purple-300 transition-colors">
							Tools & Others
						</h3>
						<div className="flex flex-wrap gap-2">
							{[
								"Git",
								"GitHub",
								"REST APIs",
								"FFmpeg",
								"BeautifulSoup",
								"OpenZeppelin",
								"Chainlink",
								"Firebase",
							].map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-sm border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
