import React, {useState, useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { FaLinkedin, FaGithub} from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";

const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    const [active, setActive] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'projects', 'leadership'];
            let curr = '';
            sections.forEach((sectionID) => {
                const section = document.getElementById(sectionID);
                const rect = section.getBoundingClientRect();
                console.log(rect.top);
                if (rect.top <= window.innerHeight/3) {
                    curr = sectionID;
                }
            });
            console.log(curr);
            setActive(curr);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-5 w-5 h-5 right-5 z-[100] md:hidden text-gray-200' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-black/75 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-black m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'>
                            <span className='pl-4 font-bold'>Home</span>
                        </a>
                        <a onClick={handleNav} href='#about' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-black m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'>
                            <span className='pl-4 font-bold'>About</span>
                        </a>
                        <a onClick={handleNav} href='#experience' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-black m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'>
                            <span className='pl-4 font-bold'>Experience</span>
                        </a>
                        <a onClick={handleNav} href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-black m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'>
                            <span className='pl-4 font-bold'>Projects</span>
                        </a>
                        <a onClick={handleNav} href='#leadership' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-black m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'>
                            <span className='pl-4 font-bold'>Leadership</span>
                        </a>
                    </div>
                ) : (
                    ''
                )
            } <div className='md:hidden fixed bottom-0 left-[4%] z-10'>
                <div className='flex justify-center pt-16 w-[85%] text-gray-200' style={{ display: active == 'home' || active == '' ? 'none' : ''}}>
                    <a href='http://www.linkedin.com/in/cindy-hj-li'><FaLinkedin className='cursor-pointer mx-1' size={18}/></a>
                    <a href='https://github.com/cindyhjli'><FaGithub className='cursor-pointer mx-1' size={18}/></a>
                    <a href="mailto:cindy.li2@uwaterloo.ca"><IoMdMail className='cursor-pointer mx-1' size={18}/></a>
                </div>
                <p className='text-xs text-left text-gray-200 mb-8 mt-3'>&copy; 2024 Cindy Li</p>
            </div>
            <div className='md:block hidden fixed left-[4%] z-10'>
                <div className='flex flex-col h-screen justify-center items-left'>
                    {/* <a
                        href="#home"
                        className={`anchor ${active === 'home' ? 'active' : ''}`}
                        style={{ color: active === 'home' ? '#e5e7eb' : '#9ca3af', fontWeight: active === 'home' ? 'bold' : '', fontSize: '35px', paddingTop: '10px', paddingBottom: '10px'}}
                    >
                        Home
                    </a> */}
                    <a
                        href="#about"
                        className={`anchor ${active === 'about' ? 'active' : ''}`}
                        style={{ display: active == 'home' || active == '' ? 'none' : '', color: active === 'about' ? '#e5e7eb' : '#9ca3af', fontWeight: active === 'about' ? 'bold' : '', fontSize: '18px', paddingTop: '5px', paddingBottom: '5px'}}
                    >
                        About
                    </a>
                    <a
                        href="#experience"
                        className={`anchor ${active === 'experience' ? 'active' : ''}`}
                        style={{ display: active == 'home' || active == '' ? 'none' : '', color: active === 'experience' ? '#e5e7eb' : '#9ca3af', fontWeight: active === 'experience' ? 'bold' : '', fontSize: '18px', paddingTop: '5px', paddingBottom: '5px'}}
                    >
                        Experience
                    </a>
                    <a
                        href="#projects"
                        className={`anchor ${active === 'projects' ? 'active' : ''}`}
                        style={{ display: active == 'home' || active == '' ? 'none' : '', color: active === 'projects' ? '#e5e7eb' : '#9ca3af', fontWeight: active === 'projects' ? 'bold' : '', fontSize: '18px', paddingTop: '5px', paddingBottom: '5px'}}
                    >
                        Projects
                    </a>
                    <a
                        href="#leadership"
                        className={`anchor ${active === 'leadership' ? 'active' : ''}`}
                        style={{ display: active == 'home' || active == '' ? 'none' : '', color: active === 'leadership' ? '#e5e7eb' : '#9ca3af', fontWeight: active === 'leadership' ? 'bold' : '', fontSize: '18px', paddingTop: '5px', paddingBottom: '5px'}}
                    >
                        Leadership
                    </a>
                    <div className='fixed bottom-0'>
                        <div className='flex justify-center pt-16 w-[85%] text-gray-200' style={{ display: active == 'home' || active == '' ? 'none' : ''}}>
                            <a href='http://www.linkedin.com/in/cindy-hj-li'><FaLinkedin className='cursor-pointer mx-1.5' size={25}/></a>
                            <a href='https://github.com/cindyhjli'><FaGithub className='cursor-pointer mx-1.5' size={25}/></a>
                            <a href="mailto:cindy.li2@uwaterloo.ca"><IoMdMail className='cursor-pointer mx-1.5' size={25}/></a>
                        </div>
                        <p className='text-md text-left text-gray-200 mb-8 mt-3'>&copy; 2024 Cindy Li</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidenav