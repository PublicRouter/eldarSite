import { React, useState, useEffect } from 'react'


export default function ReturnSignObject() {

    const [currentUsername, setCurrentUsername] = useState('')
    const [currentWalletAddress, setCurrentWalletAddress] = useState('')

    const [payloadUuidAndQrObj, updatePayloadUuidAndQrObj] = useState({})


    const getSignObj = async () => {
        const result = await fetch('http://localhost:3001/api/xummSign', {
            method: 'GET',
        });
        const json = await result.json()
        updatePayloadUuidAndQrObj(json)
        console.log(payloadUuidAndQrObj)
        getSubscribe()
    }

    async function doSubscribe() {

    }



    //fetching express to return message: uuid
    const getSubscribe = async () => {
        const requestOptions = {
            method: 'GET',
        };
        const postResult = await fetch(`http://localhost:3001/api/payloadSubscribe?uuid=${payloadUuidAndQrObj.payloadUUID}`, requestOptions)
        // const postToJson = await postResult.json();
        const postUp = await postResult.json()
        console.log("my POST return data: ", postUp)
    }
    //-----FETCH WITH VARIABLE FOR UUID FROM STATE OBJECT TO SUBSCRIBE FUNCTION-----
    //create get request to express server api/
    return (


        <>
            <div className='max-w-[80vw] sm:w-[40vw]'>
                <div className='flex flex-col items-center text-center justify-between w-fit mx-auto mb-4'>
                    {/* <form onSubmit={handleSubmit}> */}

                    <form className="mx-auto text-center text-orange-100 sm:w-[30vw] p-3">
                        <h1 className='text-sm font-bold mb-3 underline'>1. First, enter a Orx Profile name. If found violating terms, will be automatically blacklisted and be forced to fund a new wallet to create another account.</h1>
                        <div className='p-3 w-fit text-white opacity-80 rounded-lg mx-auto'>
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



            <div className='text-center max-w-[80vw] sm:w-[40vw]'>
                <h2 className='text-orange-100 p-2 mb-2 text-sm font-bold sm:w-[40vw] underline' >2. Then, authenticate wallet ownership by clicking 'Connect Wallet' and scanning the generated QR code. After initial successful QR authentication, your wallet will be verified and can then be sent signature requests via push notification instead of QR.</h2>
                <div className='opacity-80 p-2 rounded-lg mx-auto w-fit'>
                    <div className='text-center text-amber-900 '>
                        <button className='hover:bg-blue-600 relative text-white bg-yellow-600 py-1 px-3 rounded-lg' onClick={getSignObj}>Connect Wallet</button>
                        <div className='bg-orange-200 bg-transparent'>
                            <img src={payloadUuidAndQrObj.qrLink} className="h-36 w-36 mt-6 border-orange-900 border-3 rounded-lg bg-yellow-600" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
