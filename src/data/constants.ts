import type { RoadmapItem, Partner, ComparisonMetric, TokenAllocation } from '../types';

export const TOKEN_INFO = {
  name: 'DogPow',
  symbol: 'DPOW',
  supply: '10,000,000,000',
  blockchain: 'Solana',
  target: '$5M',
  listing: 'Q3 2027',
  website: 'dogpow.xyz',
  ca: 'DPoWxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Placeholder CA
};

export const TOKEN_ALLOCATION: TokenAllocation[] = [
  { label: 'Mining & Community', percentage: 60, color: '#F59E0B' }, // Amber-500
  { label: 'Liquidity & Market Ops', percentage: 30, color: '#3B82F6' }, // Blue-500
  { label: 'Team & Development', percentage: 10, color: '#8B5CF6' }, // Violet-500
];

export const ROADMAP: RoadmapItem[] = [
  {
    phase: 'Phase 1',
    title: 'Inception',
    description: 'Project launch, community building, and smart contract audit.',
    status: 'completed',
  },
  {
    phase: 'Phase 2',
    title: 'Mining Launch',
    description: 'Release of community mining portal and initial distribution.',
    status: 'in-progress',
  },
  {
    phase: 'Phase 3',
    title: 'Ecosystem Expansion',
    description: 'Partnership integrations and DEX listings.',
    status: 'upcoming',
  },
  {
    phase: 'Phase 4',
    title: 'Global Listing',
    description: 'CEX listings and final roadmap milestones for Q3 2027.',
    status: 'upcoming',
  },
];

export const PARTNERS: Partner[] = [
  { name: 'Solana', logo: 'solana', url: 'https://solana.com' },
  { name: 'Raydium', logo: 'raydium', url: 'https://raydium.io' },
  { name: 'Phantom', logo: 'phantom', url: 'https://phantom.app' },
  { name: 'GeckoTerminal', logo: 'geckoterminal', url: 'https://geckoterminal.com' },
  { name: 'DEXTools', logo: 'dextools', url: 'https://dextools.io' },
];

export const COMPARISON: ComparisonMetric[] = [
  { name: 'Blockchain', dogpow: 'Solana', others: 'Various' },
  { name: 'Community Allocation', dogpow: '60%', others: 'Avg. 10-20%' },
  { name: 'Mining Rewards', dogpow: true, others: false },
  { name: 'Transparency', dogpow: 'High', others: 'Varies' },
  { name: 'Future Listings', dogpow: 'Q3 2027 Target', others: 'Unknown' },
];

export const STATS = [
  { label: 'Total Holders', value: '124,500+', prefix: '' },
  { label: 'Market Cap', value: '24.8M', prefix: '$' },
  { label: 'Tokens Burned', value: '1.2B', prefix: '' },
  { label: 'Community Strength', value: '98', prefix: '%', suffix: 'Positive' },
];

export const FAQS = [
  {
    question: "What is DogPow (DPOW)?",
    answer: "DogPow is a community-driven meme token on the Solana blockchain that utilizes a unique proof-of-community mining mechanism to distribute tokens fairly."
  },
  {
    question: "How can I start mining?",
    answer: "You can start mining directly through our community portal by connecting your Phantom wallet and participating in ecosystem activities."
  },
  {
    question: "When is the exchange listing?",
    answer: "Our target for major Tier-1 exchange listings is Q3 2027, following our ecosystem expansion phases."
  },
  {
    question: "Is the contract audited?",
    answer: "Yes, our smart contract has been audited by leading security firms to ensure the highest level of safety for our community."
  }
];
