import React from 'react'
import Project from './Project'

const data = [
  {
      title: 'Marillac Place Task Management',
      term: 'Jan 2024 - Present',
      description: 'Task scheduling and inventory management platform for residents and admin at Marillac Place, a women\'s shelter.',
      skills: ['TypeScript', 'React', 'Node.js', 'Docker'],
      link: 'https://github.com/uwblueprint/marillac-place',
  },
  {
      title: 'Tech+ UW Website and Portal',
      term: 'Jan 2024 - Present',
      description: 'Tech+ UW club website and portal for the club\'s mentorship initiative.',
      skills: ['JavaScript', 'React'],
      priv: true,
      link: 'https://www.techplusuw.com/',
  },
  {
    title: 'Chess',
    term: 'Nov 2023 - Dec 2023',
    description: 'Chess program with 5 computer levels, a 2-player mode, and score tracking.',
    skills: ['C++', 'X11'],
    priv: true,
},
{
  title: "Children's Aid Society Case Management",
  term: 'Sep 2023 - Dec 2023',
  description: 'Management system to track cases for the Children\'s Aid Society of Algoma, a non-profit that works to protect youth from abuse and neglect.',
  skills: ['Python', 'Flask', 'TypeScript', 'React', 'PostgreSQL'],
  link: 'https://github.com/uwblueprint/childrens-aid-society',
},
]

const ProjectsList = () => {
  return (
    <div id='projects' className='w-full m-auto px-[25%] p-4 py-24 relative'>
      <h1 className='text-7xl font-bold text-left text-white pb-24'>Projects</h1>
      <div className='px-2'>
        <div className='flex flex-wrap gap-y-8 justify-between'>
        {data.map((item, index) => (
            <Project key={index} term={item.term} title={item.title} description={item.description} skills={item.skills} priv={item.priv} link={item.link}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsList