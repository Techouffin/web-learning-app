export default function RiskIndicator({ risks }) {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-500/10 border-2 border-yellow-500 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span className="font-semibold text-yellow-400">Risk Analysis</span>
        </div>
        <div className="text-sm text-gray-400 mt-2">
          {risks.length} issue{risks.length !== 1 ? 's' : ''} detected
        </div>
      </div>
    </div>
  );
}