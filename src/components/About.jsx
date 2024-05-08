import React from 'react'
import profilePhoto from '../assets/profilePhoto.jpg'


const About = () => {
    return (
        <div id='about' className='w-full m-auto px-[25%] p-2 py-12 relative'>
            <h1 className='text-4xl font-bold text-left text-gray-200 pb-12'>About</h1>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='lg:w-3/5'>
                    <p className='text-gray-300 text-md'>
                        Hi! My name is Cindy and I’m currently in my second year of Computer Science at the University of Waterloo.
                    </p>
                    <p className='text-gray-300 text-md mt-2'>
                        My interest in computer science stems from enjoying the problem solving and creativity involved as well as recognizing the limitless potential that tech can have. Having developed a passion for mathematics throughout high school and university, I’m looking to explore industries with interesting mathematical applications, specifically finance or data and AI/ML.
                    </p>
                    <p className='text-gray-300 text-md mt-2'>
                        Some of my interests outside of tech include travelling, investing, playing piano, painting, and trying out different workout classes. Excited to see what the future holds!
                    </p>
                </div>
                <div className='lg:w-2/5'>
                    <img src={profilePhoto}></img>
                </div>
            </div>
        </div>
      )
}

export default About