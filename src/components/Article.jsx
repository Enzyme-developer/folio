import React from 'react'
import { BiLinkAlt } from 'react-icons/bi'

const Article = ( {articles} ) => {
    return (
    <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto shadow-2xl' >
     
        {articles.map(( {cover_image, url, created_at, title} ) => (
        <div key={title} className='border-white border-4 rounded-lg' >
            <img src={cover_image} alt='project' className='w-full min-h-[230px] max-h-[230px] rounded-lg' />
            <p className='text-gray-300 text-xl px-2 py-6'>{title}</p>
            <p className='text-gray-300 text-xl px-2 py-6'>{created_at.slice(0,10)}</p>
            <a className='text-gray-300 px-2 py-6 text-xl flex hover:text-blue-400' href={url}>Read <BiLinkAlt className='text-gray-100 cursor-pointer w-6 h-6 hover:text-blue-400 ml-4' /></a>
        </div>
        ))}
        
    </div>
  )
}

export default Article