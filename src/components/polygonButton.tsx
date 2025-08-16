import Image from "next/image";

const buttonDecorations = [
  {
    src: "/line-2.svg",
    className: "absolute w-[149px] h-[3px] top-12 left-0",
    alt: "Line",
  },
  {
    src: "/line-3.svg",
    className: "absolute w-[3px] h-[31px] top-0 left-[168px]",
    alt: "Line",
  },
  {
    src: "/line-4.svg",
    className: "absolute w-[3px] h-[30px] top-5 left-0",
    alt: "Line",
  },
  {
    src: "/line-5.svg",
    className: "absolute w-6 h-[22px] top-[29px] left-[147px]",
    alt: "Line",
  },
  {
    src: "/line-5.svg",
    className: "absolute w-6 h-[22px] top-0 left-0",
    alt: "Line",
  },
  {
    src: "/line-1.svg",
    className: "absolute w-[148px] h-[3px] top-0 left-[22px]",
    alt: "Line",
  },
  {
    src: "/rectangle.svg",
    className: "absolute w-4 h-4 top-[26px] left-36",
    alt: "Rectangle",
  },
  {
    src: "/rectangle.svg",
    className: "absolute w-4 h-4 top-2.5 left-[11px]",
    alt: "Rectangle",
  },
];

const PolygonButton = () => {
  return (
    <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
      <div className="relative w-[173px] h-[51px] mr-[-2.00px]">
        <div className="relative w-[171px] h-[51px]">
          <button
            className="absolute top-3.5 left-[43px] [font-family:'Orbitron',Helvetica] font-extrabold text-[#fbff3d] text-[11px] tracking-[0] leading-6 whitespace-nowrap bg-transparent hover:bg-transparent p-0 h-auto"
          >
            START GAME
          </button>

          <div className="absolute w-[171px] h-[51px] top-0 left-0">
            {buttonDecorations.map((decoration, index) => (
              <img
                key={index}
                className={decoration.className}
                alt={decoration.alt}
                src={decoration.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolygonButton;
