import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useStateContext } from '../context/SateContext';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const Sidebar = () => {
    const {slide, setSlide} = useStateContext()
    const [toggle, setToggle] = React.useState(false)
    React.useEffect(() => {
        setSlide(window.location.hash)
      }, []);

  return (
    <>
        {/* Laptop Navigation */}
        <div className='bg-white px-5 mt-[100%] md:flex flex-col hidden'>
            <a href="#home" onClick={() => setSlide('#home')} className='flex items-center h-20'>
                <HomeOutlinedIcon className={`${(slide != '#events' && slide != '#speakers' && slide != '#plan') ? 'text-red-600' : 'text-black'} md:!text-[40px] text-[20px] hover:text-red-600 focus:text-red-600 hover:cursor-pointer`} />
            </a>
            <a href="#events" onClick={() => setSlide('#events')} className='flex items-center h-20'>
                <AutoAwesomeOutlinedIcon className={`${slide == '#events' ? 'text-red-600' : 'text-black'} md:!text-[35px] text-[20px] hover:text-red-600 focus:text-red-600 hover:cursor-pointer`} />
            </a>
            <a href="#speakers" onClick={() => setSlide('#speakers')} className='flex items-center h-20'>
                <VolumeUpOutlinedIcon className={`${slide == '#speakers' ? 'text-red-600' : 'text-black'} md:!text-[35px] text-[20px] hover:text-red-600 focus:text-red-600 hover:cursor-pointer`} />
            </a>
            <a href="#plan" onClick={() => setSlide('#plan')} className='flex items-center h-20'>
                <CalendarTodayOutlinedIcon className={`${slide == '#plan' ? 'text-red-600' : 'text-black'} md:!text-[30px] text-[20px] hover:text-red-600 focus:text-red-600 hover:cursor-pointer`} />
            </a>
        </div>

        {/* Mobile Navigation  */}
        <div onClick={() => setToggle(toggle => !toggle)} className='md:hidden bg-white w-screen absolute z-20 px-5 py-5'>
            {toggle ? <CloseOutlinedIcon fontSize="large" /> : <MenuOutlinedIcon fontSize="large" />}
        </div>
        {toggle && 
        <div onClick={() => setToggle(false)} className='bg-white absolute w-screen px-10 flex flex-col justify-center items-center'>
            <div className='mt-[50%]'>
                <a href="#home" onClick={() => setSlide('#home')} className='flex items-center h-20'>
                    <HomeOutlinedIcon className={`${(slide != '#events' && slide != '#speakers' && slide != '#plan') ? 'text-red-600' : 'text-black'} !text-[30px] hover:text-red-600 focus:text-red-600 hover:cursor-pointer`} />
                </a>
                <a href="#events" onClick={() => setSlide('#events')} className='flex items-center h-20'>
                    <AutoAwesomeOutlinedIcon className={`${slide == '#events' ? 'text-red-600' : 'text-black'} !text-[30px] hover:text-red-600 focus:text-red-600 hover:cursor-pointer`} />
                </a>
                <a href="#speakers" onClick={() => setSlide('#speakers')} className='flex items-center h-20'>
                    <VolumeUpOutlinedIcon className={`${slide == '#speakers' ? 'text-red-600' : 'text-black'} !text-[30px] hover:text-red-600 focus:text-red-600 hover:cursor-pointer`} />
                </a>
                <a href="#plan" onClick={() => setSlide('#plan')} className='flex items-center h-20'>
                    <CalendarTodayOutlinedIcon className={`${slide == '#plan' ? 'text-red-600' : 'text-black'} !text-[30px] hover:text-red-600 focus:text-red-600 hover:cursor-pointer`} />
                </a>
            </div>
        </div>
        }
    </>
  )
}

export default Sidebar