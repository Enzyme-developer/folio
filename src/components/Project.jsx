import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { BiLinkAlt } from 'react-icons/bi'

const Project = ({ title , description, link, src, github, stack }) => {
    return (
      <div className='flex flex-col min-h-[600px]'>
        <h1 className='text-white text-3xl font-bold text-left py-4'>{title}</h1>

        <div>
          <div>
              <img src={src} alt='project' className='w-full min-h-[230px] max-h-[230px] py-4 rounded-lg' />
              <p className='text-gray-100 text-xl py-4'>{description}</p>
              <p className='text-gray-100 text-xl py-4'>{stack}</p>
              <div className='flex gap-6 py-4'>
                  <a className='text-gray-100 text-xl flex hover:text-blue-400' href={link}>Live <BiLinkAlt className='text-gray-100 cursor-pointer w-6 h-6 hover:text-blue-400 ml-4' /></a>
                  <a className='text-gray-100 text-xl flex hover:text-blue-400' href={github}>Github <FaGithub className='text-gray-100 cursor-pointer w-6 h-6 hover:text-blue-400 ml-4' /></a>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Project