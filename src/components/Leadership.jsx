import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Leadership = ({date, title, organization, description, first, link}) => {
    return (
        <ol className='flex flex-col md:flex-row relative border-l-2 border-gray-200 pt-2'>
            <li className='mb-10 ml-8'>
                {first ? (
                <div>
                    <div className='absolute w-5 h-5 bg-gray-200 rounded-full mt-2.5 -left-2.5 border-gray-200' />
                    {link ? (
                    <a href={link} className='flex pt-2 text-[#19A6FF] hover:underline font-bold text-4xl'>{organization}<span className='pt-1 pl-4'><FaExternalLinkAlt /></span></a>
                    ) : <p className='text-[#19A6FF] text-4xl mt-2 font-bold pb-4'>
                            {organization}
                        </p>}
                </div>
                ) : null}
                <p className='text-gray-400 text-3xl'>
                    {date}
                </p>
                <p className='text-gray-200 text-3xl mt-2 font-bold'>
                    {title}
                </p>
                <p className='text-gray-300 text-3xl mt-4'>{description}</p>
            </li>
        </ol>
    )
}

export default Leadership