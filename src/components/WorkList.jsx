import React from 'react'
import Work from './Work'

const data = [
    {
        title: 'Software Developer Intern',
        company: 'Royal Bank of Canada',
        term: 'Jan 2024 - Apr 2024',
        description: 'Developed a task management portal for the RBC Global IT Risk team to streamline ticket submission and management. Implemented dashboards, metrics, and data visualization to enable real-time insights on progress and inform resource allocation.',
        skills: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'MS SQL'],
    },
    {
        title: '5G Technology Engineer Intern',
        company: 'Rogers Communications',
        term: 'May 2023 - Aug 2023',
        description: 'Analyzed network traffic data to create summaries and forecasts for the Wireless Data Networking team. Automated data collection, filtering, and visualization for network service validation and load testing.',
        skills: ['Python', 'pandas', '5G Core'],
    },
]

const WorkList = () => {
  return (
    <div id='experience' className='w-full m-auto px-[25%] p-4 py-24 relative'>
        <h1 className='text-4xl font-bold text-left text-gray-200 pb-24'>Work Experience</h1>
        {data.map((item, index) => (
            <Work key={index} term={item.term} title={item.title} company={item.company} description={item.description} skills={item.skills}/>
        ))}
    </div>
  )
}

export default WorkList