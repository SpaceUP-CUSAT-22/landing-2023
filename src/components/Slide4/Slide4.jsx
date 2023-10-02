import React from 'react'
import { useStateContext } from '../../context/SateContext';
import './style.css'

const Slide4 = () => {
  const {setSlide} = useStateContext()
  const componentRef = React.useRef(null);
  const [animate, setAnimate] = React.useState(false)
  React.useEffect(() => {
    const handleScroll = () => {
      const element = componentRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight-500 && rect.bottom >= 0) {
          setSlide('#plan')
          setAnimate(true)
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
    <div id="plan" ref={componentRef} className='component bg-black h-full w-[100%] relative z-30'>
      <div className='md:px-20 px-5 py-20'>
        <div className='flex md:flex-row flex-col justify-center md:justify-between items-center'>
          <h1 className='quicksand text-3xl md:text-5xl text-white md:tracking-[80px]'>2023</h1>
          <hr className='md:block md:-ml-20 hidden border-[1.5px] border-[#1C1C1C] w-[40%]' />
          <h2 className='md:my-0 my-10 text-xl md:text-4xl text-white quicksand'>October 14th 2023</h2>
        </div>
        <div className='overflow-x-auto my-16'>
          <div onWheel={() => setAnimate(false)} className={`${animate && 'slideRight'} min-w-[2250px]`}>

            <div className='inline-flex ml-[160px] items-center'>
              <h3 className='text-2xl font-light text-white mr-20'>8</h3>
              <hr className='rotate-90 border-white border-[1.5px] w-[20px] mr-20' />
              <h3 className='text-2xl font-light text-white mr-20'>9</h3>
              <hr className='rotate-90 border-white border-[1.5px] w-[20px] mr-20' />
              <h3 className='text-2xl font-light text-white mr-20'>10</h3>
              <hr className='rotate-90 border-white border-[1.5px] w-[20px] mr-20' />
              <h3 className='text-2xl font-light text-white mr-20'>11</h3>
              <hr className='rotate-90 border-white border-[1.5px] w-[20px] mr-20' />
              <h3 className='text-2xl font-light text-white mr-20'>12</h3>
              <hr className='rotate-90 border-white border-[1.5px] w-[20px] mr-20' />
              <h3 className='text-2xl font-light text-white mr-20'>1</h3>
              <hr className='rotate-90 border-white border-[1.5px] w-[20px] mr-20' />
              <h3 className='text-2xl font-light text-white mr-20'>2</h3>
              <hr className='rotate-90 border-white border-[1.5px] w-[20px] mr-20' />
              <h3 className='text-2xl font-light text-white mr-20'>3</h3>
              <hr className='rotate-90 border-white border-[1.5px] w-[20px] mr-20' />
              <h3 className='text-2xl font-light text-white mr-20'>4</h3>
              <hr className='rotate-90 border-white border-[1.5px] w-[20px] mr-20' />
              <h3 className='text-2xl font-light text-white mr-20'>5</h3>
              <hr className='rotate-90 border-white border-[1.5px] w-[20px] mr-20' />
              <h3 className='text-2xl font-light text-white mr-20'>6</h3>
              <hr className='rotate-90 border-white border-[1.5px] w-[20px] mr-20' />
              <h3 className='text-2xl font-light text-white mr-20'>7</h3>
            </div>
            <hr className='border-[#1C1C1C] border-[1px] w-full mt-20' />
              <div className='flex'>
                <div className='bg-red-500 py-5 px-5 flex justify-center h-[80px] w-[90px]'>
                  <p className='text-black'>Venue1</p>
                </div>
                <div className='flex ml-[80px]'>
                  <div className='bg-[#D9DC47] py-4 px-5 flex justify-center h-[80px] w-[180px]'>
                    <p className='text-black'>Spot Registration Begins</p>
                  </div>
                  <div className='bg-[#F3F3D1] py-5 px-5 flex justify-center h-[80px] w-[200px]'>
                    <p className='text-black'>Innaugral Ceremony</p>
                  </div>
                  <div className='bg-[#FBAD19] py-5 px-5 flex justify-center h-[80px] w-[190px]'>
                    <p className='text-black'>Tessy Thomas Talk Session</p>
                  </div>
                  <div className='bg-orange-500 py-5 px-5 flex justify-center h-[80px] w-[200px]'>
                    <p className='text-black'>Brinda Talk Session</p>
                  </div>
                  <div className='ml-[400px] bg-blue-900 py-5 px-5 flex justify-center h-[80px] w-[90px]'>
                    <p className='text-black'>Break</p>
                  </div>
                  <div className='opacity-0 bg-zinc-500 py-5 px-5 flex justify-center h-[80px] w-[390px]'>
                    <p className='text-black'>Prep</p>
                  </div>
                  <div className='bg-green-500 py-5 px-5 flex justify-center h-[80px] w-[390px]'>
                    <p className='text-black'>AstroHack / Treasure Hunt</p>
                  </div>
                </div>
              </div>
            <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='flex'>
                <div className='bg-green-500 py-5 px-5 flex justify-center h-[80px] w-[90px]'>
                  <p className='text-black'>Venue2</p>
                </div>
                <div className='flex ml-[650px]'>
                  <div className='opacity-0 bg-zinc-500 py-7 flex justify-center h-[80px] w-[200px]'>
                    <p className='text-black'>Games Setting up</p>
                  </div>
                  <div className='ml-[210px] bg-cyan-500 py-7 px-5 flex justify-center h-[80px] w-[190px]'>
                    <p className='text-black'>Team HORIZON</p>
                  </div>
                  <div className='bg-blue-900 py-7 px-5 flex justify-center h-[80px] w-[90px]'>
                    <p className='text-black'>Break</p>
                  </div>
                  <div className='bg-zinc-900 py-7 px-5 flex justify-center h-[80px] w-[390px]'>
                    <p className='text-white'>CANSAT Workshop (Aero in)</p>
                  </div>
                  <div className='bg-green-500 py-7 px-5 flex justify-center h-[80px] w-[390px]'>
                    <p className='text-black'>Games (Popsicle bridge challenge)</p>
                  </div>
                </div>
              </div>
            <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='flex'>
                <div className='bg-blue-500 py-5 px-5 flex justify-center h-[80px] w-[90px]'>
                  <p className='text-black'>Venue3</p>
                </div>
                <div className='flex ml-[850px]'>
                  <div className='bg-blue-900 py-7 flex justify-center h-[80px] w-[210px]'>
                    <p className='text-black'>Lunch break</p>
                  </div>
                  <div className='bg-orange-500 py-7 px-5 flex justify-center h-[80px] w-[190px]'>
                    <p className='text-black'>Vyshakhan Thambi</p>
                  </div>
                  <div className='bg-blue-900 py-7 px-5 flex justify-center h-[80px] w-[90px]'>
                    <p className='text-black'>Break</p>
                  </div>
                  <div className='bg-[#13B3E5] py-7 px-5 flex justify-center h-[80px] w-[390px]'>
                    <p className='text-black'>WESAT</p>
                  </div>
                </div>
              </div>
            {/* <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='flex ml-[600px]'>
                <div className='ml-[200px] bg-[#F26D20] py-7 flex justify-center h-[80px] w-[200px]'>
                  <p className='text-black'>Speaker 2</p>
                </div>
                <div className='ml-[200px] bg-[#ADDCD2] py-7 px-5 flex justify-center h-[80px] w-[370px]'>
                  <p className='text-black'>Speaker 2</p>
                </div>
              </div> */}
            {/* <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='ml-[1200px] bg-[#5CC3B2] py-7 px-5 flex justify-center h-[80px] w-[370px]'>
                <p className='text-black'>Speaker 3</p>
              </div> */}
            {/* <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='ml-[1570px] bg-[#13B3E5] py-7 px-5 flex justify-center h-[80px] w-[230px]'>
                <p className='text-black'>Speaker 1</p>
              </div> */}
            {/* <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='ml-[1570px] bg-[#ADDCD2] py-7 px-5 flex justify-center h-[80px] w-[230px]'>
                <p className='text-black'>Speaker 2</p>
              </div> */}
            {/* <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='ml-[1570px] bg-[#5CC3B2] py-7 px-5 flex justify-center h-[80px] w-[230px]'>
                <p className='text-black'>Speaker 3</p>
              </div> */}
            <hr className='border-[#1C1C1C] border-[1px] w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide4;
