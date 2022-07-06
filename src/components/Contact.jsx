import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { ImLinkedin2 } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { FaDev } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
      <div className='my-16 p-4'>
        <h1 className='text-white text-6xl mb-6'>Contact Me</h1>
        <p className='text-xl text-gray-200 gap-y-8 p-2'>Have a project that requires my skillset? Hit me up via any button below.</p>
          <div className='space-x-12 flex mt-14'>
            <a className='text-gray-200 gap-y-8' href='mailto:talabiayomide2000@gmail.com'><MdEmail className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' />Mail</a>
            <a className='text-gray-200 gap-y-8' href='https://twitter.com/Enzyme_01'><BsTwitter className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' />Twitter</a>
            <a className='text-gray-200 gap-y-8' href='https://www.linkedin.com/in/ayomide-talabi-973981174/'> <ImLinkedin2 className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' />LinkedIn</a>
            <a className='text-gray-200 gap-y-8' href='https://github.com/Enzyme-developer'><FaGithub className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' />Github</a>
            <a className='text-gray-200 gap-y-8' href='https://dev.to/ayo_dev'><FaDev className='text-gray-400 cursor-pointer w-6 h-6 hover:text-blue-400' />Dev.to</a>
        </div>
    </div>
    
  )
}

export default Contact