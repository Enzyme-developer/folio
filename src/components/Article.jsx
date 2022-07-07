import React, {useRef, useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiLinkAlt } from 'react-icons/bi';
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
            x: 80,
          scale:0.8
        }, {
          duration: 0.8, 
          autoAlpha: 1,
          scale:1,
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
    <div ref={addToRefs} className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto shadow-2xl' >
        {articles.map(( { title, created_at, cover_image, url}) => (
                 
        <div key={title} className='border-gray-100 border-4 rounded-lg' >
        <img src={cover_image} alt='project' className='w-full min-h-[230px] max-h-[230px] rounded-lg' />
        <p className='text-gray-300 text-xl px-2 py-6 font-bold'>{title}</p>
        <p className='text-gray-300 text-xl px-2 py-6'>{created_at.slice(0,10)}</p>
        <a className='text-gray-300 px-2 py-6 text-xl flex hover:text-blue-400' href={url}>Read <BiLinkAlt className='text-gray-100 cursor-pointer w-6 h-6 hover:text-blue-400 ml-4' /></a>
        </div>
            
        ))}
    </div>
  )
}

export default Article