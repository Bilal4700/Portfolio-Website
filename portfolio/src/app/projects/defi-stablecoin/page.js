export default function StablecoinPage() {
	return (
		<div className="max-w-4xl mx-auto space-y-12">
			<section className="space-y-6">
				<h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-teal-400 bg-clip-text text-transparent">
					Decentralized Stablecoin (DSC)
				</h1>

				<div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
					<p className="text-lg">
						DSC is an educational implementation of a decentralized,
						crypto-collateralized stablecoin deployed on the Sepolia testnet. It
						demonstrates core DeFi concepts through a transparent,
						overcollateralized system that maintains a soft 1:1 peg to the US
						dollar.
					</p>
				</div>

				<div className="relative glass aspect-video bg-black/5 dark:bg-white/5 rounded-xl overflow-hidden p-6 flex items-center justify-center">
					<img
						src="/thumbnails/defi-stablecoin.jpg"
						alt="Stablecoin Architecture"
						className="max-h-full max-w-full object-contain"
					/>
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Source Code</h2>
				<div className="glass p-6 rounded-xl">
					<a
						href="https://github.com/Bilal4700/StableCoin.git"
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
						Think of DSC as a stripped-down, educational version of DAI — but
						with only ETH and BTC as collateral, and with the core mechanics of
						collateral, minting, burning, and liquidation fully transparent
						on-chain. The project started as an experiment to understand how
						stablecoins work at the smart contract level.
					</p>
					<p>
						The system allows users to deposit approved crypto as collateral,
						mint stablecoins against it, and relies on the protocol to keep the
						system solvent and the peg intact. All operations are automated
						without admin keys or manual intervention.
					</p>
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Key Features</h2>
				<div className="grid gap-6 md:grid-cols-2">
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">
							Collateralization System
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							200% minimum collateralization threshold with ETH and BTC support,
							ensuring robust backing for all minted stablecoins.
						</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">Liquidation Mechanism</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Automated liquidation system with a 10% bonus for liquidators,
							maintaining system solvency during market volatility.
						</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">
							Price Oracle Integration
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Real-time price feeds via Chainlink oracles with stale check
							protection for accurate collateral valuation.
						</p>
					</div>
					<div className="glass p-6 rounded-xl">
						<h3 className="text-lg font-medium mb-3">
							Smart Contract Security
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Comprehensive testing suite with security measures including
							reentrancy protection and overflow checks.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Technical Stack</h2>
				<div className="glass p-6 rounded-xl space-y-4">
					<div className="grid gap-6 md:grid-cols-2">
						<div>
							<h3 className="font-medium mb-2">Smart Contracts</h3>
							<ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
								<li>Solidity for contract development</li>
								<li>DSCEngine.sol for core logic</li>
								<li>DecentralizedStableCoin.sol (ERC-20)</li>
							</ul>
						</div>
						<div>
							<h3 className="font-medium mb-2">Testing & Development</h3>
							<ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
								<li>Foundry for testing framework</li>
								<li>Forge for deployment</li>
								<li>1e18 precision scaling</li>
							</ul>
						</div>
						<div>
							<h3 className="font-medium mb-2">Integrations</h3>
							<ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
								<li>Chainlink price feeds</li>
								<li>OpenZeppelin contracts</li>
								<li>Oracle stale check library</li>
							</ul>
						</div>
						<div>
							<h3 className="font-medium mb-2">Network</h3>
							<ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
								<li>Sepolia Testnet</li>
								<li>Etherscan verification</li>
								<li>Network ID: 11155111</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
