import React from 'react'

const Slide4 = () => {
  const componentRef = React.useRef(null);
  React.useEffect(() => {
    const handleScroll = () => {
      const element = componentRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        console.log(rect.top, rect.bottom, window.innerHeight)
        if (rect.top < window.innerHeight-500 && rect.bottom >= 0) {
          setAnimate(true)
          setSlide('#plan')
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
    <div id="plan" ref={componentRef} className='bg-black h-full w-[100%] relative z-30'>
      <div className='px-20 py-20'>
        <div className='flex justify-between items-center'>
          <h1 className='quicksand text-5xl text-white tracking-[80px]'>2023</h1>
          <hr className='border-[1.5px] border-[#1C1C1C] w-[40%]' />
          <h2 className='text-4xl text-white quicksand'>October 14th 2023</h2>
        </div>
        <div className='overflow-x-auto my-16'>
          <div className='min-w-[150%]'>

            <div className='inline-flex items-center'>
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
            </div>
            <hr className='border-[#1C1C1C] border-[1px] w-full mt-20' />
              <div className='bg-[#D9DC47] py-7 px-5 flex justify-center h-[80px] w-[500px]'>
                <p className='text-black'>Registration Begins</p>
              </div>
            <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='flex ml-[200px]'>
                <div className='bg-[#F3F3D1] py-5 px-5 flex justify-center h-[80px] w-[100px]'>
                  <p className='text-black'>Innaugral Ceremony</p>
                </div>
                <div className='ml-[200px] bg-[#FBAD19] py-7 flex justify-center h-[80px] w-[200px]'>
                  <p className='text-black'>Tessy Thomas Talk Session</p>
                </div>
                <div className='bg-[#A6A6A6] py-7 px-5 flex justify-center h-[80px] w-[100px]'>
                  <p className='text-black'>Break</p>
                </div>
                <div className='ml-[200px] bg-[#A6A6A6] py-7 px-5 flex justify-center h-[80px] w-[200px]'>
                  <p className='text-black'>Break</p>
                </div>
              </div>
            <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='flex ml-[600px]'>
                <div className='ml-[200px] bg-[#FBAD19] py-7 flex justify-center h-[80px] w-[200px]'>
                  <p className='text-black'>Speaker 1</p>
                </div>
                <div className='ml-[200px] bg-[#13B3E5] py-7 px-5 flex justify-center h-[80px] w-[370px]'>
                  <p className='text-black'>Speaker 1</p>
                </div>
              </div>
            <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='flex ml-[600px]'>
                <div className='ml-[200px] bg-[#F26D20] py-7 flex justify-center h-[80px] w-[200px]'>
                  <p className='text-black'>Speaker 2</p>
                </div>
                <div className='ml-[200px] bg-[#ADDCD2] py-7 px-5 flex justify-center h-[80px] w-[370px]'>
                  <p className='text-black'>Speaker 2</p>
                </div>
              </div>
            <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='ml-[1200px] bg-[#5CC3B2] py-7 px-5 flex justify-center h-[80px] w-[370px]'>
                <p className='text-black'>Speaker 3</p>
              </div>
            <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='ml-[1570px] bg-[#13B3E5] py-7 px-5 flex justify-center h-[80px] w-[230px]'>
                <p className='text-black'>Speaker 1</p>
              </div>
            <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='ml-[1570px] bg-[#ADDCD2] py-7 px-5 flex justify-center h-[80px] w-[230px]'>
                <p className='text-black'>Speaker 2</p>
              </div>
            <hr className='border-[#1C1C1C] border-[1px] w-full' />
              <div className='ml-[1570px] bg-[#5CC3B2] py-7 px-5 flex justify-center h-[80px] w-[230px]'>
                <p className='text-black'>Speaker 3</p>
              </div>
            <hr className='border-[#1C1C1C] border-[1px] w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide4