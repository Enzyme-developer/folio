import React, {useRef, useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiExternalLink } from 'react-icons/fi'
import { BsFileEarmarkCheck } from 'react-icons/bs'
gsap.registerPlugin(ScrollTrigger);

const Article = ( {articles} ) => {

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
          x: 450,
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
    <div ref={addToRefs} className='flex gap-20 w-full flex-wrap items-center justify-center shadow-2xl' >
        {articles.map(( { title, description, url}) => (
        <div className='flex flex-col  md:w-[400px] w-full p-4 bg-gray-900' ref={addToRefs}>
          <h1 className='text-white text-3xl font-bold text-left py-1'>{title.slice(0,35)} ...</h1>
          <p className='text-gray-300 text-xl py-2'>{description}</p>
          <div className='flex justify-between items-center py-2'>
            <div>
              <a className='text-gray-300 text-xl flex hover:text-blue-400' href={url}><FiExternalLink className='text-gray-100 cursor-pointer w-6 h-6 hover:text-blue-400' /></a>
            </div>
            <div>
              <p className='text-gray-300 text-xl flex hover:text-blue-400'><BsFileEarmarkCheck className='text-gray-100 cursor-pointer w-6 h-6 hover:text-blue-400' /></p>
            </div>
          </div>
        </div>
            
        ))}
    </div>
  )
}

export default Article