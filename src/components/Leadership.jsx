import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Leadership = ({date, title, organization, description, first, link}) => {
    return (
        <ol className='flex flex-col md:flex-row relative border-l-2 border-gray-200 pt-2'>
            <li className='mb-5 ml-4'>
                {first ? (
                <div>
                    <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-2 -left-1.5 border-gray-200' />
                    {link ? (
                    <a href={link} className='flex pt-1 text-[#19A6FF] hover:underline font-bold text-xl'>{organization}<span className='pt-1 pl-2'><FaExternalLinkAlt /></span></a>
                    ) : <p className='text-[#19A6FF] text-xl mt-1 font-bold pb-2'>
                            {organization}
                        </p>}
                </div>
                ) : null}
                <p className='text-gray-400 text-md'>
                    {date}
                </p>
                <p className='text-gray-200 text-lg mt-1 font-bold'>
                    {title}
                </p>
                <p className='text-gray-300 text-md mt-2'>{description}</p>
            </li>
        </ol>
    )
}

export default Leadership