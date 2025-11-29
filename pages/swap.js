import SwapSimulator from '../components/SwapSimulator'

export default function SwapPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white">Token Swap Simulator</h1>
          <p className="text-gray-400">Learn how to swap tokens on DEXs safely</p>
        </header>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <SwapSimulator />
          
          <div className="bg-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Learning Guide</h2>
            <div className="space-y-4">
              <LearningStep 
                number="1" 
                title="Understand Slippage"
                description="Slippage is the difference between expected and actual trade prices due to market movement"
              />
              <LearningStep 
                number="2" 
                title="Check Liquidity"
                description="Higher liquidity means better prices and less slippage"
              />
              <LearningStep 
                number="3" 
                title="Review Fees"
                description="DEXs charge fees for trading - typically 0.3% on Uniswap"
              />
              <LearningStep 
                number="4" 
                title="Confirm Transaction"
                description="Always review transaction details before signing"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LearningStep({ number, title, description }) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}