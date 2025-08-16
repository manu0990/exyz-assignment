import React from 'react'

export default function Footer() {
  return (
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
  )
}