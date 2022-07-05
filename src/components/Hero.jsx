import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { ImLinkedin2 } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { FaDev } from 'react-icons/fa'

const Hero = () => {
  return (
      <div className='p-4 w-[100vw] mt-10 overflow-hidden'>
          <div>
              <h1 className='md:text-8xl text-6xl overflow-hidden text-white'>I'm Talabi Ayomide — Frontend Engineer, Blockchain developer & Technical writer.</h1>
          </div>
         
          <div className='space-x-12 flex mt-14'>
              <BsTwitter className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' />
              <ImLinkedin2 className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' />
              <FaGithub className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' />
              <FaDev className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' />
          </div>
    </div>
  )
}

export default Hero