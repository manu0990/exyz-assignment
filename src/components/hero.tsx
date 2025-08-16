import Nav from "./nav"
import PolygonButton from "./polygonButton"
import RetroGrid from "./retroGrid"

export default function Hero() {
  const baseStyle = "font-orbitron text-[10px] font-normal not-italic tracking-[0.08em] capitalize text-white"
  return (
    <div className="h-full w-full bg-[#00120A]">
      <Nav />

      <section className="relative h-[648px] w-[1147px] mt-20 mb-6 m-auto flex flex-col justify-between p-2">
        <span className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white"></span>
        <span className="pointer-events-none absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white"></span>
        <span className="pointer-events-none absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white"></span>
        <span className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white"></span>


        <div className="w-full flex items-center justify-between text-xs" >
          <span className={`${baseStyle} text-left`}>
            <p className="m-0">DSP: <span className="text-[#21E786]">1707 x 979</span></p>
            <p className="m-0">FPS: <span className="text-[#21E786]">67.90</span></p>
          </span>
          <span className={`${baseStyle} text-right`}>
            <p className="m-0"><span className="text-[#21E786]">10-08-2025</span> :DATE</p>
            <p className="m-0"><span className="text-[#21E786]">02:56:20</span> :TIME</p>
          </span>
        </div>

        <div className="w-full flex items-center justify-between text-xs">
          <span className={baseStyle}>{"///:"} <span className="text-[#21E786]">0.20</span></span>

          <section className="flex flex-col items-center">
            <h1
              className="text-transparent text-[84px] font-atomos font-outline-3 leading-[80px] mb-4 text-center"
            >
              EXPLORE NFT COLLECTION
            </h1>
            <p
              className="text-white text-2xl italic font-bold mb-6 text-center leading-[30px] font-metaverse font-voltec tracking-wider"
            >
              A collection of 2525 highly-fashionable NFTs on the ETH Blockchain. Unique,<br />
              metaverse-ready, and designed to benefit their holders.
            </p>
            <PolygonButton />
          </section>

          <span className={baseStyle}><span className="text-[#21E786]">0.49</span> :\\\</span>
        </div>

        <div className="w-full flex items-center justify-between text-xs">
          <span className={`${baseStyle} text-left`}>
            <p>EVO: <span className="text-[#21E786]">Alpha</span></p>
            <p>VERS: <span className="text-[#21E786]">01.08.84</span></p>
          </span>
          <span className={`${baseStyle} text-right`}>
            <p><span className="text-[#21E786]">74.906</span> :LOG</p>
            <p><span className="text-[#21E786]">win11 Chrome/138.0.0.0</span> :SYS</p>
          </span>
        </div>
      </section>

      <RetroGrid />
    </div>
  )
}