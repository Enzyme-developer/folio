import React from 'react'

const About = () => {
  return (
    <div className='mt-16 p-4 w-full flex-col lg:flex-row lg:flex-row-reverse flex items-center justify-center lg:justify-between lg:gap-16'>
        <p className='text-gray-400 text-2xl lg:w-[70vw]'>
          I'm a <span className='text-gray-100'>passionate Frontend Engineer</span>  proficient in various frontend technologies. I am focused on creating 
          <span className='text-gray-100'>seamless experiences and interactions</span> on the web 
          by tranforming designs and ideas, <span className='text-gray-100'>pixel perfectly</span>, to code.
          I translate needs into functional and appealing interactive applications.
          I work with <span className='text-gray-100'>Javascript, Typescript, React Js and Next Js</span> and much more on the client side.
          I have an understanding of the web development process (design, development and deployment), 
          understanding of layout aesthetics coupled with Knowledge of SEO principles.
          I Gather and refine specifications and requirements based on technical requirements or UX design .
          I'm a good <span className='text-gray-100'>team player</span> an also a fast learner.
          I recently started exploring <span className='text-gray-100'>blockchain development</span>, otherwise known as WEB3.
          I also write <span className='text-gray-100'>technical articles</span> so as to clearly and effectively explain technical topics and to reinforce my knowledge.
          When I'm not <span className='text-gray-100'>striking a balance</span> between functionality and aesthetic design or writing technical articles, 
          you can find me catching up on my favorite movies.
        </p>

        <img src='https://ayoo-dev.netlify.app/avatar.jpg' alt='avatar' className='rounded-lg w-full md:w-[400px] lg:mt-0 mt-10'/>
    </div>
  )
}

export default About