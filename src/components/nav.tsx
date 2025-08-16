export default function Nav() {
  return (
    <nav className="w-full h-[80px] flex items-center justify-between px-56 py-2 bg-transparent">
      <div className="text-2xl font-extrabold italic tracking-widest">
        <div className="text-white text-2xl font-extrabold italic tracking-widest" style={{ fontFamily: 'Voltec, Orbitron, sans-serif' }}>
          Exyz
        </div>
      </div>
      <div className="text-2xl font-bold italic tracking-widest">
        <div className="text-white text-2xl font-bold italic tracking-widest" style={{ fontFamily: 'Voltec, Orbitron, sans-serif' }}>
          Leaderboard
        </div>
      </div>
      <button className="relative px-6 py-2 transition" >
        CONNECT WALLET
        <span className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white"></span>
        <span className="pointer-events-none absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white"></span>
        <span className="pointer-events-none absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white"></span>
        <span className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white"></span>
      </button>

    </nav>
  )
}