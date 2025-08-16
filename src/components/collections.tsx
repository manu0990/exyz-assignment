import Image from "next/image";

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top header */}
      <div className="flex whitespace-nowrap overflow-x-hidden h-20  border-y border-white">
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
      <div className="p-6 grid grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="relative flex items-center justify-center p-4 h-[50vh] w-[25vw] border"
          >
            <Image
              src="https://placehold.co/300x400"
              alt="default"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
