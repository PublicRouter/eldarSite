import React from 'react'

import logo from "../images/logo3.png"
import whitePaperPdf from "../images/pdfs/whitePaperPdf.pdf"

import jamesTeam from '../images/jamesTeam.png'
import whitePaper from '../images/whitePaper.png'

import emmanualSocialIcon from "../images/socialSvgs/artstation.png"
import brandonSocialIcon from "../images/socialSvgs/instagram.svg"
import jamesSocialIcon from "../images/socialSvgs/github.svg"
export default function Home() {

  const teamMemberList = [
    {
      id: 1,
      image: jamesTeam,
      name: 'James',
      position: 'Full-Stack Web Dev',
      joined: "June 22'",
      summary: "James has been involved in web development for just under a year, and graduated from UT Austin full-stack coding bootcamp in January 2022. Introduced to blockchain tech in 2015 when he would use ether as settlement for local Texas Hold'em games with friends. After diving deeper into the technology many years later, he found the XRPL’s distributed systems and consensus algorithm from David Schwartz and understood the doorways this underlying digital transactions infrastructure could open.",
      socialLink: "https://github.com/PublicRouter",
      socialImage: jamesSocialIcon
    },
    {
      id: 2,
      image: jamesTeam,
      name: 'Daniel',
      position: 'Full-Stack Web Dev',
      joined: "June 22'",
      summary: "Daniel has been involved in Backend Web development for a long while and loves looking at code. He isn't the best when it comes to visualizing graphics and designs but he can get around a block of code. His familiarity with NFT's grew as he got engrossed on the project, formerly he would be used to building and managing API’s while also tutoring classes on Web development. Daniel has been working on Orx since July 2022.",
      socialLink: "https://github.com/Daniel-for-j",
      socialImage: jamesSocialIcon
    },
    {
      id: 3,
      image: jamesTeam,
      name: 'William',
      position: 'Founder & Story Writer',
      joined: "October 21'",
      summary: "William has been in the crypto space for 3 years now, and has recently been interested in NFTs, and has always loved gaming. Being a fan of old card games like Yu-Gi-Oh, and Pokémon, and newer digital card games like Skyweaver and Gwent, he wants to bring those types of games to the blockchain and NFT space. William has been working on Orx since October 2021, and is dedicated to doing whatever it takes to make the platform come to life."
    },
    {
      id: 4,
      image: jamesTeam,
      name: 'Ravin',
      position: 'Co-founder & Graphic Designer',
      joined: "November 21'",      summary: "Ravin has been invested in cryptocurrency before bitcoin soared in 2020, but not as a life changing investment. An avid or over enthusiastic gamer, he enjoys a variety of games. Also being a self taught Graphic Designer, Photographer and Website Creator, he enjoys being creative and seeing what his imagination can breathe into life. Growing up with Pokémon, Yu-Gi-Oh, and the Digimon generation, he seeks to show tribute to previous generations' and use ever-evolving technology to bring new types of entertainment."
    },
    {
      id: 5,
      image: jamesTeam,
      name: 'Emannuel',
      position: 'Character Artist',
      joined: "May 22'",
      summary: "Emmanuel  has been involved in the digital art space since 2018 and has since then worked on hundreds of illustrations as a freelance artist for a wide range of different clients and companies. He has recently been following the NFT space seeing how it has grown tremendously over the past few years. Being passionate about adding a new level of quality into NFT art, and showcasing what we are capable of with the Eldar Labs project.",
      socialLink: "https://www.artstation.com/puffet69",
      socialImage: emmanualSocialIcon
    },
    {
      id: 6,
      image: jamesTeam,
      name: 'Brandon',
      position: 'Concept Artist',
      joined: "December 21'",
      summary: "Brandon has been involved in the digital art space for several years now and is very passionate about his artwork and creating something unique. He has also recently become interested in the “world” of NFTs. Seeing how the space has slowly been lacking originality in how NFT art is being created, he has had the desire to create something fresh and brand new. Brandon has been working on Orx since November 2021 as a lead artist to really create something unique and immersive.",
      socialLink: "https://www.instagram.com/aarcane.arts/",
      socialImage: brandonSocialIcon
    },
    {
      id: 7,
      image: jamesTeam,
      name: 'Max',
      position: 'Unity Dev',
      joined: "August 22'",
      summary: "Max is a programmer who is currently using the Unity game engine to bring ORX to life. Though recently to his craft, he is familiar with c#, Javascript, and gdscript (python-like language for the Godot game engine), and is passionate about his work in game dev. He is out to make something unique and original; to leave his own mark in the gaming industry. He is fond of rts, survival games, and pretty much anything else that is well made"
    },

  ]

  return (
    <div className='flex flex-col py-5'>
      <header className="masthead h-[100vh] pt-[5vh]">
        <div className="content-center">
          <div className="text-center px-4 pt-[27vh]">
            <img className="mb-5 h-[16vh] mx-auto sm:h-[23vh] sm:w-[35vw] animate-[pulse_3s_ease-in-out_infinite]" src={logo} alt="orx logo center page" />
            {/* <a id="about" className="btn bg-orange-700 text-yellow-400 hover:animate-pulse" href="#about">Get Started</a> */}
          </div>
        </div>
      </header>

      <section className="about-section text-center pt-6 min-h-[100vh]" >
        <div className="container px-4 px-lg-5">
          <div className=" justify-content-center">
            <div className="sm:ml-6 pt-[18vh]"  id="about">
              <h2 className="mb-4 fst-italic text-orange-500 text-xl font-mainTitleTwo underline">About The Project</h2>
              <p className="text-white bg-[rgb(48,17,12,.55)] p-4 rounded-lg mx-auto leading-9 sm:w-[55vw] md:w-[65vw] lg:w-[50vw] sm:text-sm md:text-[1em]">
                A multi-character NFT and card game project inspired by Middle-Earth/Warcraft "orcs” based on a ranking hierarchy: Overlord, Captains, Warchiefs, and Grunts. Eldar is the name of the platform, and we aspire to be a cross-NFT game platform that will be a hub for partnered NFT-project owners to play and communicate in the same game. In doing so we will bring not just value to the XRPL which our game is using, but bringing value to projects that lack the utility and NFT usage function. Instead of being an exclusive NFT game, we aim to be an INCLUSIVE NFT game that brings many together, and makes it fun in the process.

              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ROAD MAP */}
      <div className='text-xl text-white min-h-[100vh] sm:max-w-[75vw] sm:pl-8 sm:mx-auto mt-6 pt-[16vh]'  id="first-item">
        <h2 className='text-center text-orange-500 text-2xl font-mainTitleTwo underline'>Road Map</h2>
        <ul className='mx-[4vw] mt-3 text-[1rem] p-4 lg:w-[65vw] font-titleSub rounded-lg backdrop-blur-sm bg-[rgb(58,17,12,.55)] opacity-80'>
            <li className='font-bold text-lg underline text-green-300 pb-2 italic'>Q3 2021: <em className='text-[rgb(206,158,26)]'></em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-4'><em className='text-gray-400'><em className="text-green-300 mr-2 text-[1.5rem]">✔</em>October 2021 - Orx Army Game and Concept Begin</em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-4'><em className='text-gray-400'><em className="text-green-300 mr-2 text-[1.5rem]">✔</em>November 2021 - Concept Artist added to team</em></li>
            <li className='font-bold text-lg underline text-green-300 pb-2 italic'>Q1 2022: <em className='text-[rgb(206,158,26)]'></em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-4'><em className='text-gray-400'><em className="text-green-300 mr-2 text-[1.5rem]">✔</em>January 2022 - Revised and expanded the whitepaper, and outline as the Orx concept grows.</em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-4'><em className='text-gray-400'><em className="text-green-300 mr-2 text-[1.5rem]">✔</em>February 2022 - First iteration of the project website, and creating our marketing and social communication platforms via Twitter and Discord. </em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-4'><em className='text-gray-400'><em className="text-green-300 mr-2 text-[1.5rem]">✔</em>March 2022  - Realism Artist added to team. Exploring other XRPL projects for influence and potential partnerships. </em></li>
            <li className='font-bold text-lg underline text-green-300 pb-2 italic'>Q2 2022:<em className='text-[rgb(206,158,26)]'></em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-4'><em className='text-gray-400'><em className="text-green-300 mr-2 text-[1.5rem]">✔</em>April 2022 - Marketing campaign begins, project goes Live to build its community. </em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-4'><em className='text-gray-400'><em className="text-green-300 mr-2 text-[1.5rem]">✔</em>May 2022 - Game music and sound effects polished for the game.</em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-4'><em className='text-gray-400'><em className="text-green-300 mr-2 text-[1.5rem]">✔</em>June 2022 - Brought in developers to join the project team and work on game MVP for showcase purposes. Meetings with gaming companies for cost proposals to complete the project.</em></li>

            <li className='font-bold text-lg underline text-green-500 pb-2 italic animate-bounce'>Q3 2022:<em className='text-[rgb(206,158,26)]'></em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-2'><em className='text-gray-400'><em className='text-[1.5rem] mr-2 text-green-300'>✔</em>July 2022 - Reviewing developer contracts. Updating Roadmap based on developer and artist timelines. </em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-2'><em className='text-gray-400'><em className='text-[1.5rem] mr-2 text-green-300'>✔</em>August 2022 - Application for Wave 4 of Ripple Grant, and apply for XRPL dev grant. Concept art for all 4 characters completed. Attributes/Traits concepts begin.</em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-2'><em className='text-[rgb(206,158,26)]'><em className='text-[1rem] mr-2 text-gray-400'>⋙</em><em className='text-orange-700'>September 2022 -</em> 4 Base Characters completed. Discord Community Engagement and Growth. Onboard moderators and any additional admin needed to continue oversight of social communications.  </em></li>

            <li className='font-bold text-lg underline text-green-300 pb-2 italic'>Q4 2022:<em className='text-[rgb(206,158,26)]'></em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-2'><em className='text-[rgb(206,158,26)]'><em className='text-[1rem] mr-2 text-gray-400'>⋙</em><em className='text-orange-700'>October 2022 -</em> Showcases multiple Orx characters and attribute concepts.</em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-2'><em className='text-[rgb(206,158,26)]'><em className='text-[1rem] mr-2 text-gray-400'>⋙</em><em className='text-orange-700'>November 2022 -</em> All 4 Orx characters completed and finalized, 50% of traits completed.</em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-2'><em className='text-[rgb(206,158,26)]'><em className='text-[1rem] mr-2 text-gray-400'>⋙</em><em className='text-orange-700'>December 2022 -</em> Minting Date and Game Launch to be determined.</em></li>

            <li className='font-bold text-lg underline text-green-300 pb-2 italic'>Q1 2023:<em className='text-[rgb(206,158,26)]'></em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-2'><em className='text-[rgb(206,158,26)]'><em className='text-[1rem] mr-2 text-gray-400'>⋙</em><em className='text-orange-700'>January 2023 -</em> Whitepaper update to reveal new features kept secret coming to the Game, and upcoming platform features. 100% traits and attributes completed. </em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-2'><em className='text-[rgb(206,158,26)]'><em className='text-[1rem] mr-2 text-gray-400'>⋙</em><em className='text-orange-700'>February 2023 -</em> Orx NFT Collection minting goes live, and launches Eldar Game and Marketplace.</em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-2'><em className='text-[rgb(206,158,26)]'><em className='text-[1rem] mr-2 text-gray-400'>⋙</em><em className='text-orange-700'>March 2023 -</em> Opening Eldar Merch Store.</em></li>

        </ul>
        

      </div>
      {/* WHITE PAPER */}
      <div className='min-h-[100vh] w-[80vw] my-[5vh] rounded-xl mx-auto opacity-90 mt-[25vh] sm:mt-[33vh] pt-[16vh]' id="whitePaperTop">
        <h2 className='text-center text-orange-500 font-mainTitleTwo underline text-xl pt-8' id="white">White Paper</h2>
        <a href={whitePaperPdf} target="_blank" rel="noreferrer" className='p-2 mt-3'>
            <img src={whitePaper} alt="orx character for whitepaper" className="w-[50-vw] h-[50vh] mx-auto z-30 hover:border-2" />
        </a>
      </div>
      {/* TEAM MEMBERS */}
    
      <div className='teamContainer min-h-[60vh] sm:min-h-[80vh] px-4 pb-4 mx-auto flex justify-center align-items-center flex-wrap bg-transparent opacity-80 rounded-lg w-[85vw] sm:w-[60vw] md:w-[70vw] lg:w-[75vw] pt-[16vh]' id="teamTop">

    {teamMemberList.map((member) => (
        <div key={member.id} className='teamCard text-yellow-400 text-center text-sm leading-tight px-3 py-3 items-center bg-[rgb(58,17,12,.55)] opacity-90 rounded-lg m-1 flex flex-col hover:bg-black sm:min-h-[340px] md:min-h-[350px] md:max-h-[350px] md:max-w-[26vw] lg:min-h-[410px] lg:max-h-[415px] lg:max-w-[21vw] lg:text-md'>
            <img src={member.image} alt="grunt orx character" className="h-24 w-18 rounded-full"/>
            <h2 className='text-orange-600 mt-2'>{member.name}</h2>
            <h4 className='text-white md:text-[.75em]'>{member.position}</h4>
            <h4 className='text-white md:text-[.65em]'>Joined {member.joined}</h4>
            <p className="py-2 px-2 md:text-[.6em] lg:text-[.78em] lg:py-0">{member.summary}</p>
            {member.socialImage?  
              (
                <a href={member.socialLink} target="_blank" rel="noreferrer" className='h-6 w-6 rounded-lg hover:p-[1px]'>
                  <img src={member.socialImage} alt="social media icon"></img>
                </a>
                
                 
               
              ) : <h1> No image availalble.</h1>
            }
        </div>
    ))}
      </div>
  
      <footer className="footer text-center mt-8 mx-auto">
        <div className="px-4 text-white bg-[rgb(51,30,27,.75)] rounded-lg py-1">Copyright &copy; Eldar Labs 2022</div>
      </footer>
    </div>
  )
}
