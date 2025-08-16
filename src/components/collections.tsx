import Image from "next/image";

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top header */}
      <div className="flex whitespace-nowrap overflow-x-hidden h-20 border-y border-white">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="px-4 py-2 text-3xl tracking-widest font-mono m-auto"
            style={{ fontFamily: 'var(--font-megaton)' }}
          >
            NEW COLLECTION
          </span>
        ))}
      </div>

      {/* Image grid */}
      <div className="p-6 px-64">
        <div className="grid grid-cols-4 gap-6 mx-auto">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="group relative aspect-[4/5] bg-gray-200 border border-gray-300 overflow-hidden cursor-pointer hover:border-white transition-all duration-300"
            >
              <Image
                src="/placeholder-img.png"
                alt={`NFT ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay - only bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-lg font-atomos">
                    BUY MINT
                  </span>
                  <span className="text-white font-bold text-xl font-atomos">
                    20 SOL
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
