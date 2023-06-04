import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='py-2 md:text-4xl sm:text-3xl text-2xl font-bold'>Want tips & tricks to optimize your flow? </h1>
                <p>Sign up to our newsletter and stayn to up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button className='flex items-center justify-center font-bold text-[#050505] bg-[#00df9a] w-[200px] py-3 px-3 rounded-md ml-3 my-6'>Notify Me</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Newsletter