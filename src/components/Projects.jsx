import React from 'react'
import Project from './Project'

const Projects = () => {
  return (

    <div id='projects' className='px-4 mt-20'>
    <h1 className='text-white text-4xl mb-6'>Selected Projects</h1>
    <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto'>
        
        <Project title='Moovie'
         description= 'A movie web application that provides different movies from various genres, detailed information about each movie and also plays their trailer. It is fully authenticated and users can sign in with their google accounts.' 
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpKTh2Z8M7FqHhutA5cIcbKJMHgCDePeu5KA&usqp=CAU' 
              stack='Built with Next.js, NextAuth, Tailwind Css'
         link='https://moovie-green.vercel.app' 
         github='https://github.com/Enzyme-developer/moovie' 
        />

        <Project title='Cryptoverse'
         description= 'A web application for the crypto market, detailed information about each coin. Users can add coins to their watchlist. Fully authenticated and users can sign in and sign up with their email accounts.' 
              src='https://i.pinimg.com/originals/2b/f2/04/2bf204e3797e17128a1264b2b372aea3.jpg' 
              stack='Built with React.js , Typescript, Firebase, Tailwind Css'
         link='https://cryptoverse-app-ayo-dev.vercel.app' 
         github='https://github.com/Enzyme-developer/cryptoverse' 
        />
       
       <Project title='Realtor'
         description= 'This is a real estate web application that displays properties for sale and rent: their full features,price etc.It also has a search functionality'
              src='https://www.mobindustry.net/wp-content/uploads/real_estate_app_-_summary_4x.jpg' 
              stack='Built with Next.js, Chakra UI, Rapid API'
         link='https://realtor-ayo-dev.vercel.app'
         github='https://github.com/Enzyme-developer/realtor' 
        />

        <Project title='Gymm'
         description= 'A Fitness web application that provides different exercises for various body parts, detailed information about each exercise and a video to demonstrate.' 
              src='https://opengeekslab.com/wp-content/uploads/2020/01/Key-Issues-to-Consider-While-Functional-Fitness-App-Development.png' 
              stack='Built with React.js & Material UI'
         link='https://fitness-ashen.vercel.app' 
         github='https://github.com/Enzyme-developer/fitness' 
        />

        <Project title='Finder'
         description= 'Search for anything and everything. This web application provides real-time results varying from news, to articles to videos' 
              src='https://us.123rf.com/450wm/jiriperina/jiriperina1501/jiriperina150100084/35896181-hand-holding-mobile-phone-with-turquoise-background-flat-design-style-.jpg?ver=6' 
              stack='Built with React.js, React Context, API, Tailwind Css'
         link='http://google-ten-eta.vercel.app' 
         github='https://github.com/Enzyme-developer/google-repo' 
        />

        <Project title='Shoppe (WIP)'
         description= 'An ecommerce application for users to view, buy, pay and checkout their orders. This is still a work in progress.'
              src='https://buildfire.com/wp-content/uploads/2019/12/Ecommerce-mobile-app-scaled-1200x900.png' 
              stack='Built with React.js, Material UI, Tailwind Css'
         link='https://shoppe.vercel.app' 
         github='https://github.com/Enzyme-developer/shoppe'
        />

    </div>
    </div>
  )
}

export default Projects
