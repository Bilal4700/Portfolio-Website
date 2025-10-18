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
