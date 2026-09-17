import React from 'react'

const Ahero = () => {
  return (
    <div>
        <div className='flex flex-row md:h-100 bg-cover bg-center  bg-[url("/random2.avif")] p-10 font-serif'>
            <div className='flex flex-col w-[50%]'>
                <div className='font-extrabold text-4xl'><h1>Bring Nature Home</h1></div>
                <div className='font-light text-white py-10'>
                    <p>At GreenNest, we believe every space feels better with a little green. We make it easy to discover beautiful, healthy plants and everything you need to help them thrive.</p>
                </div>
            </div>
            <div className='w-[50%] '>
                <img className='h-80 w-full object-scale-down' src="/about.png" alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Ahero
