import React from 'react'
import orxImg from "../../images/warcheif_222.jpg"

export default function OrxCard() {
  return (
    <div className='flex flex-col'>
        <h1 className='text-lg text-center mb-6'>Card Library</h1>
        <div className='p-3 flex flex-wrap justify-center'>
            <img src={orxImg} className="rounded-lg w-[150px] h-[200px] p-1" />
            <img src={orxImg} className="rounded-lg w-[150px] h-[200px] p-1" />
            <img src={orxImg} className="rounded-lg w-[150px] h-[200px] p-1" />
            <img src={orxImg} className="rounded-lg w-[150px] h-[200px] p-1" /> 
        </div>
        
    </div>
  )
}
