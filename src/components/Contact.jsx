import React, { useRef, useEffect, useState } from 'react';
import { BsTwitter } from 'react-icons/bs'
import { ImLinkedin2 } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { FaDev } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Ayo from '../assets/Ayo.jpg'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Contact = () => {
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
        x: -20,
      }, {
        duration: 1, 
        autoAlpha: 1,
        opacity: 1,
        x: 0,
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
      <div id='contact' ref={addToRefs} className='my-16 p-4'>
        <h1 className='text-white text-6xl mb-6'>Contact Me</h1>
          <img style={{ borderRadius: '100%', height: 'auto' }} src={Ayo} width="90" alt='Ayo' />
          
        <p className='text-xl text-gray-200 gap-y-8  p-2'>Have a project or role that requires my skillset? Hit me up via any button below.</p>
          <div className='space-x-12 flex mt-14'>
            <a className='text-gray-200 gap-y-8 hover:text-blue-400 ' href='mailto:talabiayomide2000@gmail.com'><MdEmail className='text-gray-400 cursor-pointer w-6 h-6 ' />Mail</a>
            <a className='text-gray-200 gap-y-8 hover:text-blue-400 ' href='https://twitter.com/Enzyme_01'><BsTwitter className='text-gray-400 cursor-pointer w-6 h-6 ' />Twitter</a>
            <a className='text-gray-200 gap-y-8 hover:text-blue-400 ' href='https://www.linkedin.com/in/ayomide-talabi-973981174/'> <ImLinkedin2 className='text-gray-400 cursor-pointer w-6 h-6 ' />LinkedIn</a>
            <a className='text-gray-200 gap-y-8 hover:text-blue-400 ' href='https://github.com/Enzyme-developer'><FaGithub className='text-gray-400 cursor-pointer w-6 h-6 ' />Github</a>
            <a className='text-gray-200 gap-y-8 hover:text-blue-400 ' href='https://dev.to/ayo_dev'><FaDev className='text-gray-400 cursor-pointer w-6 h-6 ' />Dev.to</a>
        </div>

        {/* <a className='bg-blue-500 text-white p-4 decoration-0' href='https://docs.google.com/document/d/11WARLeIufnd2PR_70pSIxPQ_2haXuU2MY6XEUBKApDQ/' >My Resume</a> */}
    </div>
    
  )
}

export default Contact