import React, { useState, useEffect } from "react";
import left_tree from '../../assets/left_tree.png'
import right_tree from '../../assets/right_tree.png'
import mountain from '../../assets/landscape.png'
import arch from '../../assets/arch.png'
import shuttle from '../../assets/shuttle.png'
import './style.css'
import { useStateContext } from "../../context/SateContext";



const Slide1 = () => {
  const {setSlide} = useStateContext()
  const [scrolled, setScrolled] = React.useState(false)
  const componentRef = React.useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const element = componentRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight-500 && rect.bottom >= 0) {
          setSlide('#home')
        } else {

        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div ref={componentRef} id="home" className={`component h-screen overflow-hidden`}>
      <div className={`fixed top-0 left-0 w-full h-3/4 flex flex-row justify-center md:justify-between items-center my-auto `}>
        <div className='hidden md:flex ml-20 mb-[-180px]'>
          <img src={left_tree} alt='left tree' className='h-24 lg:h-36 animate-left' />
        </div>
        <div >
          <div className=' w-48 h-48 lg:w-60 lg:h-60 rounded-full bg-[#E51F24] animate-down flex justify-center items-center'>
            <h1 className="text-5xl lg:text-[63px] japanese">
              Spa<span className="text-white">ceupcu</span>sat
            </h1>
          </div>
        </div>
        <div className='hidden md:flex mt-[-180px]'>
          <img src={right_tree} alt='right tree' className='h-24 lg:h-48 animate-right' />

        </div>
      </div>
      <div className={`hidden md:flex fixed bottom-0 left-0 w-full ${scrolled ? 'enlarged' : ''} flex justify-center items-center  `}>
        <div className="w-3/5">
        <img
          src={mountain}
          alt='mountain'
          className={` ${scrolled ? 'h-56' : 'h-40'} animate-up flex justify-center mx-auto`}
          style={{
            transition: 'height 1s ease',
          }}
        />
        {/* adjust height and width and scale duration in css later */}
        </div>
      </div>
      <div className={`fixed bottom-0 left-0 w-full flex justify-center items-center`}>
        <img
          src={arch}
          alt="arch"
          className={`${scrolled ? 'animate-ping' : 'h-72 md:h-96'} animate-up-slow`}
        />
      </div>


      <div className={`absolute bottom-[-110px] left-0 w-full ${scrolled ? '' : 'hidden'} flex justify-center items-center`}>
        <img
          src={shuttle}
          alt="shuttle"
          className={`${scrolled ? 'h-96 md:h-[560px]' : 'h-64'} animate-shuttle`}
        />

      </div>
    </div>
  )
}

export default Slide1