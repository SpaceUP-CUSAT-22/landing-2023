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
    <div id="plan" ref={componentRef} className='bg-black h-screen w-screen relative z-30'>

    </div>
  )
}

export default Slide4