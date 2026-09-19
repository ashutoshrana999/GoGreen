import React from 'react'

const Hero = () => {
  return (
    <div>

        <div className='h-150  w-full '>

            <div className=" h-150 w-full text-amber-50 bg-[url('/hero.png')] bg-cover bg-center ">
                <div className='px-15 py-20 font-semibold text-3xl md:text-5xl leading-[1.2] tracking-wider '>
                    <h1>Discover beautiful <br />indoor plants for every
                        <br />corner of your home</h1>
                </div>
                <div className='px-15'>
                    <p>
                        From indoor greens to outdoor blooms —
                        <br />shop plants, pots, and care tools infused with love.
                    </p>
                    
                </div>
                <div className='px-15 py-3'>
                    <Link to="/shop" >
                    <button className='px-15 font-medium rounded-xl  bg-green-900 border-none h-10 w-50 p-0'>Shop Now</button>
                    </Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
