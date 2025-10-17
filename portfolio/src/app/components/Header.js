export default function Header() {
	return (
		<header className="w-full border-b border-black/[.08] dark:border-white/[.145]">
			<div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
				{/* Navigation */}
				<nav className="flex items-center gap-8 text-lg">
					<a className="hover:underline" href="/">
						Home
					</a>
					<a className="hover:underline" href="/about">
						About Me
					</a>
					<a className="hover:underline" href="/resume">
						Resume
					</a>
				</nav>

				{/* Social Icons */}
				<div className="flex items-center gap-6 text-lg">
					{/* GitHub */}
					<a
						className="hover:opacity-80 transition-opacity"
						href="https://github.com/Bilal4700"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="GitHub"
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
							<path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.71-2.78.62-3.37-1.35-3.37-1.35-.46-1.17-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1.01.07 1.53 1.04 1.53 1.04.89 1.54 2.34 1.1 2.91.84.09-.65.35-1.09.64-1.34-2.22-.26-4.56-1.13-4.56-4.99 0-1.11.39-2.01 1.03-2.71-.1-.25-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.04A9.62 9.62 0 0 1 12 6.87c.86 0 1.71.12 2.51.34 1.91-1.31 2.75-1.04 2.75-1.04.55 1.4.2 2.44.1 2.69.64.7 1.03 1.6 1.03 2.71 0 3.87-2.34 4.75-4.57 5 .37.31.68.94.68 1.89 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.08 10.08 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
						</svg>
					</a>

					{/* Email */}
					<a
						className="hover:opacity-80 transition-opacity"
						href="mailto:muhammad.bilal2@ucalgary.ca"
						aria-label="Email"
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
							<rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
							<path d="M3 7l9 6 9-6" />
						</svg>
					</a>

					{/* LinkedIn */}
					<a
						className="hover:opacity-80 transition-opacity"
						href="https://www.linkedin.com/in/muhammad-bilal-955a12295/"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="LinkedIn"
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
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
							<rect x="2" y="9" width="4" height="12" />
							<circle cx="4" cy="4" r="2" />
						</svg>
					</a>
				</div>
			</div>
		</header>
	);
}
{
	/* Email */
}
