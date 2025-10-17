export default function WorkExperience({ items = [] }) {
	return (
		<div className="space-y-4">
			<h2 className="text-3xl font-bold">Experience</h2>
			<p className="text-sm text-neutral-600 dark:text-neutral-400">
				Professional Timeline
			</p>

			<div className="mt-6 space-y-6">
				{items.map((it, idx) => (
					<div
						key={idx}
						className="pt-6 border-t border-black/[.08] dark:border-white/[.12]"
					>
						<div className="grid gap-4 md:grid-cols-12">
							<div className="md:col-span-4">
								<div className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
									{it.role}
								</div>
								<div className="text-sm text-neutral-700 dark:text-neutral-300">
									{it.company}
								</div>
								<div className="text-sm text-neutral-600 dark:text-neutral-400">
									{it.period}
								</div>
							</div>

							<div className="md:col-span-8 text-neutral-800 dark:text-neutral-200">
								{it.description && (
									<p className="text-sm leading-relaxed">{it.description}</p>
								)}

								{it.bullets && it.bullets.length > 0 && (
									<ul className="mt-3 ml-5 list-disc text-sm space-y-1">
										{it.bullets.map((b, i) => (
											<li
												key={i}
												className="text-neutral-700 dark:text-neutral-300"
											>
												{b}
											</li>
										))}
									</ul>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
