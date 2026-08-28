import React from 'react'
import Group from '../assets/Group.png'
const Teams = () => {
  return (
    <div className='Container flex flex-col items-center justify-center'>
      <div className='flex flex-col justify-center items-center'>
        {/**Text In Center Pages */}
        <h1 className='font-semibold font-["Manrope"] text-[36px] text-[#3B3B3B] w-62.5 h-22'>Meet the team</h1>
        <p className='text-[#8A8E9B] text-[16px] font-["Manrope"] w-116.25 h-11 text-center'>A passionate team of digital experts dedicated to your brand’s success.</p>
      </div>
      <div className='flex justify-center w-screen '>
        {/**Profiles */}
        <img src={Group} alt='Teams' className='py-20 pl-10'/>
      </div>
    </div>
  )
}

export default Teams
