import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = ({term, title, description, skills, priv, link}) => {
  return (
      <div className='relative h-auto lg:w-[49%] shadow-xl bg-[#292929] shadow-[#111111] rounded-xl p-5 hover:scale-105 ease-in duration-300'>
        <p className='text-gray-400 text-md'>
            {term}
        </p>
        <p className='text-gray-200 text-xl mt-1 font-bold'>
            {title}
        </p>
        {link ? (
          <a href={link} className='flex pt-1 text-[#19A6FF] hover:underline font-semibold text-sm'>View Project<span className='pt-1 pl-2'><FaExternalLinkAlt /></span></a>
        ) : null}
        {priv ? (
          <p className='text-sm pt-0.5 text-gray-400'>(Private repository)</p>
        ) : null}
        <p className='text-gray-300 text-md mt-4'>{description}</p>
        <p className='mt-2 mb-4'>
            {skills.map((skill, index) => (
                <span className='inline-block mr-1.5 my-0.5 px-3 py-1 text-sm font-semibold rounded-full text-[#19A6FF] bg-[#19A6FF25]' key={index}>{skill}</span>
            ))}
        </p>
      </div>
  )
}

export default Project