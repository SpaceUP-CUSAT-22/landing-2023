import React from 'react'
import { useStateContext } from '../../context/SateContext';

const Slide5 = () => {
  const componentRef = React.useRef(null);
  const {setSlide} = useStateContext()
  React.useEffect(() => {
    const handleScroll = () => {
      const element = componentRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight-500 && rect.bottom >= 0) {
          setSlide('#images')
        } else {
          
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    // component class is compulsory 
    <div id="images" ref={componentRef} className="component bg-white relative z-30 h-screen w-full">
      <h1 className="md:text-5xl text-4xl absolute z-10 md:left-20 left-10 top-16  text-[#DEDEDE] font-bold rubik md:w-[200px] text-left">Students Space Summit 2023</h1>
      <div className="absolute z-20 md:left-40 md:px-0 px-5 top-52 flex justify-center">
        <div className="grid grid-cols-1">
          <img src="./images/image-2.png" alt="" className="m" />
          <img src="./images/demo-speaker.png" alt="" />
        </div>
        <div className="grid ml-11 mb-6 grid-cols-1">
          <img src="./images/wide-image.png" alt="" />
          <div className="md:ml-20 mt-6  grid grid-cols-2">
            <img src="./images/standard-image.png" alt="" />
            <img src="./images/standard-image.png" alt="" />
            <img src="./images/standard-image2.png" alt="" />
          </div>
        </div>
        <div className="hidden ml-4 border-l-2 border-gray-400 pl-4 md:flex flex-row">
          <div className="ml-4 border-r-2 border-gray-400">
            <h2 className="ml-10 text-2xl mb-4 transform rotate-90 origin-left">
              STUDENTS’ SPACE SUMMIT 2022
            </h2>
          </div>
          <div className="ml-8  border-r-2 border-gray-400">
            <h2 className="ml-10 text-2xl mb-4 transform rotate-90 origin-left">
              SPACEUP CUSAT 2022
            </h2>
          </div>
          <div className="ml-4 border-r-2 border-gray-400">
            <h2 className="ml-10 text-2xl transform rotate-90 origin-left">
              STUDENTS’ SPACE SUMMIT 2023
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide5