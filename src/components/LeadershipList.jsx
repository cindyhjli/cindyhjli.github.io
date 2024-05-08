import React, {useState} from 'react'
import Leadership from './Leadership'
import { IoIosArrowDown } from "react-icons/io";

const data = [
    {
        title: 'Project Developer',
        organization: 'UW Blueprint',
        date: 'Sep 2023 - Present',
        description: 'Worked on projects for social good in partnership with non-profit organizations, creating tech solutions to address their needs.',
        first: true,
        link: 'https://uwblueprint.org/',
    },
    {
        title: 'VP Internal',
        date: 'May 2023 - Aug 2023',
        description: 'Fostered an inclusive team culture through various initiatives and social events, promoting a positive work environment.',
    },
    {
        title: 'Full Stack Developer',
        organization: 'Tech+ UW',
        date: 'Jan 2024 - Present',
        description: 'Developed front-end components for the club website and mentorship portal for mentors and mentees to connect and manage tasks.',
        first: true,
        link: 'https://www.techplusuw.com/',
    },
    {
        title: 'Unit Leader',
        organization: 'Girl Guides of Canada',
        date: 'Jan 2017 - Present',
        description: 'Supervised educational activities for girls ages 6 to 8, providing valuable learning experiences and motivating growth mindset in a safe and inclusive environment.',
        first: true,
        link: 'https://www.girlguides.ca/',
    },
    {
        title: 'At-Large Representative',
        organization: 'University of Waterloo Mathematics Society Council',
        date: 'Sep 2023 - Dec 2023',
        description: 'Represented the interests of the math student body at council meetings, voting on decisions and providing feedback on initiatives.',
        first: true,
        link: 'https://mathsoc.uwaterloo.ca/council/',
    },
    {
        title: 'Co-Founder and Director',
        organization: 'FOCUS Youth Organization',
        date: 'Nov 2019 - Oct 2023',
        description: 'Founded a registered Canadain charity, overseeing tasks, running team meetings, and consolidating ideas for future events and initiatives. Planned and facilitated events to support those impacted by the COVID-19 pandemic, such as hosting a volunteer opportunities fair, creating and delivering care packages for the homeless, and hosting a postsecondary pathway panel.',
        first: true,
        link: 'https://www.focusyouth.ca/',
    },
    {
        title: 'Orientation Leader',
        organization: 'University of Waterloo Math Orientation',
        date: 'Jun 2023 - Sep 2023',
        description: 'Prepared and ran orientation activities for incoming math faculty students.',
        first: true,
    },
    {
        title: 'Member',
        organization: 'University of Waterloo Dragon Boat Club',
        date: 'Sep 2022 - Dec 2022',
        description: 'Participated in dryland, pool and on-water practices.',
        first: true,
        link: 'https://uwdbc.com/',
    },
]

const dataHS = [
    {
        title: 'Vice President',
        organization: 'St. Robert Coding Club',
        date: 'Jun 2021 - Jun 2022',
        first: true,
    },
    {
        title: 'Junior Executive',
        date: 'Dec 2020 - Jun 2021',
        first: false,
    },
    {
        title: 'Spirit Coordinator',
        organization: 'St. Robert STEM Council',
        date: 'Sep 2021 - Jun 2022',
        first: true,
    },
    {
        title: 'Grade 11 Representative',
        date: 'Sep 2020 - Jun 2022',
        first: false,
    },
    {
        title: 'Location-In-Charge and Customer Service Representative',
        organization: 'City of Toronto',
        date: 'Oct 2021 - Mar 2022',
        first: true,
    },
    {
        title: 'Skating Instructor',
        date: 'Oct 2019 - Dec 2021',
        first: false,
    },
    {
        title: 'Team Member',
        organization: 'St. Robert Girls Volleyball Team',
        date: 'Dec 2018 - Feb 2022',
        first: true,
    },
    {
        title: 'Shad Fellow',
        organization: 'Shad Canada',
        date: 'Jun 2021 - Jul 2021',
        first: true,
        link: 'https://www.shad.ca/',
    },
    {
        title: 'Writer and Editor',
        organization: 'La Silhouette French Newspaper',
        date: 'Sep 2018 - Jun 2021',
        first: true,
    },
    {
        title: 'VP Sales | Improvall',
        organization: 'JA Company Program',
        date: 'Nov 2020 - May 2021',
        first: true,
        link: 'https://www.jacentralontario.org/company-program/',
    },
    {
        title: 'IT | ekoalatee',
        date: 'Nov 2019 - Jun 2020',
        first: false,
    },
    {
        title: 'Member',
        organization: 'St. Robert Empowered Student Partnerships',
        date: 'Sep 2018 - Jun 2021',
        first: true,
    },
    {
        title: 'Volunteer',
        organization: 'Toronto Santa Claus Parade',
        date: 'Nov 2016 - Nov 2019',
        first: true,
        link: 'https://thesantaclausparade.com/',
    },
    {
        title: 'Team Member',
        organization: 'St. Robert Varsity Ultimated Frisbee Team',
        date: 'Apr 2019 - Jun 2019',
        first: true,
    },
    {
        title: 'Trumpet Player',
        organization: 'St. Robert Intermediate Band',
        date: 'Sep 2018 - Jun 2019',
        first: true,
    },
    {
        title: 'Member',
        organization: 'St. Robert Mural Club',
        date: 'Sep 2018 - Jun 2019',
        first: true,
    },
]

const Expand = () => {
    const [expand, setExpand] = useState(false);

    return (
        <div className='expand-collapse'>
            <button onClick={() => setExpand(!expand)}><h2 className='flex text-2xl font-bold text-left text-gray-200 pb-24 pt-16'>High School<span><IoIosArrowDown className={`ml-4 mt-2 w-10 h-10 transform ${expand ? 'rotate-180' : 'rotate-0'}`}/></span></h2></button>
            {expand && <div>{dataHS.map((item, index) => (
                <Leadership key={index} date={item.date} title={item.title} organization={item.organization} description={item.description} first={item.first} link={item.link} />
            ))}</div>}
        </div>
    )
}

const LeadershipList = () => {
    return (
        <div id='leadership' className='w-full m-auto px-[25%] p-4 py-24 relative'>
            <h1 className='text-4xl font-bold text-left text-gray-200 pb-24'>Leadership & Extracurricular</h1>
            {data.map((item, index) => (
                <Leadership key={index} date={item.date} title={item.title} organization={item.organization} description={item.description} first={item.first} link={item.link} />
            ))}
            <Expand />
        </div>
      )
}

export default LeadershipList