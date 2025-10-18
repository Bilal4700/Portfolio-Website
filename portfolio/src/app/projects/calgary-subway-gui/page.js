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

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Source Code</h2>
				<div className="glass p-6 rounded-xl">
					<p className="text-neutral-600 dark:text-neutral-400">
						GitHub repository link coming soon...
					</p>
				</div>
			</section>
		</div>
	);
}
