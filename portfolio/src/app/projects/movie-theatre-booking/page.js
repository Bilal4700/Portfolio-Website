export default function MovieTheatrePage() {
	return (
		<div className="max-w-4xl mx-auto space-y-12">
			<section className="space-y-6">
				<h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-teal-400 bg-clip-text text-transparent">
					Movie Theatre Booking System
				</h1>

				<div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
					<p className="text-lg">
						A comprehensive movie theatre booking system prototype built with
						Spring Boot and React, simulating a real-world online ticket booking
						platform. The system handles everything from seat selection to
						payment processing with a focus on user experience and data
						consistency.
					</p>
				</div>

				<div className="aspect-video bg-black/5 dark:bg-white/5 rounded-xl overflow-hidden">
					<video className="w-full h-full" controls>
						<source src="/videos/AcmePlex.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Source Code</h2>
				<div className="glass p-6 rounded-xl">
					<a
						href="https://github.com/Bilal4700/Movie-theater-ticket-reservation-application-.git"
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
						The Movie Theatre Booking System provides a seamless experience for
						both guests and registered users. While guests can browse movies and
						check seat availability, registered users gain access to advanced
						features like ticket booking, credit card storage, and booking
						management.
					</p>
					<p>
						The system is built with a strong focus on data consistency and user
						experience, ensuring that concurrent bookings are handled properly
						and users have full control over their reservations, including
						cancellation and refund capabilities.
					</p>
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Key Features</h2>
				<div className="grid gap-6 md:grid-cols-2">
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">Dynamic Seat Selection</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Real-time seat availability updates with intuitive selection
							interface, preventing double bookings through atomic transactions.
						</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">Booking Management</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Complete booking lifecycle management including viewing,
							modifying, and canceling reservations with automated refund
							processing.
						</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">User Authentication</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Role-based access control system differentiating between guest and
							registered user capabilities.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Technical Stack</h2>
				<div className="glass p-6 rounded-xl space-y-4">
					<div className="grid gap-6 md:grid-cols-2">
						<div>
							<h3 className="font-medium mb-2">Frontend</h3>
							<ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
								<li>React.js for UI components</li>
								<li>Custom CSS for responsive design</li>
							</ul>
						</div>
						<div>
							<h3 className="font-medium mb-2">Backend</h3>
							<ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
								<li>Spring Boot REST API</li>
								<li>MySQL Database</li>
							</ul>
						</div>
						<div>
							<h3 className="font-medium mb-2">Architecture</h3>
							<ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
								<li>Microservices pattern</li>
								<li>RESTful API design</li>
								<li>MVC architecture</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
