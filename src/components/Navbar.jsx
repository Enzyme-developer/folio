import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    // const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
    }
    
  return (
      <div>
        <div className={nav ? 'z-100 fixed text-white bg-black h-[8vh] flex w-full items-center shadow-xl justify-between px-4 py-8'
      :  'z-1 h-[8vh] flex w-full text-white bg-black items-center shadow-xl justify-between px-4 py-8' }>
      <div>
        <h1 className='text-xl uppercase font-bold'>Ayo-dev</h1>
      </div>

      <div className={
           nav
             ? 'md:hidden  fixed left-0 top-[8vh] flex flex-col items-center text-center w-full h-[100%] px-4 ease-in opacity-1 duration-300 z-100 '
             : 'md:hidden absolute left-[-100%] top-[8vh] flex flex-col w-full  h-[100%] opacity-0 px-4 ease-in duration-300 z-10'
         }
     >
            
        <ul className='flex flex-col h-[100%] font-bold space-y-24 justify-center'>

       
          <li onClick={handleNav} className='text-gray-400 text-xl hover:text-blue-400 '>
            <Link to='/'>Home</Link>
          </li>
          
                      
          <li onClick={handleNav} className='text-gray-400 text-xl hover:text-blue-400'>
            <Link to='/'>About</Link>
          </li>  
                    

          <li onClick={handleNav} className='text-gray-400 text-xl hover:text-blue-400'>
            <Link to='/'>Projects</Link>
          </li>
          

          <li onClick={handleNav} className='text-gray-400 text-xl hover:text-blue-400'>
            <Link to='/'>Contact</Link>
          </li>
          
        </ul>
      </div>
      
           
     <div>
        <ul className='hidden md:flex font-bold space-x-24'>

                    
                <li onClick={handleNav} className='text-gray-400 hover:text-blue-400'>
                    <Link to='/'>Home</Link>
                </li>

                            
                <li onClick={handleNav} className='text-gray-400 hover:text-blue-400'>
                    <Link to='/'>About</Link>
                </li>  
                        

                <li onClick={handleNav} className='text-gray-400 hover:text-blue-400'>
                    <Link to='/'>Projects</Link>
                </li>


                <li onClick={handleNav} className='text-gray-400 hover:text-blue-400'>
                    <Link to='/'>Contact</Link>
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






// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
// //   const navigate = useNavigate();

//   const handleNav = () => {
//     setNav(!nav);
//   };


//   return (
   
//     <div className={nav ? 'border-b z-100 fixed bg-white h-[8vh] flex w-full items-center shadow-xl justify-between px-4 py-8 dark:bg-black dark:text-white'
//       :  'border-b z-100 h-[8vh] flex w-full items-center shadow-xl justify-between px-4 py-8 dark:bg-black dark:text-white' }>
//       <div>
//         <Link to='/'><h1 className='text-xl uppercase font-bold'>Ayo-dev</h1></Link>
//       </div>

//       <div className={
//            nav
//              ? 'md:hidden  fixed left-0 top-[8vh] flex flex-col w-full h-[100%] px-4 ease-in duration-300 z-1000 bg-white  dark:bg-black dark:text-white '
//              : 'md:hidden absolute left-[-100%] top-[8vh] flex flex-col w-full h-[100%] px-4 ease-in duration-300 z-1000 bg-white dark:bg-black dark:text-white'
//          }
//      >
            
//         <ul className='flex flex-col h-[100%] font-bold'>

       
//           <li onClick={handleNav} className='border-b border-slate-400 dark:border-white'>
//             <Link to='/'>Home</Link>
//           </li>

//           <li onClick={handleNav} className='border-b border-slate-400 dark:border-white'>
//             jdbjbjcdd
//           </li>

//           <li onClick={handleNav} className='border-b border-slate-400 dark:border-white'>
//             bhbbje
//           </li>
       
//           <div className='flex flex-col md:hidden space-y-4 mt-6' onClick={handleNav}>
//             <button className='bg-red-500 p-2 rounded border-none text-white outline-none'>Sign out</button>
//           </div>
      
          
//         </ul>
//       </div>
           

//       <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//         <div className='hidden md:block space-x-4 font-bold'>
//           jdncjd
//         </div>
      
//     </div>
//   );
// };


// export default Navbar;