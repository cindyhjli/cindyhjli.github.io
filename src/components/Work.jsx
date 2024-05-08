import React from 'react'

const Work = ({term, title, company, description, skills}) => {
    return (
        <ol className='flex flex-col md:flex-row relative border-l-2 border-gray-200 pt-2'>
            <li className='mb-10 ml-8'>
                <div className='absolute w-5 h-5 bg-gray-200 rounded-full mt-2.5 -left-2.5 border-gray-200' />
                <p className='text-gray-400 text-lg'>
                    {term}
                </p>
                <p className='text-gray-200 text-xl mt-2 font-bold'>
                    {title}
                    <span className='text-[#19A6FF]'> @ {company}</span>
                </p>
                <p className='text-gray-300 text-lg mt-4'>{description}</p>
                <p className='mt-4 mb-8'>
                    {skills.map((skill, index) => (
                        <span className='inline-block mr-3 my-2 px-4 py-2 text-2xl font-semibold rounded-full text-[#19A6FF] bg-[#19A6FF25]' key={index}>{skill}</span>
                    ))}
                </p>
            </li>
        </ol>
    )
}

export default Work