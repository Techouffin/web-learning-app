import { useState } from 'react'

export default function ContractsPage() {
  const [contractAddress, setContractAddress] = useState('')
  const [functionName, setFunctionName] = useState('')
  const [parameters, setParameters] = useState('')
  const [risks, setRisks] = useState([])

  const analyzeContract = () => {
    // Simulate risk analysis
    const simulatedRisks = [
      {
        type: 'unverified_contract',
        level: 'high',
        message: 'Contract is not verified on block explorer',
        suggestion: 'Only interact with verified contracts'
      },
      {
        type: 'high_gas',
        level: 'medium', 
        message: 'Function requires high gas limit',
        suggestion: 'Review gas costs before proceeding'
      }
    ]
    setRisks(simulatedRisks)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Smart Contract Simulator</h1>
          <p className="text-gray-400">Learn to interact with smart contracts safely</p>
        </header>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Contract Interaction</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Contract Address</label>
                <input 
                  type="text" 
                  placeholder="0x..."
                  value={contractAddress}
                  onChange={(e) => setContractAddress(e.target.value)}
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white font-mono"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2">Function Name</label>
                <input 
                  type="text" 
                  placeholder="transfer, approve, mint, etc."
                  value={functionName}
                  onChange={(e) => setFunctionName(e.target.value)}
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2">Parameters</label>
                <textarea 
                  placeholder='{"to": "0x...", "amount": 100}'
                  value={parameters}
                  onChange={(e) => setParameters(e.target.value)}
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white h-24 font-mono"
                />
              </div>
              
              <button 
                onClick={analyzeContract}
                className="w-full bg-green-500 hover:bg-green-600 rounded-xl py-4 font-semibold text-lg transition-colors"
              >
                Analyze Contract Call
              </button>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Risk Analysis</h2>
            
            {risks.length > 0 ? (
              <div className="space-y-4">
                {risks.map((risk, index) => (
                  <div key={index} className={`p-4 rounded-lg border-2 ${
                    risk.level === 'high' ? 'border-red-500 bg-red-500/10' :
                    risk.level === 'medium' ? 'border-yellow-500 bg-yellow-500/10' :
                    'border-green-500 bg-green-500/10'
                  }`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className={`w-3 h-3 rounded-full ${
                        risk.level === 'high' ? 'bg-red-500' :
                        risk.level === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <span className="font-semibold">{risk.level.toUpperCase()} RISK</span>
                    </div>
                    <p className="text-gray-300 mb-2">{risk.message}</p>
                    <p className="text-green-400 text-sm">💡 {risk.suggestion}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-400">
                <p>Enter contract details to analyze risks</p>
              </div>
            )}
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Smart Contract Safety Tips</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="text-green-400 mt-1">✓</div>
                  <p>Always verify contracts on block explorers</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-green-400 mt-1">✓</div>
                  <p>Check contract audit reports</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-green-400 mt-1">✓</div>
                  <p>Review all function parameters carefully</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-green-400 mt-1">✓</div>
                  <p>Never share your private keys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}