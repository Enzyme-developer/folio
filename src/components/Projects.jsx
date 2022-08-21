import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" className="p-4 mt-10">
      <h1 className="text-white text-4xl my-16">Selected Projects</h1>
      <div className="grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto items-center">
        <Project
          title="SneakieMart"
          stack="Built with Next.js, Firebase, Sanity.io"
          description="E-commerce software that makes buying products, saving to list and paying for them as easy as it can be."
          link="https://sneakiemart-ayo-dev.vercel.app"
          github="https://github.com/Enzyme-developer/sneakie"
        />

        <Project
          title="Cryptoverse"
          stack="Built with React.js, Firebase, Tailwind Css"
          description=" Crypto market data aggregator. Check market data, news and save coins directly to your Cryptocurrency List."
          link="https://cryptoverse-app-ayo-dev.vercel.app"
          github="https://github.com/Enzyme-developer/cryptoverse"
        />

        <Project
          title="Moovie"
          description="Enjoy trailers, info and ratings that capture the magic of cinema in an ever-changing digital world."
          stack="Built with Next.js, NextAuth, Tailwind Css"
          link="https://moovie-green.vercel.app"
          github="https://github.com/Enzyme-developer/moovie"
        />

        {/* <Project title='Realtor'
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
        /> */}
      </div>
    </div>
  );
};

export default Projects;
