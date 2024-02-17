import React from 'react'
import { skill1,skill2,skill3,skill4,skill5,skill6 } from '../components/img'
export default function Skills() {
  return (
    <main name='skill'  className='w-full h-screen text-gray-300 bg-[#0a192f] '>
{/* {container} */}

<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
<div >

    {/* {list of skills i can work with} */}
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'> These are the technologies I've worked with</p>
       </div> 
    
<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center' >
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
        <img src={skill3} alt="html-icon" className='w-20 mx-auto' />
        <p className='my-4'>HTML</p>
    </div>

    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
        <img src={skill1} alt="html-icon" className='w-20 mx-auto' />
        <p className='my-4'>CSS</p>
    </div>

    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
        <img src={skill5} alt="html-icon" className='w-20 mx-auto' />
        <p className='my-4'>TAILWIND</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
        <img src={skill4} alt="html-icon" className='w-20 mx-auto' />
        <p className='my-4'>JAVASCRIPT</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
        <img src={skill2} alt="html-icon" className='w-20 mx-auto' />
        <p className='my-4'>GITHUB</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
        <img src={skill6} alt="html-icon" className='w-20 mx-auto' />
        <p className='my-4'>REACT</p>
    </div>
</div>


    </div>
    </main>
  )
}
