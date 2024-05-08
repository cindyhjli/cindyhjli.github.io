import {TypeAnimation} from 'react-type-animation'
import { FaLinkedin, FaGithub, FaLink } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const Main = () => {

  return (
    <div id='home'>
      <div className='w-full h-screen top-0 left-0 relative'>
        <div className='m-auto h-full w-full flex flex-col justify-center items-center'>
          <h1 className='md:text-5xl text-3xl font-bold text-gray-200'>Hello! I'm Cindy</h1>
          <h2 className='flex sm:text-xl text-lg pt-3 text-gray-200'>I'm a&nbsp;
            <TypeAnimation
            sequence={['Computer Science Student',2000, 'Software Developer', 2000, 'Tech Enthusiast', 2000]}
            wrapper='div'
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: '1em',
              color: 'gray-200',
            }}
            />
          </h2>
          <div className='flex justify-center pt-5 max-w-[250px] w-full text-gray-200'>
            <a href='http://www.linkedin.com/in/cindy-hj-li'><FaLinkedin className='cursor-pointer mx-2.5' size={40}/></a>
            <a href='https://github.com/cindyhjli'><FaGithub className='cursor-pointer mx-2.5' size={40}/></a>
            <a href="mailto:cindy.li2@uwaterloo.ca"><IoMdMail className='cursor-pointer mx-2.5' size={40}/></a>
          </div>
          <div className='absolute bottom-2'>
            <a href='#about' className='items-center text-gray-200'><IoIosArrowDown className='cursor-pointer my-6' size={40} color='white' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
