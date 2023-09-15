import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
       <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src="https://github.com/HeroX21/mflix/blob/main/na.png?raw=true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewbox="0 0 24 24" />
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      <span className="ml-3 text-xl">Naruto</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-white">Naruto</Link>
      <Link to="/about" className="mr-5 hover:text-white">Jutsu</Link>
        <Link to="/Jinchuriki" className="mr-5 hover:text-white">jinchuuriki</Link>
      <Link to="/all" className="mr-5 hover:text-white">About All Characters</Link> 
    </nav>
    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"><Link to="/naruto">Next</Link>
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

        
    </div>
  )
}
