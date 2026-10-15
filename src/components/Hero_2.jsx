import React from 'react'
import coinbase from '../assets/coinbase_logo.png'
import google from '../assets/google_logo.svg'
import rakuten from '../assets/rakuten_logo.png'
import microsoft from '../assets/microsoft_logo.png'
import airbnb from '../assets/airbnb_logo.svg'
import zoom from '../assets/zoom_logo.png'
const Hero_2 = () => {
  return (
    <div className='Container flex flex-col py-20 px-4'>
      <div className='text-[#475569] flex w-full justify-center text-center leading-tight'>
        {/**Text in Middle Page */}
        <h1>Trusted by Leading Companies</h1>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 py-10 justify-items-center items-center'>
        {/**Images */}
        <img src={coinbase} alt="coinbase" className='w-full max-w-37.5' />
        <img src={google} alt="google" className='w-full max-w-37.5' />
        <img src={rakuten} alt="rakuten" className='w-full max-w-37.5'/>
        <img src={microsoft} alt="microsoft"className='w-full max-w-37.5' />
        <img src={airbnb} alt="airbnb" className='w-full max-w-37.5'/>
        <img src={zoom} alt="zoom" className='w-full max-w-37.5'/>
      </div>
    </div>
  )
}

export default Hero_2
