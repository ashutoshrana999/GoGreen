import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
      <div className='flex flex-col items-center py-20'>
        <div className='font-serif p-20'>
          <h2 className='font-bold text-3xl
                                rounded-3xl
                                bg-gradient-to-br
                                from-[#e8fff0]
                                via-[#a7f3c5]
                                to-[#43b978]
                '>Get in Touch</h2>
          <h4 className='text-center py-2 font-light text-xl'>
            We'd Love to Hear From You
          </h4>
          <p className='text-center'>Whether you need help choosing the perfect plant or have a question about your order, our team is just a message away.</p>
        </div>
        <div className='w-[80%] font-serif h-200 md:h-110 bg-green-200 rounded-3xl items-center justify-center'>
            <div>
              <h2 className='text-center text-red-500 font-extralight text-3xl p-5'>Contact Information</h2>
            </div>
            <div className='grid grid-rows-4 md:grid-cols-2 gap-10 justify-center p-10'>
              <div className='h-30 w-[80%] bg-white p-2 rounded-2xl'>
                <h2 className='font-bold text-xl'>📍 Visit Us</h2>
                <p>GoGreen Plant Studio
Jaipur, Rajasthan, India</p>
              </div>
              <div className='h-30 w-[80%] bg-white p-2 rounded-2xl'>
                <h2 className='font-bold text-xl'>📞 Call Us</h2>
                <p>+91 98765 43210</p>
              </div>
              <div className='h-30 w-[80%] bg-white p-2 rounded-2xl'>
                <h2 className='font-bold text-xl'>✉️ Email Us</h2>
                <p>hello@greennest.com</p>
              </div>
              <div className='h-30  w-[80%] bg-white p-2 rounded-2xl'>
                <h2 className='font-bold text-xl'>🕐 Working Hours</h2>
                <p>Monday – Saturday
9:00 AM – 7:00 PM

<br />Sunday
10:00 AM – 5:00 PM</p>
              </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Contact
