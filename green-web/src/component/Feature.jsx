import React from 'react'

const Feature = () => {
  return (
    <div>
        <div className="h-100 w-full bg-cover bg-center bg-[url('/feature.png')] gap-10 md:gap-20 flex flex-row justify-center items-center">
            <div className="flex max-w-sm  w-[40%] md:w-[45%] p-6 h-60 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl">
                 <div className=' w-[70%] p-2 h-60' >
                     <h2 className="text-xl font-bold text-white">Low-Maintenance Greens</h2>
                        <p className="mt-2 text-sm text-white/80">Easy-care indoor plants with wide
                        green leaves. These beauties grow in
                        low light and need minimal care —
                        perfect for busy homes.</p>

                </div>
                <div  >
                    <img className='w-full  rounded-xl h-50 object-cover' src="/indoor.avif" alt="" />
                </div>
            </div>
             <div className="flex max-w-sm h-60 w-[40%] md:w-[45%]  p-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl">

                <div className=' w-[70%] p-2 h-60'>
                        <h2 className="text-xl font-bold text-white">Garden-Ready Plants</h2>
                        <p className="mt-2 text-sm text-white/80">Bring life to your outdoor space with
                        fresh, vibrant plants. Perfect for
                        balconies, patios, and gardens. These
                        greens thrive outdoors and add a touch
                      of nature.</p>
                </div>  
                 <div className=' ' >
                    <img className='w-full  rounded-xl h-50 object-cover' src="/outdoor.png" alt="" />
                </div>
        
            </div>
            
         
        </div>
      
    </div>
  )
}

export default Feature
