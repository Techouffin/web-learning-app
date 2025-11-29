export default function NFTPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">NFT Minting Simulator</h1>
          <p className="text-gray-400">Learn how to create and mint NFTs safely</p>
        </header>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Mint Your NFT</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">NFT Name</label>
                <input 
                  type="text" 
                  placeholder="My Awesome NFT"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2">Description</label>
                <textarea 
                  placeholder="Describe your NFT..."
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white h-24"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2">Upload Image</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                  <p className="text-gray-400">Drag & drop your image here</p>
                  <p className="text-gray-500 text-sm mt-2">or click to browse</p>
                </div>
              </div>
              
              <button className="w-full bg-purple-500 hover:bg-purple-600 rounded-xl py-4 font-semibold text-lg transition-colors">
                Simulate Minting
              </button>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">NFT Learning Guide</h2>
            <div className="space-y-4">
              <LearningStep 
                number="1" 
                title="What are NFTs?"
                description="NFTs are unique digital tokens that represent ownership of digital items"
              />
              <LearningStep 
                number="2" 
                title="Gas Fees"
                description="Minting NFTs requires gas fees - costs vary based on network congestion"
              />
              <LearningStep 
                number="3" 
                title="Royalties"
                description="You can earn royalties from future sales of your NFT"
              />
              <LearningStep 
                number="4" 
                title="Storage"
                description="NFT metadata is usually stored on decentralized storage like IPFS"
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
      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}