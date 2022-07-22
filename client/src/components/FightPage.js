import React from 'react'

export default function FightPage() {
  let card1 = {
    tokenId: "nft123123123123123123",
    meta: {
      nftName: "Warcheif #1",
      nftDescription: "One of Orx Nft mints",
      nftRarity: "Legendary",
      nftBaseStat: 36
    }
  }

  let card2 = {
    tokenId: "nft321321321321321321",
    meta: {
      nftName: "Warcheif #2",
      nftDescription: "One of Orx Nft mints",
      nftRarity: "Legendary",
      nftBaseStat: 32
    }
  }

  const player1 = {
    name:'James G',
    walletAddress: 'r12345s12345t12345u12345v12345',
    currentCards: [card1, card2]
  };

  const player2 = {
    name:'Daniel J',
    walletAddress: 'r12345s12345t12345u12345v54321',
    currentCards: [card1, card2]
  };

  const currentPlayer = player1

  const checkUserCardLevels = (userToCheck) => {
    //check card levels of passed user 
    userToCheck.currentCards.forEach(card => console.log(card.meta.nftName))
  }

  checkUserCardLevels(player1)
  
  const syncPlayerWithOpponent = (player) => {
    //currentLevel=obtain current player level
    //query db for players online with level   
    //get players within level range of player
  }

  function initiateBattle(p1,p2) {

  }
  return (
    <div>FightPage</div>
  )
}
