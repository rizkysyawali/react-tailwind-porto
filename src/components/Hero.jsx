import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
          <h1 className='md:text-7xl sm:text-5xl text-4xl font-bold md:py-6 '>Grow with data</h1>
          <div className='flex justify-center items-center py-1 mt-4'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing</p>
            <Typed 
                    className='md:text-5xl sm:text-4xl text-xl font-bold text-[#00df9a] pl-2'
                    strings={['Here','You','Can','Find','Anything']} 
                    typeSpeed={140} 
                    backSpeed={120}
                    loop
                />
          </div>
          <p className='md:text-3xl sm:text-2xl text-xl font-bold text-gray-500 my-5'>Monitor your data analytics to increase revenue</p>
          <button className='flex justify-center items-center font-bold text-black bg-[#00df9a] w-[200px] py-3 px-3 rounded mx-auto my-6'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero