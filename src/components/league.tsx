import React from 'react'

export default function League() {
  const leaderboardData = [
    {
      rank: 1,
      name: "REALTECH",
      logo: "⚔️",
      score: 17,
      sol: null
    },
    {
      rank: 2,
      name: "PSYCHO GXOD",
      logo: "🛡️",
      score: 15,
      sol: 30
    },
    {
      rank: 3,
      name: "SSTS",
      logo: "🔱",
      score: 5,
      sol: 25
    },
    {
      rank: 4,
      name: "30TH RATA",
      logo: "🦅",
      score: 11,
      sol: 25
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <h1 className="text-6xl font-bold text-center mb-16 font-voltec">
          THE LEAGUE
        </h1>

        <div className="max-w-6xl mx-auto">
          <div className="bg-[#00120A] rounded-xl p-12 border border-green-500/20 backdrop-blur-sm">

            {leaderboardData.map((team, index) => (
              <div key={team.rank}>
                <div className="flex items-center justify-between py-8">
                  <div className="flex items-center gap-8">
                    <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-white text-4xl border border-gray-600">
                      {team.logo}
                    </div>
                    <span className="text-3xl font-bold font-['Voltec']">
                      {team.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-10">
                    <span className="text-4xl font-bold">
                      {team.score}
                    </span>
                    <div className="text-4xl">
                      💀
                    </div>
                    {team.sol && (
                      <span className="text-3xl font-bold">
                        {team.sol} SOL
                      </span>
                    )}
                  </div>
                </div>

                {index < leaderboardData.length - 1 && (
                  <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 my-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="relative z-10 mt-auto">
        <div className="w-full h-0.5 bg-neutral-700"></div>

        {/* Footer content */}
        <div className="bg-[#0a0f1a] px-6 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <span className="text-xl font-voltec">
              <span className='text-green-700 text-lg font-bold'>/</span> © WEBTHREE 2024
            </span>
            <span className="text-xl font-voltec">
              <span className='text-green-700 text-lg font-bold'>/</span> ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}