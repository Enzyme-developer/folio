import React from 'react'

const Skills = () => {
    return (
    <div className='p-4 w-full my-16'>
        <h1 className='mt-12 text-white text-4xl uppercase my-8'>Technical Skills</h1>
        <div className= 'grid grid-cols-3 md:grid-cols-6 w-full gap-8'>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" />
        <p className='text-gray-100 uppercase'>React</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg" width="36" height="36" alt="NextJs" />
        <p className='text-gray-100 uppercase'>Next js</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" />
        <p className='text-gray-100 uppercase'>Javascript</p>
        </div>
          
        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" />
        <p className='text-gray-100 uppercase'>Typescript</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="36" height="36" alt="Redux" />
        <p className='text-gray-100 uppercase'>Redux</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" />
        <p className='text-gray-100 uppercase'>tailwind css</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="36" height="36" alt="Firebase" />
        <p className='text-gray-100 uppercase'>Firebase</p>
        </div>

        
        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg" width="36" height="36" alt="Material UI" />
        <p className='text-gray-100 uppercase'>Chakra UI</p>
        </div>
          

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" />
        <p className='text-gray-100 uppercase'>Sass</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" />
        <p className='text-gray-100 uppercase'>Html5</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" />
        <p className='text-gray-100 uppercase'>Css3</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg" width="36" height="36" alt="Material UI" />
        <p className='text-gray-100 uppercase'>Material UI</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" />
        <p className='text-gray-100 uppercase'>Node js</p>
        </div>
        
          
        <div className='flex flex-col justify-center space-y-6'>
        <img src="data:image/png;base64,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" width="36" height="36" alt="Material UI" />
        <p className='text-gray-100 uppercase'>Jest</p>
        </div>
        
        <div className='flex flex-col justify-center space-y-6 '>
        <img src="https://docs.soliditylang.org/en/v0.8.15/_static/logo.svg" className='bg-gray-200' width="36" height="36" alt="Material UI" />
        <p className='text-gray-100 uppercase'>Solidity</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ethers-colored.svg" width="36" height="36" alt="Ethers" />
        <p className='text-gray-100 uppercase'>Ethers js</p>
        </div>
        

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" />
        <p className='text-gray-100 uppercase'>Bootstrap</p>
        </div>


        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png" width="36" height="36" alt="git" />
        <p className='text-gray-100 uppercase'>Git</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCsASCy83izYeNHlYSp4stqfcCz4g1wg78KbAA_hrnOb72sKQMn0B5eLctnwybLDBphNc&usqp=CAU" width="36" height="36" alt='github' />
        <p className='text-gray-100 uppercase'>Github</p>
        </div>


        <div className='flex flex-col justify-center space-y-6'>
        <img src="https://miro.medium.com/max/3150/1*F6ufPKgGbyUPkWLZ-16ycw.png" width="40" height="40" alt='github' />
        <p className='text-gray-100 uppercase'>Framer</p>
        </div>

        <div className='flex flex-col justify-center space-y-6'>
        <img src="data:image/jpeg;base64,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" width="40" height="40" alt='github' />
        <p className='text-gray-100 uppercase'>Gsap</p>
        </div>

    </div>
    </div>
       
  )
}

export default Skills