import React from 'react'
// import { Button, Card, CardGroup } from 'react-bootstrap'
// import Navigation from './Navigation.js'
import logo from "../images/logo3.png"
import twitterLogo from '../images/socialSvgs/twitter.svg'
import discord from "../images/socialSvgs/discord.svg"
import email from "../images/socialSvgs/email.svg"

import jamesTeam from '../images/jamesTeam.jpg'
import whitePaper from '../images/whitePaper.jpg'
// import volcanoMain from "../images/volcanoMain.png"
export default function Home() {

   // "proxy": "http://localhost:3001/", <-- need to add to package on internet access

  const teamMemberList = [
    {
      id: 1,
      image: jamesTeam,
      name: 'James',
      position: 'Full-Stack Web Dev',
      joined: "June 22'",
      summary: "James has been involved in web development for the last year, and graduated from UT Austin full-stack coding bootcamp in January 2022. He initially became involved in blockchain back in 2014 when he would trade ether and bitcoin through local online poker games. After diving deeper into the technology many years later, he found the XRPL’s distributed systems and consensus algorithm from David Schwartz and understood the doorways this underlying digital transactions infrastructure could open."
    },
    {
      id: 2,
      image: jamesTeam,
      name: 'Daniel',
      position: 'Full-Stack Web Dev',
      joined: "June 22'",
      summary: "Daniel has been involved in Backend Web development for a long while and loves looking at code. He isn't the best when it comes to visualizing graphics and designs but he can get around a block of code. His familiarity with NFT's grew as he got engrossed on the project, formerly he would be used to building and managing API’s while also tutoring classes on Web development. Daniel has been working on Orx since July 2022."
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
      summary: "Emmanuel  has been involved in the digital art space since 2018 and has since then worked on hundreds of illustrations as a freelance artist for a wide range of different clients and companies. He has recently been following the NFT space seeing how it has grown tremendously over the past few years. Being passionate about adding a new level of quality into NFT art, and showcasing what we are capable of with the Eldar Labs project."
    },
    {
      id: 6,
      image: jamesTeam,
      name: 'Brandon',
      position: 'Concept Artist',
      joined: "December 21'",
      summary: "Brandon has been involved in the digital art space for several years now and is very passionate about his artwork and creating something unique. He has also recently become interested in the “world” of NFTs. Seeing how the space has slowly been lacking originality in how NFT art is being created, he has had the desire to create something fresh and brand new. Brandon has been working on Orx since November 2021 as a lead artist to really create something unique and immersive."
    }
  ]

  



  return (
    <div className='flex flex-column py-5'>
      <header className="masthead h-[100vh] pt-[25vh] sm:pt-[20vh]">
        <div class="content-center">
          <div class="text-center p-4 mt-6 ">
            <img className="mb-5 mx-auto sm:h-[23vh] sm:w-[35vw]" src={logo} />
            {/* <h2 class="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2> */}
            <a id="about" class="btn bg-orange-700 text-yellow-400 hover:animate-pulse" href="#about">Get Started</a>
          </div>
        </div>
      </header>
      {/* ABOUT PROJECT */}
      <section className="about-section text-center pt-6 min-h-[100vh]" >
        <div className="container px-4 px-lg-5">
          <div className=" justify-content-center">
            <div className="">
              <h2 className="mb-4 fst-italic text-orange-500 text-xl font-mainTitleTwo underline">About The Project</h2>
              <p id="about" className="text-yellow-400 mx-auto leading-9 sm:w-[55vw] md:w-[65vw] sm:text-sm md:text-lg">
                A multi-character NFT and card game project inspired by Middle-Earth/Warcraft "orcs” based on a ranking hierarchy: Overlord, captains, Warchiefs, and Grunts. Eldar is the name of the platform, and we aspire to be a cross-NFT game platform that will be a hub for partnered NFT-project owners to play and communicate in the same game. In doing so we will bring not just value to the XRPL which our game is using, but bringing value to projects that lack the utility and NFT usage function. Instead of being an exclusive NFT game, we aim to be an INCLUSIVE NFT game that brings many together, and makes it fun in the process.
                {/* <a href="https://startbootstrap.com/theme/grayscale/">the preview page.</a>  */}

              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ROAD MAP */}
      <div className='text-xl text-white min-h-[100vh] sm:max-w-[75vw] sm:pl-8 sm:mx-auto mt-6'>
        <h2 className='text-center text-orange-500 text-2xl font-mainTitleTwo underline'>Road Map</h2>
        <ul className='mx-[4vw] mt-3 text-[1rem] p-4 lg:w-[65vw] font-titleSub rounded-lg border-2 border-inner border-orange-300 backdrop-blur-sm bg-slate-900 bg-blend-normal'>
            <li className='font-bold text-lg underline text-green-300 pb-2 italic' id="first-item">Q3 2021: <em className='text-[rgb(206,158,26)]'></em></li>
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
{/* 
            <li className='font-bold text-md text-green-300 pb-2 ml-2'><em className='text-[rgb(206,158,26)]'><em className='text-[1rem] mr-2 text-gray-400'>⋙</em>Expand development team and onboard new members.</em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-2'><em className='text-[rgb(206,158,26)]'><em className='text-[1rem] mr-2 text-gray-400'>⋙</em>Launch social media presence: Twitter, Discord & LinkedIn.</em></li> */}
            <li className='font-bold text-lg underline text-green-500 pb-2 italic animate-bounce'>Q3 2022:<em className='text-[rgb(206,158,26)]'></em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-2'><em className='text-gray-400'><em className='text-[1.5rem] mr-2 text-green-300'>✔</em>July 2022 - Reviewing developer contracts. Updating Roadmap based on developer  Artist timeline. </em></li>
            <li className='font-bold text-md text-green-300 pb-2 ml-2'><em className='text-[rgb(206,158,26)]'><em className='text-[1rem] mr-2 text-gray-400'>⋙</em><em className='text-orange-700'>August 2022 -</em>  Application for Wave 4 of Ripple Grant, and apply for XRPL dev grant. Concept art for all 4 characters completed. Attributes/Traits concepts begin. </em></li>
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
      <div className='min-h-[120vh] w-[80vw] my-[5vh] rounded-xl mx-auto opacity-90 mt-[25vh] sm:mt-[33vh]' id="whitePaperTop">
        <h2 className='text-center text-orange-500 font-mainTitleTwo underline text-xl pt-8' id="white">White Paper</h2>
        <section className='p-2 mt-3'>
            <img src={whitePaper} className="w-[50-vw] h-[50vh] mx-auto z-30 hover:border-2" />
        </section>
      </div>
      {/* TEAM MEMBERS */}
    
      <div className=' min-h-[50vh] sm:min-h-[80vh] mx-auto sm:mx-[10vw] flex-wrap bg-transparent opacity-90 rounded-lg flex justify-center align-items-center w-[75vw] p-2' id="teamTop">

    {teamMemberList.map((member) => (
        <div className='text-yellow-600 text-center text-xs leading-none p-2 items-center justify-items-center bg-stone-900 rounded-lg m-1 h-fit flex flex-column hover:bg-black sm:min-h-[340px] md:min-h-[290px]'>
         
            <img src={member.image} className="h-24 w-18 rounded-full"/>
            <h2 className='text-orange-600 mt-2'>{member.name}</h2>
            <h4 className='text-white md:text-[.75em]'>{member.position}</h4>
            <h4 className='text-white md:text-[.65em]'>Joined {member.joined}</h4>
            <p className="sm:max-w-[35vw] md:max-w-[18vw] p-2 px-4 md:text-[.55em] lg:text-[.7em]">{member.summary}</p>
            {/* <img src={twitterLogo} className="mt-2" /> */}
     

        </div>
    ))}
      </div>
   
    
      {/* EMAIL SUBSCRIBE */}
      <section className="signup-section min-h-[40vh] w-[70vw] md:w-[50vw] mx-auto rounded-lg align-items-center flex flex-wrap bg-transparent opacity-90 my-5 " id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className=" mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-yellow-400 mb-4 text-xl mx-3">Subscribe for ORX weekly updates!</h2>
                        {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!--> */}
                        <form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                            {/* <!-- Email address input--> */}
                            <div className="row input-group-newsletter flex flex-column flex-wrap items-center">
                                <div className="bg-yellow-500 rounded-lg min-w-[15vw] max-w-[60vw]"><input className="form-control min-w-[40vw] text-center" id="emailAddress" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" /></div>
                                <div className="col-auto"><button className="btn bg-yellow-500 opacity-100 hover:bg-orange-300 text-white disabled mt-3" id="submitButton" type="submit">Notify Me!</button></div>
                            </div>
                            <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email is required.</div>
                            <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is not valid.</div>
                            {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3 mt-2 text-white">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
                        </form>
                    </div>
                </div>
            </div>
            
      </section>
      {/* FOOTER */}
      <footer className="footer text-center mt-8 mx-auto">
        <div className='flex mx-auto justify-center mb-2'>
          {/* <img src={twitterLogo} className="m-1" />
          <img src={discordLogo} className="m-1" /> */}
          <a href="mailto:info@eldar-labs.com" target="_blank" className="m-1">
                    <img src={email} className="lg:h-8 lg:w-8" />
          </a>
          <a href="https://discord.com/invite/ZFAmG2YG7T" target="_blank" className="m-1">
                    <img src={discord} className="lg:h-8 lg:w-8" />
          </a>
        </div>
        

        <div className="px-4 text-yellow-400">Copyright &copy; Eldar Labs 2022</div>
      </footer>


    </div>
  )
}
