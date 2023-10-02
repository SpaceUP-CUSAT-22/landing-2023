import React from 'react'
import { useStateContext } from '../../context/SateContext';
import '../Slide2/style.css'
import gallery1 from '../../assets/gallery1.jpeg'
import gallery2 from '../../assets/gallery2.jpeg'
import gallery3 from '../../assets/gallery3.jpeg'
import gallery4 from '../../assets/gallery4.jpg'
import gallery5 from '../../assets/gallery5.jpg'
import gallery6 from '../../assets/gallery6.jpeg'

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
    <div id="images" ref={componentRef} className="component bg-white relative z-30 py-10 md:min-h-[1000px] md:h-[1000px] pb-20 h-[2400px] w-full">
      <h1 className="text-5xl ml-20 text-4xl z-10 text-[#DEDEDE] font-bold rubik md:w-[200px] text-left">GALLERY</h1>
      <div className="md:ml-20 md:mt-20 mt-10 relative z-20 md:px-0 px-5 md:flex justify-center">
        <div className="grid grid-cols-1 md:ml-0">
          <img src={gallery1} alt="" className={`${animate ? 'fade' : 'hidden'} md:my-0 my-10`} />
          <img src={gallery2} alt="" className={`${animate ? 'fadeSlow' : 'hidden'}`} />
        </div>
        <div className="grid md:ml-11 md:my-0 mt-10 grid-cols-1">
          <img src={gallery3} alt="" className={`${animate ? 'slideDown' : 'hidden'} w-[250px]`} />
          <div className={`${animate ? 'slideUp' : 'hidden'} md:ml-20 mt-6 grid md:grid-cols-2 grid-cols-1`}>
            <img src={gallery4} className='md:mb-0 mb-5' alt="" />
            <img src={gallery2} className='md:mb-0 mb-5' alt="" />
            <img src={gallery6} className='md:mb-0 mb-5' alt="" />
            <img src={gallery5} className='md:mb-0 mb-5' alt="" />
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