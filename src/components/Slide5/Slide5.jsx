import React from 'react'
import { useStateContext } from '../../context/SateContext';
import '../Slide2/style.css'

const Slide5 = () => {
  const componentRef = React.useRef(null);
  const {setSlide} = useStateContext()
  const [animate, setAnimate] = React.useState(false)
  React.useEffect(() => {
    const handleScroll = () => {
      const element = componentRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight-500 && rect.bottom >= 0) {
          setSlide('#images')
          setAnimate(true)
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
    // component class is compulsory 
    <div id="images" ref={componentRef} className="component bg-white relative z-30 md:h-screen h-full w-full">
      <h1 className="md:text-5xl text-4xl absolute z-10 md:left-20 left-10 top-16  text-[#DEDEDE] font-bold rubik md:w-[200px] text-left">Students Space Summit 2023</h1>
      <div className="md:absolute z-20 md:left-40 md:px-0 px-5 top-52 md:flex justify-center">
        <div className="grid grid-cols-1 md:ml-0 ml-10">
          <img src="./images/image-2.png" alt="" className={`${animate ? 'fade' : 'hidden'} md:my-0 my-10`} />
          <img src="./images/demo-speaker.png" alt="" className={`${animate ? 'fadeSlow' : 'hidden'}`} />
        </div>
        <div className="grid md:ml-11 md:my-0 mt-10 grid-cols-1">
          <img src="./images/wide-image.png" alt="" className={`${animate ? 'slideDown' : 'hidden'}`} />
          <div className={`${animate ? 'slideUp' : 'hidden'} md:ml-20 mt-6 grid grid-cols-2`}>
            <img src="./images/standard-image.png" alt="" />
            <img src="./images/standard-image.png" alt="" />
            <img src="./images/standard-image2.png" alt="" />
            <img src="./images/standard-image2.png" alt="" />
          </div>
        </div>
        <div className="hidden ml-4 border-l-2 border-gray-400 pl-4 md:flex flex-row">
          <div className="ml-4 border-r-2 border-gray-400">
            <h2 className="ml-10 text-lg mb-4 transform rotate-90 origin-left">
              STUDENTS’ SPACE SUMMIT 2022
            </h2>
          </div>
          <div className="ml-8  border-r-2 border-gray-400">
            <h2 className="ml-10 text-lg mb-4 transform rotate-90 origin-left">
              SPACEUP CUSAT 2022
            </h2>
          </div>
          <div className="ml-4 border-r-2 border-gray-400">
            <h2 className="ml-10 text-lg transform rotate-90 origin-left">
              STUDENTS’ SPACE SUMMIT 2023
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide5