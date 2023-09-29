import React from 'react'
import './style.css'
import { useStateContext } from '../../context/SateContext';

const Slide2 = () => {
  const {setSlide} = useStateContext()
  const componentRef = React.useRef(null);
  const [animate, setAnimate] = React.useState(false)
  React.useEffect(() => {
    const handleScroll = () => {
      const element = componentRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight-500 && rect.bottom >= 0) {
          setAnimate(true)
          setSlide('#events')
        } else {
          setAnimate(false)
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div ref={componentRef} id="events" className='md:mt-20 h-[100%] relative z-30 max-w-full overflow-hidden'>
      <div className='grid md:grid-cols-5 grid-cols-1'>
        <div className='col-span-1 h-[100%] bg-black md:px-40 py-10 bg-vector'>
          <h1 class="text-white japanese flex justify-center md:flex-col items-center md:mt-[20vh]">
            <hr className='border-[1.5px] md:rotate-0 rotate-90 md:w-[100px] w-[50px] my-5' />
            <span class="text-3xl">E</span>
            <span class="text-3xl">V</span>
            <span class="text-3xl">E</span>
            <span class="text-3xl">N</span>
            <span class="text-3xl">T</span>
            <span class="text-3xl">S</span>
            <hr className='border-[1.5px] md:rotate-0 rotate-90 md:w-[100px] w-[50px] my-5' />
          </h1>
        </div>
        <div className='bg-stone-950 w-screen h-[100%]'>
          <div className='flex max-w-full overflow-x-auto'>
            <div className={`eventBox flex items-center ${animate ? 'slideDown' : 'scale-y-0'} bg-black h-[250px] w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>SPACEUP</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2022</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px]'></div>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2022</h1>
            </div>
            <div className={`eventBox flex items-center ${animate ? 'slideDown' : 'scale-y-0'} bg-black h-[250px] w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>CELESTIA</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2023</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px]'></div>
          </div>
          <div className='flex max-w-full overflow-x-auto'>
            <div className='bg-black h-[250px] w-[150px]'></div>
            <div className={`eventBox flex items-center ${animate ? 'slideUp' : 'scale-y-0'} bg-black h-[250px] w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>CASSIOPIEA</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2022</h1>
            </div>
            <div className={`eventBox flex items-center ${animate ? 'slideUp' : 'scale-y-0'} bg-black h-[250px] w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>SPACEUP</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px]'></div>
            <div className={`eventBox flex items-center ${animate ? 'slideUp' : 'scale-y-0'} bg-black h-[250px] w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>STUDENT'S SPACE SUMMIT</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2023</h1>
            </div>
          </div>
          <div className='flex max-w-full overflow-x-auto'>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2019</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px]'></div>
            <div className={`eventBox flex items-center ${animate ? 'slideDown' : 'scale-y-0'} bg-black h-[250px] w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>STUDENT'S SPACE SUMMIT</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px]'></div>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2023</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px]'></div>
            <div className={`eventBox flex items-center ${animate ? 'slideDown' : 'scale-y-0'} bg-black h-[250px] w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>SPACEUP</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide2