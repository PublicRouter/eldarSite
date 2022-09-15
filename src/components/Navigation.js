import React from 'react'

import twitterIcon from "../images/socialSvgs/twitter.svg"
import email from "../images/socialSvgs/email.svg"
import discord from "../images/socialSvgs/discord.svg"

import orcLogo from "../images/logo599.webp"

export default function Navigation() {
  return (
    <div className="navigationShell h-[16vh] fixed flex flex-col w-full text-center bg-transparent rounded-b-2xl items-center sm:items-start top-0 z-40">
        <div className='w-full' id="nav">
            <img src={orcLogo} alt="small orx grunt in top left corner" href='#nav' className='hidden sm:block h-36 w-36 fixed left-28 justify-center align-center sm:left-[2vw] '/>
            <ul className='text-xs p-2 flex space-around fixed right-1 md:right-5 md:top-3 lg:right-10 lg:top-5' >
                <a href="https://twitter.com/Orx_Army" target="_blank" rel="noreferrer" className="m-1">
                    <img src={twitterIcon} alt="twitter logo" className="lg:h-8 lg:w-8 hover:animate-bounce-slow"/>
                </a>
                <a href="https://discord.com/invite/ZFAmG2YG7T" target="_blank" rel="noreferrer" className="m-1">
                    <img src={discord} alt="discord logo" className="lg:h-8 lg:w-8 hover:animate-bounce-slow" />
                </a>
                <a href="mailto:info@eldar-labs.com" target="_blank" rel="noreferrer" className="m-1">
                    <img src={email} alt="email icon" className="lg:h-8 lg:w-8 hover:animate-bounce-slow" />
                </a>
            </ul>
        </div>
        <header className="w-full">
            <h1 className='text-[2.5em] p-1 mt-[3vh] sm:mt-2 font-permanentMarker text-orange-500 h-16 '>Eldar Labs<br /></h1>
            {/* <span className='text-[#E6D291] text-[.45em] font-bold font-dancingScript relative bottom-5'>On-Ledger Card Game</span> */}
            
        </header>
  
        <ul className='buttonContainer flex fixed top-20 font-titleSub p-1 mb-1 rounded-lg text-[.6em] md:text-[.75em] lg:text-[.9em] text-white sm:fixed sm:top-20 sm:mt-[18vh] sm:min-w-[15vw] sm:ml-3'>
                <a href="#" className="navButtonA text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 backdrop-blur rounded-lg px-2 py-2.5 text-center mr-2 mb-2 p-2">Home</a>        
                <a href="#about" className="navButtonA text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg backdrop-blur px-2 py-2.5 text-center mr-2 mb-2 p-2">About</a>         
                <a href="#first-item" className="navButtonA text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg backdrop-blur px-2 py-2.5 text-center mr-2 mb-2 p-2">Roadmap</a>      
                <a href="#whitePaperTop" className="navButtonA text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg backdrop-blur px-2 py-2.5 text-center mr-2 mb-2 p-2">Whitepaper</a>
                <a href="#teamTop" className="navButtonA text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg backdrop-blur px-2 py-2.5 text-center mr-2 mb-2 p-2">Team</a>       
        </ul>
    </div>
  )
}
