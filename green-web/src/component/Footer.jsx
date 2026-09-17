import React from 'react'

const Footer = () => {
  return (
    <div className=" bg-cover bg-center bg-[url('/feature.png')] text-gray-200" >
      <div className='flex flex-row h-60 p-10 w-full font-serif'>
        <div className='w-[50%]'>
            <h2 className='text-2xl'>GoGreen</h2>
            <p>
                Bringing you vibrant, healthy greens
hand-picked to bring nature closer
to you — fresh and simple to enjoy.
            </p>
        </div>
        <div className='p-10'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
      </div>
      <div>
        <p className='text-center'>
            © 2026 GoGreen. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
