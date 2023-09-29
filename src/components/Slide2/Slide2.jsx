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
        console.log(rect.top, rect.bottom, window.innerHeight)
        if (rect.top < window.innerHeight-500 && rect.bottom >= 0) {
          setAnimate(true)
          setSlide('#events')
        } else {
          // setAnimate(false)
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div ref={componentRef} id="events" className='mt-20 h-[100%] absolute z-30'>
      <div className='grid grid-cols-5'>
        <div className='col-span-1 h-[100%] bg-black px-40 py-10'>
          <h1 class="text-white japanese flex flex-col items-center mt-[20vh]">
            <hr className='border-[1.5px] w-[100px] my-5' />
            <span class="text-3xl">E</span>
            <span class="text-3xl">V</span>
            <span class="text-3xl">E</span>
            <span class="text-3xl">N</span>
            <span class="text-3xl">T</span>
            <span class="text-3xl">S</span>
            <hr className='border-[1.5px] w-[100px] my-5' />
          </h1>
        </div>
        <div className='bg-stone-950 w-screen h-[100%]'>
          <div className='flex flex-wrap'>
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
          <div className='flex flex-wrap'>
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
          <div className='flex flex-wrap'>
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