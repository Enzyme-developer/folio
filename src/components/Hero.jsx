import React, { useRef, useEffect } from 'react';
import { BsTwitter } from 'react-icons/bs'
import { ImLinkedin2 } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { FaDev } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {


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
        x: -150,
      }, {
        duration: 0.6, 
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
      <div id='hero' ref={addToRefs} className='z-1 p-4 w-[100vw] mt-20 overflow-hidden'>
          <div>
              <h1 className='md:text-8xl text-6xl overflow-hidden text-white'>Talabi Ayomide — Frontend Engineer, Blockchain developer & Technical writer.</h1>
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
