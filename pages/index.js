import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-white">Web3 Learning Lab</h1>
          <p className="text-xl text-gray-300">
            Learn to swap tokens, mint NFTs, and interact with smart contracts safely
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <LearningCard
            title="Token Swapping"
            description="Learn how to swap tokens on decentralized exchanges"
            href="/swap"
            icon="🔄"
            color="from-blue-500 to-cyan-500"
          />
          <LearningCard
            title="NFT Minting"
            description="Understand NFT creation and minting process"
            href="/nft"
            icon="🖼"
            color="from-purple-500 to-pink-500"
          />
          <LearningCard
            title="Smart Contracts"
            description="Simulate contract interactions with risk analysis"
            href="/contracts"
            icon="📝"
            color="from-green-500 to-emerald-500"
          />
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4 text-white">Safe Learning Environment</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Practice Web3 interactions in a simulated environment with real-time risk analysis. 
            No real funds required!
          </p>
        </div>
      </div>
    </div>
  )
}

function LearningCard({ title, description, href, icon, color }) {
  return (
    <Link href={href}>
      <div className={`bg-gradient-to-br ${color} rounded-2xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl text-white`}>
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-blue-100">{description}</p>
      </div>
    </Link>
  )
}