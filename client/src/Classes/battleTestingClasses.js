//character
//nftCard
//effectCard

//mimics data returned from db query
const onlineCharactersJsonObject = require("../../temp_seeds/characterSpoofs.json")
// const NftCard = require("../Classes/NftCardClass")

//IMPORTING NFT CARDS
const myNftCards = []

const charList = onlineCharactersJsonObject.allOnlineCharacters
charList.forEach((char) => {
    const onlineCharsNftList = char.nftList
    
})
// onlineCharactersJsonObject.forEach((char) => {
//     const charsNfts = new NftCard(char)
//     myNftCards.push(newCard)
// })

// console.log("myCardList: ", myNftCards)
//how to break up...xp filtering
//level,battle stats,when to check xp for updates,

//


// const warcheif1 = new NftCard(1, 12100)
// const grunt1 = new NftCard(2, 5000)
// console.log(warcheif1)
// console.log(grunt1)




class EffectCard {
    constructor() {

    }
}