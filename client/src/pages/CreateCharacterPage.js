import React from 'react';

import CharacterList from '../components/CharactersList';
import CharacterForm from '../components/CharacterForm';
import SignRequest from "../components/ReturnSignObject"
import OrxCard from '../components/OrxCard';


const CreateCharacterPage = () => {

  // const { loading, data } = useQuery(QUERY_CHARACTERS);
  // const characters = data?.characters || [];

  // const getQrAndReturnTransactionObject = async () => {
  //   console.log("FIRING INSIDE FETCH")
  //   //send get request to back end for transaction data 
  //   const qrData = await fetch("http://localhost:3001/results")
  //   console.log("QR Data", qrData)
  // }



  return (
    <main className="w-full h-[130vh] sm:h-[180vh]">
        <div className="rounded-lg flex flex-column items-center justify-center p-6 sm:w-[70vw] mx-auto h-full">
          <div className='shadow-md shadow-orange-900 px-3 py-4 ml-2 rounded-lg mt-28 sm:mt-0 backdrop-contrast-150'>
            <SignRequest />
          </div>
          <div className='mt-5 w-[65vw] mx-auto text-center'>
            <em className='text-yellow-400'>All Profiles will store your XRPL Account Address, meaning you must be able to sign '0' cost 'SignIn' transactions from that account to access your Profile. This allows us to implement the underlying XRPL technology to verify ones ownership credentials directly on-chain with top level encryption.</em>
          </div>
        </div>
        
        {/* <div className=''>
          <OrxCard />
        </div> */}
        {/* <div className=" my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CharacterList
              characters={characters}
              title="List of all created Characters..."
            />
          )}
        </div> */}
      {/* </div> */}
    </main>
  );
};

export default CreateCharacterPage;
