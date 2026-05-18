# IMREXX HUB

> A decentralized frontend interface for the Lukso ecosystem — staking, governance, liquidity pools, NFT showcase and cross-chain bridging, all in one place.

**[Live Demo](https://imrexx-hub.vercel.app)** · **[Lukso Mainnet](https://lukso.network)** · **[Twitter](https://x.com/imrexx_dev)** · 

---

## What Is IMREXX HUB

IMREXX HUB is a fully client-side DeFi dashboard built on the **Lukso blockchain** — an EVM-compatible L1 purpose-built for digital lifestyle and creative economies.

Rather than building another Ethereum clone, this project targets Lukso specifically because of its **Universal Profile standard (LSP-3)**, which replaces anonymous wallet addresses with on-chain identities. That makes it uniquely suited for NFT collections, creator tooling, and community governance — the exact features this hub provides.

Everything runs in the browser. No backend. No custody. Connect your MetaMask wallet and interact directly with on-chain contracts.

---

## Features

| Module | Description | Status |
|---|---|---|
| **Showcase** | NFT gallery with rarity system, trait viewer, and download options. Backed by IPFS via Pinata. | Live |
| **Stake** | Validator delegation dashboard. Search, filter, and delegate LYX tokens to earn block rewards. | Live |
| **Governance** | On-chain proposal viewer with live vote tallies. Vote FOR or AGAINST active proposals. | Live |
| **Pool** | Liquidity pool interface with live pricing via CoinGecko API. Auto-calculates paired amounts. | Live |
| **Send** | Cross-chain bridge UI. Select token, source network, and destination network. | Prototype |
| **Roadmap** | Five-phase development timeline with milestone tracking and tech stack documentation. | Live |

---

## Tech Stack

```
Frontend       React 17 · React Router v6 · Vite
Blockchain     Ethers.js v6 · MetaMask (EVM)
Network        Lukso Mainnet (Chain ID: 0x1069)
Standards      LSP-3 (Universal Profile) · LSP-7 · LSP-8
NFT Storage    IPFS via Pinata
Market Data    CoinGecko API
Deployment     GitHub Pages · Vercel
```

---

## Why Lukso

Most DeFi frontends target Ethereum or Solana. IMREXX HUB deliberately builds on Lukso for three reasons:

1. **Universal Profiles (LSP-3)** — On-chain identity replaces anonymous hex addresses. Every user has a profile with metadata, social links, and permissions attached directly to their wallet.

2. **LSP-7 / LSP-8 Token Standards** — Lukso's token standards are designed from the ground up for digital assets, with richer metadata and permissions than ERC-20/721.

3. **Early ecosystem advantage** — Lukso is growing but not yet saturated. Building here now means contributing to infrastructure that is genuinely needed, not replicating what already exists on other chains.

---

## Getting Started

### Prerequisites

- Node.js 18+
- MetaMask browser extension
- Lukso Mainnet added to MetaMask

**Add Lukso Mainnet to MetaMask:**

| Field | Value |
|---|---|
| Network Name | Lukso Mainnet |
| RPC URL | `https://rpc.mainnet.lukso.network` |
| Chain ID | `42` |
| Currency Symbol | `LYX` |
| Block Explorer | `https://explorer.execution.mainnet.lukso.network` |

### Installation

```bash
# Clone the repository
git clone https://github.com/Imrexxx-OG/imrexxHub.git
cd imrexx-hub

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build & Deploy

```bash
# Production build
npm run build

# Deploy to GitHub Pages
npm run deploy

# Preview production build locally
npm run preview
```

---

## Project Structure

```
imrexx-hub/
├── src/
│   ├── components/
│   │   ├── Showcase.jsx          # NFT gallery + modal viewer
│   │   ├── Stake.jsx             # Validator delegation table
│   │   ├── Governance.jsx        # Proposal viewer + voting
│   │   ├── Pool.jsx              # Liquidity pool interface
│   │   ├── Send.jsx              # Cross-chain bridge UI
│   │   ├── Roadmap.jsx           # Development timeline
│   │   ├── Home.jsx              # Landing page
│   │   ├── Sidebar.jsx           # Navigation with active states
│   │   ├── WalletConnection.jsx  # MetaMask connect / disconnect
│   │   ├── MobileMenu.jsx        # Hamburger menu for mobile
│   │   ├── pages.css             # Shared design system
│   │   ├── sidebar.css           # Sidebar styles
│   │   ├── wallet.css            # Wallet button styles
│   │   └── [page]-upgrade.css    # Per-page styles
│   ├── App.jsx                   # Routes + layout
│   ├── index.jsx                 # Entry point
│   └── style.css                 # Global layout foundation
├── contracts/
│   ├── contractAddresses.js      # Deployed contract addresses
│   └── MyContract.json           # ABI definitions
└── package.json
```

---

## Roadmap

| Phase | Title | Period | Status |
|---|---|---|---|
| 01 | Foundation | Q1 2024 | ✅ Complete |
| 02 | Core Modules | Q2 2024 | ✅ Complete |
| 03 | Governance & Identity | Q3 2024 | 🔄 In Progress |
| 04 | Mainnet Launch | Q4 2024 | 🟡 Upcoming |
| 05 | Ecosystem Expansion | Q1 2025 | 📋 Planned |

**Phase 03 in progress:** Universal Profile (LSP-3) integration · LSP-7/LSP-8 token standard support

**Phase 04 planned:** Real smart contract deployment · IMREXX NFT mint on Lukso Mainnet · Live bridge contract · LYX community distribution · Security audit

---

## Design Decisions

**Why no backend?** Keeping everything client-side means zero infrastructure costs, no single point of failure, and full trustlessness. Users verify every transaction themselves.

**Why not Ethereum or Solana?** The entire EVM toolchain (ethers.js, MetaMask, hex addresses) transfers to Lukso with minimal changes. Solana would require a full rewrite. Ethereum is too saturated for a meaningful early-mover position.

**Why a monorepo frontend without a framework?** Vite + React Router gives full control over routing, code splitting, and bundle size without the overhead of Next.js or Remix. For a DeFi dashboard that never needs SSR, this is the right tradeoff.

---

## Screenshots

> Add screenshots here once deployed. Recommended: Home hero, Showcase grid, Stake table, Governance proposals, Roadmap.

---

## Contributing

Pull requests are welcome. For major changes please open an issue first.

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'add: your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

MIT — see [LICENSE](./LICENSE) for details.

---

## Acknowledgements

- [Lukso Network](https://lukso.network) — the blockchain this hub is built for
- [CoinGecko](https://coingecko.com) — live market data API
- [Pinata](https://pinata.cloud) — IPFS NFT storage
- [Icons8](https://icons8.com) — navigation icons
- [Ethers.js](https://ethers.org) — Ethereum / EVM library

---

<p align="center">
  Built by <a href="https://x.com/imrexx_dev">@imrexx</a> · Lukso Mainnet · 2024
</p>