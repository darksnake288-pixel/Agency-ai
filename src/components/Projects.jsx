import React from 'react'
import work_mobile_app from '../assets/work_mobile_app.png'
import work_dashboard_management from '../assets/work_dashboard_management.png'
import work_fitness_app from '../assets/work_fitness_app.png'
const Projects = () => {
    const Services =[
        {
            id:1,
            image:work_mobile_app,
            title:"Mobile app marketing",
            content:"We turn bold ideas into powerful digital solutions that connect..."
        },
        {
            id:2,
            image:work_dashboard_management,
            title:"Dashboard management",
            content:"We turn bold ideas into powerful digital solutions that connect..."
        },
        {
            id:3,
            image:work_fitness_app,
            title:"Fitness app promotion",
            content:"We turn bold ideas into powerful digital solutions that connect..."
        }
    ]
  return (
    <div className='Container flex justify-center py-20 px-4'>
      <div className='flex flex-col items-center text-center'>
        {/**Center Content */}
        <h1 className='mb-4 font-["Manrope"] font-semibold text-[36px] text-[#3B3B3B]'>Our Latest work</h1>
        <p className='w-full max-w-127.25 text-[#8A8E9B] font-["Manrope"] font-semibold text-[16px]'>Browse our portfolio of innovative digital projects that showcase creativity, performance, and results.</p>
      <div className='py-20 w-full max-w-5xl'>
        {/**Cards */}
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {Services.map((item)=>(
                <li key={item.id} className='flex flex-col items-center gap-2'>
                    <img src={item.image} className='w-full max-w-[320px] h-54.25 object-cover rounded-lg' />
                    <h1 className='font-bold font-["Manrope"] text-[16px] text-[#3B3B3B] '>{item.title}</h1>
                    <p className='font-["Manrope"] text-[12px] text-[#828282]  text-center'>{item.content}</p>
                </li>
            ))}
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Projects
