//character
//nftCard
//effectCard
const nftCardJsonObject = require("../../temp_seeds/nftCardSeed.json")


//IMPORTING NFT CARDS
const myNftCards = []

class NftCard {
    constructor(nftTokenId, xp){
       //actual nft token id when we mint
        this.nftTokenId = nftTokenId;
        //total nft xp accumulated
        this.xp = xp;
        //battle flags (scale based on xp?)
        this.hp = this.xp/100;
        this.str = this.xp/1000;
        this.def = this.xp/1000;
        this.stam = this.xp/1500;
    }
    //methods


}

module.exports = NftCard;
// nftCardJsonObject.allNftCards.forEach((card) => {
//     const newCard = new NftCard(card.nftTokenId, card.xp)
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