import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { ImLinkedin2 } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { FaDev } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Hero = () => {
  return (
      <div id='hero' className='p-4 w-[100vw] mt-16 overflow-hidden'>
          <div>
              <h1 className='md:text-8xl text-6xl overflow-hidden text-white'>I'm Talabi Ayomide — Frontend Engineer, Blockchain developer & Technical writer.</h1>
          </div>
         
          <div className='space-x-12 flex mt-14'>
              <a href='https://twitter.com/Enzyme_01'><BsTwitter className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' /></a>
              <a href='https://www.linkedin.com/in/ayomide-talabi-973981174/'> <ImLinkedin2 className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' /></a>
              <a href='https://github.com/Enzyme-developer'><FaGithub className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' /></a>
              <a href='https://dev.to/ayo_dev'><FaDev className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' /></a>
              <a href='mailto:talabiayomide2000@gmail.com'><MdEmail className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' /></a>
          </div>
    </div>
  )
}

export default Hero
