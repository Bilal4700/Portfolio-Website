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
