import React, { useState } from 'react'
// import { XummPkce } from 'xumm-oauth2-pkce';
// import { useMutation } from '@apollo/client';
// import { ADD_CHARACTER } from '../../utils/mutations';
// import Character from '../models/Character';
// const connection = require('../config/connection');

export default function CreateCharacter() {
 
  const [currentUsername, setCurrentUsername] = useState('')
  const [currentWalletAddress, setCurrentWalletAddress] = useState('')
  
    // Invoke `useMutation()` hook to return a Promise-based function and data about the ADD_CHARACTER mutation
    // const [addCharacter, { error }] = useMutation(ADD_CHARACTER);

    // const handleFormSubmit = async (event) => {
    //   event.preventDefault();
  
      // Since mutation function is async, wrap in a `try...catch` to catch any network errors from throwing due to a failed request.
    //   try {
    //     // Execute mutation and pass in defined parameter data as variables
    //     const { data } = await addCharacter({
    //       variables: { userName:currentUsername, walletAddress:currentWalletAddress },
    //     });
    //     console.log(data)
  
    //     window.location.reload();
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };






  // const handleSubmit = e => {
  //   const currentUser = {
  //     userName: currentUsername,
  //     walletAddress : currentWalletAddress
  //   };

  //   connection.on("error", (err) => err);
  //   connection.once('open', async () => {
  //     console.log("connected");
  //     await Character.collection.insertOne(currentUser)
  //   })



  //   characterArray.push(currentUser)
  //   console.log(characterArray)
    
  // }
  //why does this conosle log 3 times?
  // const james = new Character("rKvE3ZUV4e975D5MfzTN4nYLeLgTu1HHF6", userNameInput)
  // james.connectClient()
  // james.getWalletBalance()

  return (
    <div className='max-w-[80vw] sm:w-[40vw]'>
      <div className='flex flex-col items-center text-center justify-between w-fit mx-auto mb-4'>
        {/* <form onSubmit={handleSubmit}> */}
        

        {/* BREAK POINT XUMM CODE ABOVE */}


        <form  className="mx-auto text-center text-white sm:w-[30vw]">
          <h1 className='text-md font-bold mb-3 text-white'>1. First, enter a Orx Profile name.</h1>
          <div className='p-3 w-fit text-white bg-slate-900 opacity-80 rounded-lg mx-auto'>
            {/* <h1 className='text-xl text-white mb-4'>Create Character</h1> */}
            <label htmlFor="usernameInput" className='text-sm text-white font-bold mb-1'>Profile Name:</label><br />
            <input
              value={currentUsername}
              id="usernameInput"
              className="text-center text-orange-600 bg-white rounded-lg"
              placeholder='New Profile Name'
              onChange={e => setCurrentUsername(e.target.value)}
            />
            <br />
            {/* <label htmlFor="walletAddressInput" className='text-md font-bold'>Wallet Address:</label><br />
            <input
              value={currentWalletAddress}
              id="walletAddressInput"
              className="text-center text-blue-600 bg-white rounded-lg"
              placeholder='wallet key'
              onChange={e => setCurrentWalletAddress(e.target.value)}
            /> */}
            <br />
            <button type="submit" className='hover:bg-blue-600 opacity mt-1 text-white bg-yellow-600 w-32 py-1 px-3 rounded-lg'>
              Submit
            </button>
            {/* {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                Something went wrong...
              </div>
            )} */}
          </div>
        </form>
      </div>

    </div>
  )
}


//"rKvE3ZUV4e975D5MfzTN4nYLeLgTu1HHF6"

//Character verification process before saving to db
//db 
//User Table: [id, address, CharacterName]
//Character Table: [address, [character properties]]
