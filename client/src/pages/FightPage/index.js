import React from 'react'

import Profile from './profile'
export default function fightMainPage() {
  return (
    // <div className='h-[120vh]'>
    //      <Profile />
    // </div>
       
    
    <div className='mainHousing w-full h-[135vh] flex flex-column justify-end'>
        <Profile />
        <div className='firstCompound w-[80%] h-full flex align-items-center justify-center mx-auto flex-column'>
            
            <div className='mx-auto coolTopSection w-full sm:w-[70%] p-3 bg-transparent opacity-80 mt-[20vh] sm:mt-[0vh]'>
                <h1 className='text-center text-[1.3em] text-white pb-3'>Battle Ground</h1>
                <section className='text-white'>
                    <div className='flex flex-wrap justify-center text-center p-2'>
                        <div className='card w-[200px] h-[200px] mb-2 m-1 flex flex-column justify-center text-black align-items-center'>
                            <h3>Name</h3>
                            <section>
                                Image <br />
                                Stats
                            </section>
                            <footer>
                                bottom of card
                            </footer>
                        </div>
                        <div className='card w-[200px] h-[200px] mb-2 m-1 flex justify-center text-black align-items-center'>
                            <h3>Name</h3>
                            <section>
                                Image <br />
                                Stats
                            </section>
                            <footer>
                                bottom of card
                            </footer>
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus accusantium animi facere. Aperiam nemo maiores cum labore! Perferendis quaerat et modi tempora delectus, nisi nobis ratione, cum quo sit sequi molestiae distinctio tenetur, voluptate repellat assumenda. Iste iusto eveniet voluptatum tempore, praesentium est molestias libero odio ad, quo corrupti commodi dolor? A ea sapiente, iusto maxime fuga accusantium esse?
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}
