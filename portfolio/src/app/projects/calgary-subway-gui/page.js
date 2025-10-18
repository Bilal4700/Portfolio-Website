export default function CalgarySubwayPage() {
	return (
		<div className="max-w-4xl mx-auto space-y-12">
			<section className="space-y-6">
				<h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-teal-400 bg-clip-text text-transparent">
					Calgary Subway Simulation System
				</h1>

				<div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
					<p className="text-lg">
						A desktop simulation that brings Calgary's subway system to life
						through an interactive visualization platform. Built in Java, this
						application combines real-time train tracking with live city
						information, creating an engaging and informative transit
						experience.
					</p>
				</div>

				<div className="aspect-video bg-black/5 dark:bg-white/5 rounded-xl overflow-hidden">
					<video className="w-full h-full" controls>
						<source src="/videos/Calgary_LRT_SIM.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Source Code</h2>
				<div className="glass p-6 rounded-xl">
					<a
						href="https://github.com/Bilal4700/SubwayScreen.git"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub Repository"
						className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 transition-colors"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="22"
							height="22"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.6"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<path d="M12 1C5.37 1 0 6.37 0 13c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.262.793-.582v-2.15c-3.338.727-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.757.082-.742.082-.742 1.207.086 1.84 1.254 1.84 1.254 1.07 1.856 2.807 1.32 3.493 1.01.108-.8.42-1.32.763-1.624-2.667-.31-5.467-1.36-5.467-6.053 0-1.337.465-2.433 1.233-3.29-.123-.31-.534-1.553.117-3.24 0 0 1.003-.33 3.29 1.256A11.38 11.38 0 0112 6.845c1.02.004 2.043.138 3.003.406 2.286-1.586 3.29-1.256 3.29-1.256.652 1.687.241 2.93.118 3.24.77.857 1.233 1.953 1.233 3.29 0 4.706-2.803 5.74-5.476 6.046.43.38.815 1.123.815 2.263v3.354c0 .322.193.697.8.578C20.565 22.797 24 18.297 24 13c0-6.63-5.37-12-12-12z" />
						</svg>
						<span>GitHub Repository</span>
					</a>
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Project Overview</h2>
				<div className="glass p-6 rounded-xl space-y-4">
					<p>
						The Calgary Subway Simulation System provides an interactive view of
						trains moving across a subway map while integrating additional
						real-time information like weather forecasts and news updates. The
						system's highlight feature allows users to track specific trains by
						their number, making them appear in yellow for easy visibility while
						other trains continue their normal movement.
					</p>
					<p>
						Beyond transit visualization, the platform serves as an information
						hub by connecting to external APIs for weather forecasts and news
						updates, creating a comprehensive city information display system.
					</p>
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Key Features</h2>
				<div className="grid gap-6 md:grid-cols-2">
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">
							Real-time Visualization
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Dynamic display of train movements across the network map with
							smooth animations and precise positioning.
						</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">Train Tracking</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Interactive feature to highlight and follow specific trains by
							their identification number for enhanced visibility.
						</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">Weather Integration</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Real-time weather forecast display for any Canadian city,
							providing current conditions and upcoming forecasts.
						</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">News Feed</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Live news updates with country-specific filtering, keeping users
							informed about current events.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Technical Stack</h2>
				<div className="glass p-6 rounded-xl space-y-4">
					<div className="grid gap-6 md:grid-cols-2">
						<div>
							<h3 className="font-medium mb-2">Core Technology</h3>
							<ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
								<li>Java Swing for GUI</li>
								<li>Custom animation system</li>
								<li>Multi-threading implementation</li>
							</ul>
						</div>
						<div>
							<h3 className="font-medium mb-2">External APIs</h3>
							<ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
								<li>Weather API integration</li>
								<li>News API implementation</li>
								<li>Real-time data fetching</li>
							</ul>
						</div>
						<div>
							<h3 className="font-medium mb-2">Architecture</h3>
							<ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
								<li>MVC pattern</li>
								<li>Observer pattern</li>
								<li>Event-driven design</li>
							</ul>
						</div>
						<div>
							<h3 className="font-medium mb-2">Additional Features</h3>
							<ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
								<li>Command-line arguments</li>
								<li>Dynamic configuration</li>
								<li>Error handling system</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
