export default function RateMyDinoPage() {
	return (
		<div className="max-w-4xl mx-auto space-y-12">
			<section className="space-y-6">
				<h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-teal-400 bg-clip-text text-transparent">
					RateMyDino
				</h1>

				<div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
					<p className="text-lg">
						RateMyDino is an AI-powered web application revolutionizing how
						University of Calgary students explore professor feedback. By
						leveraging advanced machine learning, our platform processes over
						50,000 student reviews, transforming them into clear, actionable
						insights.
					</p>
				</div>

				<div className="aspect-video bg-black/5 dark:bg-white/5 rounded-xl overflow-hidden">
					<video className="w-full h-full" controls>
						<source src="/videos/RateMyDino.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Project Overview</h2>
				<div className="glass p-6 rounded-xl space-y-4">
					<p>
						Our platform automatically scrapes and aggregates real student
						reviews and ratings from RateMyProfessor for over 3,213 University
						of Calgary professors. All collected data is securely stored in our
						backend database, ensuring a comprehensive and searchable repository
						of teaching feedback.
					</p>
					<p>
						Instead of scrolling through countless individual comments,
						RateMyDino leverages a Large Language Model (LLM) to analyze and
						summarize thousands of reviews into concise, meaningful insights.
						This allows students to quickly understand each professor's teaching
						style, strengths, and overall classroom experience — helping them
						make informed decisions about their courses.
					</p>
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Key Features</h2>
				<div className="grid gap-6 md:grid-cols-2">
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">Extensive Database</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Comprehensive collection of feedback on over 3,213 professors from
							the University of Calgary, providing a rich dataset for analysis.
						</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">AI-Driven Summaries</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Advanced LLM implementation that generates clear, concise
							summaries from student comments, making information easily
							digestible.
						</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">
							User-Friendly Dashboard
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Intuitive interface that allows quick professor searches and
							instant access to summarized profiles, optimized for efficient
							decision-making.
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
								<li>Next.js for modern React framework</li>
								<li>Tailwind CSS for styling</li>
								<li>Google Authentication</li>
							</ul>
						</div>
						<div>
							<h3 className="font-medium mb-2">Backend</h3>
							<ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
								<li>Flask REST API</li>
								<li>BeautifulSoup for data scraping</li>
								<li>OpenAI API and prompt engineering</li>
							</ul>
						</div>
						<div>
							<h3 className="font-medium mb-2">Deployment</h3>
							<ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
								<li>Vercel for frontend hosting</li>
								<li>Render for backend services</li>
								<li>MySQL hosted on GCP</li>
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
