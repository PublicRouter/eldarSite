import { React, useState } from 'react'
import card1 from "../images/warcheif_222.jpg"
import card2 from "../images/wowBridge.jpg"
// import bgMap from "../images/bgmap.jpg"
export default function () {
   
    
    const cardObject = {
        rarity: "Warcheif",
        totalXp: 22100,
        level: 68,
        nftImage: card1,
        health:99,
        attack:84,
        defence:78,
        stamina: 69
    };
    const cardObject2 = {
        rarity: "Grunt",
        totalXp: 8100,
        level: 22,
        nftImage: card2,
        health:58,
        attack:42,
        defence:46,
        stamina: 38
    };

    const userObject = {
        walletAddress: "r12345a12345b12345c12345d12345",
        userName: "OrxTestAccount",
        allCards: [cardObject, cardObject2],
        verified: true
    };

    const [currentCard, updateCurrentCard] = useState(userObject.allCards[0])


    return (
        <div className=" pt-[26vh] pb-6 ">
            <div className='bg-gray-900 p-4 w-fit mx-auto rounded-lg opacity-90 flex flex-col'>
                <div className="text-center text-white text-[1.75rem] mb-2 w-fit mx-auto">
                    <h1>ORX Profile</h1>
                    <h2>Welcome, <em className='text-[#CE9E1A]'>{userObject.userName}</em></h2>
                </div>
                <div className='bg-gray-800 opacity-90 mt-3 w-fit p-2 rounded-lg shadow-lg text-white mx-auto'>
                    <h1 className='text-center'>Current Selected Card:</h1>

                    <div className='flex justify-center items-center'>
                        <img src={cardObject.nftImage} className="w-[200px] h-[260px] p-3">

                        </img>
                        <content className="p-1">
                            <p>Rarity: {cardObject.rarity}</p>
                            <p>TotalXP: {cardObject.totalXp}</p>
                            <p>Level: {cardObject.level}</p>
                            <p>Health: {cardObject.health}</p>
                            <p>Attack: {cardObject.attack}</p>
                            <p>Defence: {cardObject.defence}</p>
                            <p>Stamina: {cardObject.stamina}</p>
                        </content>
                    </div>

                </div>

                <div className=' w-[80vw] sm:w-fit text-sm mx-auto mt-5 rounded-lg text-white flex-col flex-wrap bg-stone-900 opacity-80 items-center justify-center'>
                    <h1 className='text-center border-b-2 border-white pt-3 pb-1 mb-2 w-[120px] mx-auto'>Card Library</h1>
                    <div className='flex flex-wrap justify-center w-fit mx-auto pb-3'>
                    {userObject.allCards.map((card) => (
                        <div className='flex flex-col justify-center items-center flex-wrap border-2 rounded-md m-2'>
                            <h2 className=' text-center text-md p-1'>{card.rarity}</h2>
                            <div className='flex items-center shadow-lg shadow-white'>
                                <img src={card.nftImage} className="w-[100px] h-[150px] p-2">

                                </img>
                                <content className="p-1 sm:p-0 text-xs">
                                    <p>Rarity: <em className='text-yellow-600'>{card.rarity}</em></p>
                                    <p>TotalXP: {card.totalXp}</p>
                                    <p>Level: {card.level}</p>
                                    <p>Health: {card.health}</p>
                                    <p>Attack: {card.attack}</p>
                                    <p>Defence: {card.defence}</p>
                                    <p>Stamina: {card.stamina}</p>
                                </content>
                            </div>

                        </div>
                    ))}
                    </div>
                  
                </div>
            </div>




        </div>
    )
}
