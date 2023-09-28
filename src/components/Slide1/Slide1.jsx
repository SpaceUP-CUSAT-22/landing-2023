import { useState, useEffect } from "react";
import left_tree from '../../assets/left_tree.png'
import right_tree from '../../assets/right_tree.png'
import mountain from '../../assets/landscape.png'
import arch from '../../assets/arch.png'
import shuttle from '../../assets/shuttle.png'



const Slide1 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div id="home" className='h-screen overflow-hidden'>
      <div className='fixed top-0 left-0 w-full h-3/4 flex flex-col md:flex-row justify-between items-center my-auto '>
        <div className='hidden md:flex ml-20 mb-[-180px]'>
          <img src={left_tree} alt='left tree' className='h-24 lg:h-36 animate-left' />
        </div>
        <div >
          <div className='w-36 h-36 lg:w-60 lg:h-60 rounded-full bg-[#E51F24] animate-down'></div>
        </div>
        <div className='hidden md:flex mt-[-180px]'>
          <img src={right_tree} alt='right tree' className='h-24 lg:h-48 animate-right' />

        </div>
      </div>
      <div className={`fixed bottom-0 left-0 w-full ${scrolled ? 'enlarged' : ''} flex justify-center items-center `}>
        <img
          src={mountain}
          alt='mountain'
          className={` ${scrolled ? 'h-44' : 'h-40'} animate-up`}
          style={{
            transition: 'height 0.5s ease',
          }}
        />
        {/* adjust height and width and scale duration in css later */}
        <div className={`fixed bottom-0 left-0 w-full flex justify-center items-center`}>
          <img
            src={arch}
            alt="arch"
            className={`${scrolled ? 'animate-ping' : 'h-64'} animate-up-slow`}
          />
        </div>
      </div>


      <div className={`absolute bottom-[-110px] left-0 w-full ${scrolled ? '' : 'hidden'} flex justify-center items-center`}>
        <img
          src={shuttle}
          alt="shuttle"
          className={`${scrolled ? 'h-96' : 'h-64'} animate-shuttle`}
        />

      </div>
    </div>
  )
}

export default Slide1