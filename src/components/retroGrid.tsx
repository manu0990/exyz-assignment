import Image from "next/image";

export default function RetroGrid() {
  return (
    <div className="relative w-full h-[35vh] bg-black flex items-start justify-center">
      <div className="absolute top-0 w-full h-3 bg-[#FF4C4C] shadow-[0_0_40px_#FF4C4C,0_0_80px_#FF4C4C] z-10"></div>

      <div className="absolute top-0 w-full h-full">
        <Image
          className="w-full h-full object-cover"
          fill
          alt="retro-grid"
          src="/retro-grid.svg"
        />
      </div>
    </div>
  );
}
