import React from 'react'

export default function profile() {
  return (
    <div className='shadow-md shadow-orange-900 text-black h-24 w-fit p-2 relative left-[7.5vw] sm:top-24 sm:left-56  text-center bg-orange-500 opacity-80 border-4 border-orange-300 flex top-44 left-4 rounded-full hover:border-orange-900'>
        <div className='flex h-fit'>
            {/* <img /> */}
            <div className="relative h-18 w-20 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPt3sjbzcOXP-GtQ2GiFVrC7dzkovcf2c0Cg&usqp=CAU')]  bg-cover rounded-full text-white border-2 border-orange-200">

            </div>
            <div className=' h-fit w-fit '>
                {/* status/badges/icons */}
                {/* ICONS */}
                <p className='relative top-20 right-20 text-[1em]'>
                    <em className='relative bottom-4 right-1 animate-pulse'>🔘</em>
                    <em className='relative bottom-8'>💢</em>
                    <em className='relative bottom-14 right-3'>💨</em>   
                </p>
                <div className=' text-orange-100 z-20 pl-2 relative bottom-5 w-[140px] mx-auto h-12 text-[.9em]'>
                    <p className=''>Daniel J.</p>
                    <p>Level 13</p>
                    <p>Admin.</p>
                </div>
            </div>
            
        </div>
       
        
    </div>
  )
}
