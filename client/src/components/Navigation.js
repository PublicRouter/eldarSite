import React from 'react'

// import heartIcon from "../images/socialSvgs/heart.svg"
import fbIcon from "../images/socialSvgs/fb.svg"
import twitterIcon from "../images/socialSvgs/twitter.svg"
import email from "../images/socialSvgs/email.svg"
import discord from "../images/socialSvgs/discord.svg"

// import woodImg from "../images/wood1.png"
import orcLogo from "../images/orcLogo.png"

export default function Navigation( {updatePage} ) {
  return (
    <div className="navigationShell h-[20vh] flex flex-col w-full text-center bg-transparent items-center sm:items-start fixed top-0 z-40">
        <div className='w-full' id="nav">
            {/* <h1 className='absolute text-white text-xl bold pt-1 px-3'>ORX</h1> */}
            {/* <div href="#nav" className="bg-[url('https://cdn.discordapp.com/attachments/956311940366471241/988896395513704519/logo_5.jpg')] w-20 h-20 left-5 bg-center absolute bg-contain bg-no-repeat" /> */}
            <img src={orcLogo} href='#nav' className='hidden sm:block h-40 w-40 absolute left-28 justify-center align-center sm:left-[2vw] '/>
            <ul className='text-xs flex p-2 space-around absolute right-2 lg:right-3 lg:top-5' >
                <a href="https://twitter.com/Orx_Army" target="_blank" className="m-1">
                    <img src={twitterIcon} className="lg:h-8 lg:w-8"/>
                </a>
                <a href="https://discord.com/invite/ZFAmG2YG7T" target="_blank" className="m-1">
                    <img src={discord} className="lg:h-8 lg:w-8" />
                </a>
                <a href="mailto:info@eldar-labs.com" target="_blank" className="m-1">
                    <img src={email} className="lg:h-8 lg:w-8" />
                </a>
                {/* <a href="https://www.linkedin.com/" target="_blank" className="m-1">
                    <img src={discord} className="lg:h-8 lg:w-8" />
                </a> */}
            </ul>
        </div>
        <header className="w-full">
            <h1 className='text-[1.9em] p-1 mt-9 sm:mt-2 font-mainTitleTwo text-orange-500 h-16 '>Eldar Labs<br /><span className='text-[#E6D291] text-[.4em] font-bold font-titleSub relative bottom-5'>On-Ledger Card Game</span></h1>
            
        </header>
        {/* <ul className='flex w-[19vw] sm:justify-self-start p-1 mb-1 justify-around rounded-lg text-sm text-white p-[1.5px] sm:block sm:mt-[20vh] sm:ml-3 sm:w-[18vw] md:max-w-[13vw]'>
            <li className="navi-link border-2 bg-[rgb(206,158,26,.3)] hover:border-[#CE9E1A] rounded-lg p-1 m-1">
                <a href="#" className='px-1 hover:text-white' onClick={()=>{updatePage('Home')}}>Home</a>
            </li>

            <li className='navi-link border-2 bg-[rgb(206,158,26,.3)] hover:border-[#CE9E1A] rounded-lg p-1 m-1'>
                <a href="#" className='px-1 hover:text-white' onClick={()=>{updatePage('CreateCharacterPage')}}>Login</a>
            </li>
            <li className='hidden navi-link border-2 bg-[rgb(206,158,26,.3)] hover:border-[#CE9E1A] rounded-lg p-1 m-1'>
                <a href="#" className='px-1 hover:text-white' onClick={()=>{updatePage('Profile')}}>Profile</a>
            </li>
            <li className='navi-link border-2 bg-[rgb(206,158,26,.3)] hover:border-[#CE9E1A] rounded-lg p-1 m-1'>
                <a href="#" className='px-1 hover:text-white' onClick={()=>{updatePage('FightPage')}}>Fight</a>
            </li>
           
        </ul> */}
        <ul className='flex w-fit flex items-center justify-center sm:justify-self-start p-1 mb-1 justify-around rounded-lg text-[.8em] text-white p-[1.5px] sm:block sm:mt-[20vh] sm:ml-3 sm:w-[18vw] md:max-w-[13vw]'>
            <li className="navi-link border-2 bg-[rgb(206,158,26,.3)] hover:border-[#CE9E1A] rounded-lg p-1 m-1">
                <a href="#" className='px-1 hover:text-white'>Home</a>
            </li>
            {/* IF USER LOGGED IN, SHOW PROFILE, ELSE SHOW LOGIN */}

            <li className='navi-link border-2 bg-[rgb(206,158,26,.3)] hover:border-[#CE9E1A] rounded-lg p-1 m-1'>
                <a href="#about" className='px-1 hover:text-white'>About</a>
            </li>
            <li className='navi-link border-2 bg-[rgb(206,158,26,.3)] hover:border-[#CE9E1A] rounded-lg p-1 m-1'>
                <a href="#first-item" className='px-1 hover:text-white'>Road Map</a>
            </li>
            <li className='navi-link border-2 bg-[rgb(206,158,26,.3)] hover:border-[#CE9E1A] rounded-lg p-1 m-1'>
                <a href="#whitePaperTop" className='px-1 hover:text-white'>White Paper</a>
            </li>
            <li className='navi-link border-2 bg-[rgb(206,158,26,.3)] hover:border-[#CE9E1A] rounded-lg p-1 m-1'>
                <a href="#teamTop" className='px-1 hover:text-white'>Team</a>
            </li>
            {/* <li className='navi-link border-2 bg-[rgb(206,158,26,.3)] hover:border-[#CE9E1A] rounded-lg p-1 m-1'>
                <a href="#" className='px-1 hover:text-white' onClick={()=>{updatePage('CreateCharacterPage')}}>New User </a>
            </li> */}
        </ul>
    </div>
  )
}
