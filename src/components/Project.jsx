import React, { useRef, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa'
import { BiLinkAlt } from 'react-icons/bi'
import { gsap } from "gsap";

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Project = ({ title , description, link, src, github, stack }) => {


  const headerRef = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    
    gsap.from(headerRef.current, {
      autoAlpha: 0, 
      ease: 'none',
      delay: 1
    });

    revealRefs.current.forEach((el, index) => {
        
      gsap.fromTo(el,{
        autoAlpha: 0,
        opacity: 0,
        y: 150,
      }, {
        duration: 0.6, 
        autoAlpha: 1,
        opacity: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el, 
          start: 'top center+=300',
          toggleActions: 'play none none reverse'
        }
      });

    });

  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };



    return (
      <div className='flex flex-col min-h-[600px] py-4' ref={addToRefs}>
        <h1 className='text-white text-3xl font-bold text-left py-4'>{title}</h1>

        <div>
          <div>
              <img src={src} alt='project' className='w-full min-h-[230px] max-h-[230px] py-4 rounded-lg' />
              <p className='text-gray-300 text-xl py-6'>{description}</p>
              <p className='text-gray-300 text-xl py-6'>{stack}</p>
              <div className='flex space-x-6 py-6'>
                  <a className='text-gray-300 text-xl flex hover:text-blue-400' href={link}>Live <BiLinkAlt className='text-gray-100 cursor-pointer w-6 h-6 hover:text-blue-400 ml-4' /></a>
                  <a className='text-gray-300 text-xl flex hover:text-blue-400' href={github}>Github <FaGithub className='text-gray-100 cursor-pointer w-6 h-6 hover:text-blue-400 ml-4' /></a>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Project