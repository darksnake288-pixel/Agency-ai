import React from 'react'
import Group from '../assets/Group.png'
const Teams = () => {
  return (
    <div className='Container flex flex-col items-center justify-center px-4'>
      <div className='flex flex-col justify-center items-center'>
        {/**Text In Center Pages */}
        <h1 className='font-semibold font-["Manrope"] text-[36px] text-[#3B3B3B] text-center mb-4'>Meet the team</h1>
        <p className='text-[#8A8E9B] text-[16px] font-["Manrope"] w-full max-w-116.25 text-center'>A passionate team of digital experts dedicated to your brand’s success.</p>
      </div>
      <div className='flex justify-center w-full'>
        {/**Profiles */}
        <img src={Group} alt='Teams' className='w-full max-w-5xl h-auto py-20'/>
      </div>
    </div>
  )
}

export default Teams
