import React from 'react'


import twitterIcon from "../images/socialSvgs/twitter.svg"
import email from "../images/socialSvgs/email.svg"
import discord from "../images/socialSvgs/discord.svg"


import orcLogo from "../images/orcLogo.png"

export default function Navigation() {
  return (
    <div className="navigationShell h-[20vh] flex flex-col w-full text-center bg-transparent items-center sm:items-start fixed top-0 z-40">
        <div className='w-full' id="nav">
            <img src={orcLogo} href='#nav' className='hidden sm:block h-40 w-40 absolute left-28 justify-center align-center sm:left-[2vw] '/>
            <ul className='text-xs p-2 flex space-around absolute right-1 md:right-5 md:top-3 lg:right-10 lg:top-5' >
                <a href="https://twitter.com/Orx_Army" target="_blank" className="m-1">
                    <img src={twitterIcon} className="lg:h-8 lg:w-8"/>
                </a>
                <a href="https://discord.com/invite/ZFAmG2YG7T" target="_blank" className="m-1">
                    <img src={discord} className="lg:h-8 lg:w-8" />
                </a>
                <a href="mailto:info@eldar-labs.com" target="_blank" className="m-1">
                    <img src={email} className="lg:h-8 lg:w-8" />
                </a>
            </ul>
        </div>
        <header className="w-full">
            <h1 className='text-[1.9em] p-1 mt-[3vh] sm:mt-2 font-mainTitleTwo text-orange-500 h-16 '>Eldar Labs<br /><span className='text-[#E6D291] text-[.4em] font-bold font-titleSub relative bottom-5'>On-Ledger Card Game</span></h1>
            
        </header>
  
        <ul className='buttonContainer flex font-titleSub p-1 mb-1  rounded-lg text-[.6em] text-white sm:relative sm:mt-[18vh] sm:min-w-[16vw] sm:ml-3 '>
                <a href="#" className="navButtonA text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 backdrop-blur rounded-lg px-2 py-2.5 text-center mr-2 mb-2 p-2">Home</a>
          
                <a href= "#about" className="navButtonA  text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg backdrop-blur px-2 py-2.5 text-center mr-2 mb-2 p-2">About</a>
          
                <a href="#first-item" className="navButtonA  text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg backdrop-blur px-2 py-2.5 text-center mr-2 mb-2 p-2">Roadmap</a>
          
            
                <a href="#whitePaperTop" className="navButtonA  text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg backdrop-blur px-2 py-2.5 text-center mr-2 mb-2 p-2">Whitepaper</a>
                <a href="#teamTop" className="navButtonA  text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg backdrop-blur px-2 py-2.5 text-center mr-2 mb-2 p-2">Team</a>
           
        </ul>
    </div>
  )
}
