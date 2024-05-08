import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = ({term, title, description, skills, priv, link}) => {
  return (
      <div className='relative h-auto 2xl:w-[49%] shadow-xl bg-[#292929] shadow-[#111111] rounded-xl p-10 hover:scale-105 ease-in duration-300'>
        <p className='text-gray-400 text-lg'>
            {term}
        </p>
        <p className='text-gray-200 text-xl mt-2 font-bold'>
            {title}
        </p>
        {link ? (
          <a href={link} className='flex pt-2 text-[#19A6FF] hover:underline font-semibold text-lg'>View Project<span className='pt-1 pl-2'><FaExternalLinkAlt /></span></a>
        ) : null}
        {priv ? (
          <p className='text-lg pt-1 text-gray-400'>(Private repository)</p>
        ) : null}
        <p className='text-gray-300 text-lg mt-4'>{description}</p>
        <p className='mt-4 mb-8'>
            {skills.map((skill, index) => (
                <span className='inline-block mr-3 my-2 px-4 py-2 text-lg font-semibold rounded-full text-[#19A6FF] bg-[#19A6FF25]' key={index}>{skill}</span>
            ))}
        </p>
      </div>
  )
}

export default Project