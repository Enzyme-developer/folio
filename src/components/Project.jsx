import React, { useRef, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
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
      <div className='flex flex-col bg-gray-900 p-4 w-[350px]' ref={addToRefs}>
        <h1 className='text-white text-3xl font-bold'>{title}</h1>
        <p className='text-gray-300 text-xl py-2'>{description}</p>
        <p className='text-gray-300 text-xl py-2'>{stack}</p>
        <div className='flex justify-between items-center py-2'>
          <div>
            <a className='text-gray-300 text-xl flex hover:text-blue-400' href={link}><FiExternalLink className='text-gray-100 cursor-pointer w-6 h-6 hover:text-blue-400' /></a>
          </div>
          <div>
            <a className='text-gray-300 text-xl flex hover:text-blue-400' href={github}><FaGithub className='text-gray-100 cursor-pointer w-6 h-6 hover:text-blue-400' /></a>
          </div>
        </div>
      </div>
  )
}

export default Project