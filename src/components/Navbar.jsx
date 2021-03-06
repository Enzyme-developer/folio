import React from 'react'
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    // const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
    }
    
  return (
      <div>
        <div className={nav ? 'fixed z-100 top-0 text-white bg-black h-[8vh] flex w-full items-center shadow-xl justify-between px-4 py-8'
      :  'z-100 h-[8vh] flex w-full top-0 fixed text-white bg-black items-center shadow-xl justify-between px-4 py-8' }>
      <div>
        <h1 className='text-xl uppercase font-bold'>Ayo-dev</h1>
      </div>

      <div className={
           nav
             ? 'md:hidden fixed left-0 top-[8vh] bg-black flex flex-col items-center text-center w-full h-[100%] px-4 ease-in opacity-1 duration-300 z-100 '
             : 'md:hidden fixed left-[-100%] bg-black top-[8vh] flex flex-col w-full  h-[100%] opacity-0 px-4 ease-in duration-300 z-10'
         }
     >
            
        <ul className='flex flex-col h-[100%] font-bold bg-black space-y-24 justify-center'>

       
          <li onClick={handleNav} className='text-gray-400 text-2xl hover:text-blue-400 '>
            <a href='#hero' >Home</a>
          </li>
          
                      
          <li onClick={handleNav} className='text-gray-400 text-2xl hover:text-blue-400'>
            <a href='#about' >About</a>
          </li>  
                    

          <li onClick={handleNav} className='text-gray-400 text-2xl hover:text-blue-400'>
            <a href='#projects' >Projects</a>
          </li>

          <li onClick={handleNav} className='text-gray-400 text-2xl hover:text-blue-400'>
            <a href='#articles' >Articles</a>
          </li>
          

          <li onClick={handleNav} className='text-gray-400 text-2xl hover:text-blue-400'>
            <a href='#contact' >Contact</a>
          </li>
          
        </ul>
      </div>
      
           
     <div>
        <ul className='hidden md:flex font-bold space-x-24'>

                    
            <li onClick={handleNav} className='text-gray-400 hover:text-blue-400'>
                <a href='#hero'>Home</a>
            </li>

                        
            <li onClick={handleNav} className='text-gray-400 hover:text-blue-400'>
                <a href='#about' >About</a>
            </li>  
                    

            <li onClick={handleNav} className='text-gray-400 hover:text-blue-400'>
                <a href='#projects' >Projects</a>
            </li>

            <li onClick={handleNav} className='text-gray-400 hover:text-blue-400'>
              <a href='#articles' >Articles</a>
            </li>


            <li onClick={handleNav} className='text-gray-400 hover:text-blue-400'>
                <a href='#contact' >Contact</a>
            </li>

            </ul>
        </div>
        

      <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      
    </div>
    </div>
  )
}

export default Navbar
