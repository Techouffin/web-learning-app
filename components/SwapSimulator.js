import { useState, useEffect } from 'react'
import RiskIndicator from './RiskIndicator'
import { analyzeSwapRisk } from '../utils/riskAnalyzer'

const TOKENS = [
  { symbol: 'ETH', name: 'Ethereum', balance: 1.5 },
  { symbol: 'USDC', name: 'USD Coin', balance: 2500 },
  { symbol: 'DAI', name: 'Dai Stablecoin', balance: 1200 },
  { symbol: 'UNI', name: 'Uniswap', balance: 50 }
]

export default function SwapSimulator() {
  const [fromToken, setFromToken] = useState(TOKENS[0])
  const [toToken, setToToken] = useState(TOKENS[1])
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')
  const [slippage, setSlippage] = useState(0.5)
  const [risks, setRisks] = useState([])

  useEffect(() => {
    if (fromAmount && fromToken && toToken) {
      const swapData = {
        fromToken: fromToken.symbol,
        toToken: toToken.symbol,
        amount: parseFloat(fromAmount),
        slippage,
        liquidity: Math.random() * 1000000 + 500000
      }
      setRisks(analyzeSwapRisk(swapData))
      
      // Simulate price calculation
      const simulatedRate = Math.random() * 2000 + 1800
      setToAmount((parseFloat(fromAmount) * simulatedRate).toFixed(6))
    } else {
      setRisks([])
    }
  }, [fromAmount, fromToken, toToken, slippage])

  const handleSwap = () => {
    alert('🎉 Swap simulation completed! In a real app, this would execute on blockchain.')
  }

  return (
    <div className="bg-gray-800 rounded-2xl p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Swap Tokens</h2>
        <RiskIndicator risks={risks} />
      </div>

      {/* From Token */}
      <div className="bg-gray-700 rounded-xl p-4 mb-4">
        <div className="flex justify-between mb-2">
          <label className="text-gray-400">From</label>
          <span className="text-gray-400">Balance: {fromToken.balance}</span>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            placeholder="0.0"
            className="bg-transparent text-2xl flex-1 outline-none text-white"
          />
          <select 
            value={fromToken.symbol}
            onChange={(e) => setFromToken(TOKENS.find(t => t.symbol === e.target.value))}
            className="bg-gray-600 rounded-lg px-3 py-2 text-white"
          >
            {TOKENS.map(token => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center my-4">
        <button className="bg-gray-600 rounded-full p-2">
          🔄
        </button>
      </div>

      {/* To Token */}
      <div className="bg-gray-700 rounded-xl p-4 mb-6">
        <div className="flex justify-between mb-2">
          <label className="text-gray-400">To</label>
          <span className="text-gray-400">Balance: {toToken.balance}</span>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={toAmount}
            readOnly
            placeholder="0.0"
            className="bg-transparent text-2xl flex-1 outline-none text-gray-300"
          />
          <select 
            value={toToken.symbol}
            onChange={(e) => setToToken(TOKENS.find(t => t.symbol === e.target.value))}
            className="bg-gray-600 rounded-lg px-3 py-2 text-white"
          >
            {TOKENS.map(token => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Transaction Details */}
      <div className="bg-gray-700 rounded-xl p-4 mb-6">
        <h3 className="font-semibold mb-3 text-white">Transaction Details</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Slippage Tolerance</span>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={slippage}
                onChange={(e) => setSlippage(parseFloat(e.target.value))}
                className="bg-gray-600 rounded w-16 px-2 py-1 text-right text-white"
              />
              <span>%</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Minimum Received</span>
            <span className="text-white">{(parseFloat(toAmount || 0) * (1 - slippage/100)).toFixed(6)}</span>
          </div>
        </div>
      </div>

      <button 
        onClick={handleSwap}
        disabled={!fromAmount || risks.some(r => r.level === 'high')}
        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 rounded-xl py-4 font-semibold text-lg transition-colors text-white"
      >
        {risks.some(r => r.level === 'high') ? 'High Risk Detected' : 'Simulate Swap'}
      </button>
    </div>
  )
}