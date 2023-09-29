import React, { useState, useEffect } from "react";
import logo from '../../assets/spaceup_logo.svg'
import { useStateContext } from "../../context/SateContext";



const Slide6 = () => {
    const { setSlide } = useStateContext()
    const componentRef = React.useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const element = componentRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                console.log(rect.top, rect.bottom, window.innerHeight)
                if (rect.top < window.innerHeight - 500 && rect.bottom >= 0) {
                    setSlide('#info')
                } else {

                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div ref={componentRef} id="info" className='relative z-30 h-[2000px] bg-black max-w-full overflow-hidden'>
            dhanush
            <div className="absolute bottom-0 left-0 w-full flex justify-center items-center flex-col">
                <img
                    src={logo}
                    alt="logo"
                    className="h-32"
                />
                <h1 className="text-white text-3xl japanese">spaceup</h1>

            </div>
        </div>
    )
}

export default Slide6