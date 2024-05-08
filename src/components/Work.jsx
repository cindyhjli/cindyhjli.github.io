import React from 'react'

const Work = ({term, title, company, description, skills}) => {
    return (
        <ol className='flex flex-col md:flex-row relative border-l-2 border-gray-200 pt-2'>
            <li className='mb-5 ml-4'>
                <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-2 -left-1.5 border-gray-200' />
                <p className='text-gray-400 text-md'>
                    {term}
                </p>
                <p className='text-gray-200 text-xl mt-1 font-bold'>
                    {title}
                    <span className='text-[#19A6FF]'> @ {company}</span>
                </p>
                <p className='text-gray-300 text-md mt-2'>{description}</p>
                <p className='mt-2 mb-4'>
                    {skills.map((skill, index) => (
                        <span className='inline-block mr-1.5 my-0.5 px-3 py-1 text-sm font-semibold rounded-full text-[#19A6FF] bg-[#19A6FF25]' key={index}>{skill}</span>
                    ))}
                </p>
            </li>
        </ol>
    )
}

export default Work