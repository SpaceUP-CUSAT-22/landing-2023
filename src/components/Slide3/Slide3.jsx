import React, { useEffect } from 'react'
import { useStateContext } from "../../context/SateContext";
import tessy1 from '../../assets/photo1.png'
import tessy2 from '../../assets/photo2.png'
import kerala from '../../assets/kerala.png'
import right_tree from '../../assets/right_tree.png'
import pattern from '../../assets/Pattern 01.png'

const Slide3 = () => {

    const { setSlide } = useStateContext()
    const componentRef = React.useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const element = componentRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight - 500 && rect.bottom >= 0) {
                    setSlide('#speakers')
                } else {

                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={componentRef} id="speakers" className='component bg-white md:h-screen h-[100%] w-full relative z-30 py-10 px-5'>
            {/* <hr className='absolute border-[1.5px] md:rotate-0 rotate-90 md:h-[700px] h-[200px] md:ml-[1px] ml-[10px] ' /> */}
            <div className='grid md:grid-cols-6 grid-cols-5'>  
                <div className='md:col-span-1 hidden md:flex flex-col items-center'>
                    <p className='transform -rotate-90 text-5xl -ml-3'>&gt;</p>
                    <hr className='h-full w-[2px] bg-black'/>
                    <h1 className=' text-black text-5xl my-5'>1/5</h1>
                    <hr className='h-full w-[2px] bg-black'/>
                    <p className='transform rotate-90 text-5xl ml-3'>&gt;</p>
                </div>
                <div className='col-span-5'>
                    <div className='grid grid-cols-1'>
                        <pre><h1 className='quicksand md:text-5xl text-3xl text-center md:text-left font-normal'>Tessy Thomas</h1> </pre>
                        <div className='grid md:grid-cols-2 grid-cols-1'>
                            <div className='my-10 grid grid-rows-2'>
                                <p className="md:row-span-1 row-span-2 quicksand md:text-left text-center pr-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className='md:block hidden absolute bottom-28 right-[45%]'>
                                    <div className=''>
                                        <img src={right_tree} alt='right tree' className='top-40 relative w-[300px]'  />
                                        <img src={pattern} alt='pattern' className='w-[300px] h-[250px]'/>
                                    </div>
                                    <div className='-mt-20 flex justify-end items-center'>
                                        <h1 className="lg:text-3xl  japanese">
                                        Tessy <br/>Thomas
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-1'>
                                <h1 className='quicksand text-2xl md:text-left text-center'>Director General of Aeronautical Sytems</h1>
                                <div className='my-10 grid md:grid-cols-2 grid-cols-1'>
                                    <div className='grid md:grid-rows-2'>
                                        <img src={tessy2} alt='tessy1' className='md:w-[85%] h-[100%]' />
                                        <img src={tessy1} alt='tessy1' className='md:w-[85%] h-[100%]' />
                                    </div>
                                    <div className='md:block hidden'>
                                        <pre><h1 className='text-xl ml-5 my-5 quicksand'>Kerala, India</h1> </pre>
                                        <img src={kerala} alt='kerala' className='h-[350px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <hr className='absolute border-[1.5px]  md:rotate-0 rotate-90 md:h-[700px] h-[200px]  lg:mx-[110px] md:mx-[100px]' />
            <hr className=' border-[1.5px] md:rotate-0 rotate-90 md:w-[700px] lg:w-[1420px] lg:my-[110px] md:my-[70px] md:ml-[100px] lg:ml-[110px] ' />
            <hr className=' absolute border-[1.5px] md:-rotate-0 -rotate-90 md:w-[620px] lg:w-[767px]  lg:my-[-10px] md:my-[158px] md:ml-[570px] lg:ml-[770px]' />
            <hr className='absolute border-[1.5px] md:rotate-0 rotate-90 md:h-[700px] lg:h-[3000px] lg:mt-[-135px] md:mt-[45px]  lg:ml-[770px] md:ml-[570px] ' />  */}
        </div>
    )
}

export default Slide3