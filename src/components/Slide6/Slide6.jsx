import React, { useState, useEffect } from "react";
import logo from '../../assets/spaceup_logo.svg'
import rocket from '../../assets/Rocket.png'
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
        <div ref={componentRef} id="info" className='relative z-30 bg-white max-w-full overflow-hidden'>
            <div className="flex flex-col lg:flex-row gap-x-24 gap-y-6 my-24 mx-8 md:mx-12 lg:mx-20 border-b-2 pb-6">
                <div className='col-span-1 '>
                    <h1 class="text-black japanese flex lg:flex-col gap-x-1 ">
                        <hr className='border-[1.5px] lg:rotate-0 rotate-90 lg:w-[100px] my-5' />
                        <span class="text-3xl">A</span>
                        <span class="text-3xl">B</span>
                        <span class="text-3xl">O</span>
                        <span class="text-3xl">U</span>
                        <span class="text-3xl">T</span>
                    </h1>
                </div>
                <div className="flex flex-1 justify-center items-center text-left lg:pt-5 text-sm sm:text-base font-normal font-satoshi">SpaceUp isn't your typical conference; it's a global phenomenon that empowers you to shape the future of space networking.
                    Since its groundbreaking debut in 2010, SpaceUp has transcended borders, becoming a worldwide sensation. Our mission? To revolutionize networking in the space industry. At SpaceUp, we believe that everyone with a
                    space passion deserves a platform to shine. That's why we let YOU decide the agenda. No pre-set topics or schedules - you're in control! Picture this: Attendees collaboratively build the event in real-time.
                    They propose topics, lead discussions, and form the audience on the spot. There are no spectators, only participants! SpaceUp is the ultimate melting pot, uniting diverse space communities, fostering careers, and sparking fresh ideas for space startups.
                    Join us, and be part of the space revolution!
                </div>
            </div>
            <div className="flex justify-center">
                <div className='relative -z-10 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#E51F24] flex justify-center'>
                    <img
                        src={rocket}
                        alt="Rocket"
                        className=" transform -translate-y-1/3  h-36 sm:h-48 lg:h-80"
                    />
                </div>
            </div>
            <div className="bg-Vector3 bg-cover bg-no-repeat bg-top -mt-36 sm:-mt-64 lg:-mt-96">
                <div className="flex justify-end items-center my-auto flex-col min-h-[50vh] p-10">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-48 -mb-10"
                    />
                    <h1 className="text-white text-xl font-normal japanese">SPACEUP CUSAT</h1>
                </div>
            </div>

        </div>
    )
}

export default Slide6