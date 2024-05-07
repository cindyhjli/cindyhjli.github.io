import React, {useState, useEffect} from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import WorkList from './components/WorkList'
import ProjectsList from './components/ProjectsList'
import LeadershipList from './components/LeadershipList'
import coverPhoto from './assets/coverPhoto.jpg'



function App() {
  const [count, setCount] = useState(0)

  const [scrollOpacity, setScrollOpacity] = useState(0.5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight;
      const opacity = (0.75 - (scrollPosition / maxScroll)) * 2/3;
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className='bg-[#222222] w-full h-full m-0 p-0 overscroll-[#222222] overflow-[#222222]'>
        <div className='fixed bg-[#222222] w-full h-screen -z-2'/>
        <img className='fixed w-full h-screen object-cover object-center -z-1' src={coverPhoto} alt='profile' style={{ opacity: scrollOpacity}} />
        <Sidenav />
        <Main />
        <About />
        <WorkList />
        <ProjectsList />
        <LeadershipList />
      </div>
  )
}

export default App
