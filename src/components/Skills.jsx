import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { BsFillPlayFill } from 'react-icons/bs'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {


  const headerRef = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    
    gsap.from(headerRef.current, {
      autoAlpha: 0, 
      ease: 'none',
      delay: 1.5
    });

    revealRefs.current.forEach((el, index) => {
        
      gsap.fromTo(el,{
        autoAlpha: 0,
        opacity: 0,
        x: 500,
      }, {
        duration: 0.7, 
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
    <div className='p-4 w-full mt-8'  ref={addToRefs}>
        <h1 className='mt-4 text-white text-4xl mb-12'>Technical skills</h1>

        <div className='text-white flex flex-wrap w-full gap-8'>
          {/* <p className='flex text-2xl'><BsFillPlayFill className='w-6 h-6 text-white' />React Js</p>
          <p className='flex text-2xl'><BsFillPlayFill className='w-6 h-6 text-white' />Next Js</p>
          <p className='flex text-2xl'><BsFillPlayFill className='w-6 h-6 text-white' />Javascript</p>
          <p className='flex text-2xl'><BsFillPlayFill className='w-6 h-6 text-white' />Typescript</p>
          <p className='flex text-2xl'><BsFillPlayFill className='w-6 h-6 text-white' />Redux</p>
          <p className='flex text-2xl'><BsFillPlayFill className='w-6 h-6 text-white' />Firebase</p>
          <p className='flex text-2xl'><BsFillPlayFill className='w-6 h-6 text-white' />Tailwind Css</p>
          <p className='flex text-2xl'><BsFillPlayFill className='w-6 h-6 text-white' />Chakra UI</p>
          <p className='flex text-2xl'><BsFillPlayFill className='w-6 h-6 text-white' />Material UI</p>
          <p className='flex text-2xl'><BsFillPlayFill className='w-6 h-6 text-white' />Jest</p> */}

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" />
        <p className='text-gray-200 uppercase'>React</p>
       
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg" width="36" height="36" alt="NextJs" />
        <p className='text-gray-200 uppercase'>Next js</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" />
        <p className='text-gray-200 uppercase'>Javascript</p>
        </div>
          
        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" />
        <p className='text-gray-200 uppercase'>Typescript</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="36" height="36" alt="Redux" />
        <p className='text-gray-200 uppercase'>Redux</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" />
        <p className='text-gray-200 uppercase'>tailwind css</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="36" height="36" alt="Firebase" />
        <p className='text-gray-200 uppercase'>Firebase</p>
        </div>

        
        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg" width="36" height="36" alt="Material UI" />
        <p className='text-gray-200 uppercase'>Chakra UI</p>
        </div>
          

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" />
        <p className='text-gray-200 uppercase'>Sass</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" />
        <p className='text-gray-200 uppercase'>Html5</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" />
        <p className='text-gray-200 uppercase'>Css3</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg" width="36" height="36" alt="Material UI" />
        <p className='text-gray-200 uppercase'>Material UI</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" />
        <p className='text-gray-200 uppercase'>Node js</p>
        </div>
        
          
        <div className='flex flex-col justify-center space-y-6'>
        <img src="data:image/png;base64,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" width="36" height="36" alt="Material UI" />
        <p className='text-gray-200 uppercase'>Jest</p>
        </div>
        
        <div className='flex flex-col justify-center space-y-6 '>
        <img src="https://docs.soliditylang.org/en/v0.8.15/_static/logo.svg" className='bg-gray-200' width="36" height="36" alt="Material UI" />
        <p className='text-gray-200 uppercase'>Solidity</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ethers-colored.svg" width="36" height="36" alt="Ethers" />
        <p className='text-gray-200 uppercase'>Ethers js</p>
        </div>
        

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" />
        <p className='text-gray-200 uppercase'>Bootstrap</p>
        </div>


        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png" width="36" height="36" alt="git" />
        <p className='text-gray-200 uppercase'>Git</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCsASCy83izYeNHlYSp4stqfcCz4g1wg78KbAA_hrnOb72sKQMn0B5eLctnwybLDBphNc&usqp=CAU" width="36" height="36" alt='github' />
        <p className='text-gray-200 uppercase'>Github</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img width='40' height='40' src='https://avatars.githubusercontent.com/u/17177659?s=280&v=4' />
        <p className='text-gray-200 uppercase'>Sanity</p>
        </div>

      </div>
    </div>
       
  )
}

export default Skills
