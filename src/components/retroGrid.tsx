export default function RetroGrid() {
  return (
    <div className="relative w-full h-[35vh] bg-black flex items-start justify-center">
      <div className="absolute top-0 w-full h-3 bg-[#FF4C4C] shadow-[0_0_40px_#FF4C4C,0_0_80px_#FF4C4C] z-10"></div>

      <div
        className="absolute top-2 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, transparent 59px, #FF6B6B 60px),
            linear-gradient(to top, transparent 59px, #FF6B6B 60px)
          `,
          backgroundSize: "60px 60px",
          transform: "perspective(1000px) rotateX(75deg)",
          transformOrigin: "top",
          backgroundColor: "black",
        }}
      ></div>
    </div>
  );
}
