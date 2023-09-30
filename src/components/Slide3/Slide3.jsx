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
                console.log(rect.top, rect.bottom, window.innerHeight)
                if (rect.top < window.innerHeight - 500 && rect.bottom >= 0) {
                    setSlide('#images')
                } else {

                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={componentRef} id="i" className='component bg-white h-screen w-screen relative z-30'>
                  <hr className='absolute border-[1.5px] md:rotate-0 rotate-90 md:h-[700px] h-[200px] md:ml-[1px]  ml-[10px] ' />
                <div className='flex flex-row'>  
                <hr className='absolute h-[200px] w-[2px] bg-black lg:mx-[55px] md:mx-[50px] md:mt-[55px] lg:mt-[80px]'/>
                <p className='absolute ml-[70px] transform rotate-90 lg:mt-[640px] md:mt-[600px] lg:mx-[46px] md:mx-[46px]'>&gt;</p>
                </div>
                <h1 className=' absolute text-black text-5xl -rotate-90 lg:mx-[15px] lg:my-[340px] md:mx-[15px] md:my-[300px]'>1/5</h1>
                <div>
                <hr className='absolute h-[200px] w-[2px] bg-black mx-[75px] md:mx-[50px] lg:mt-[440px] md:mt-[400px]'/>
                <p className=' absolute ml-[69px] transform -rotate-90 lg:mt-[55px] md:mt-[30px] lg:mx-[49px]  md:mx-[46px]'>&gt;</p>
                </div>
                <hr className='absolute border-[1.5px]  md:rotate-0 rotate-90 md:h-[700px] h-[200px]  lg:mx-[110px] md:mx-[100px]' />
               
               
                    <pre><h1 className='absolute text-5xl ml-[180px] md:ml-[130px] font-normal font-satoshi lg:my-[50px] md:my-[30px]'>Tessy Thomas</h1> </pre>

                    <hr className=' border-[1.5px] md:rotate-0 rotate-90 md:w-[700px] lg:w-[1420px] lg:my-[110px] md:my-[70px] md:ml-[100px] lg:ml-[110px] ' />
                    <hr className=' absolute border-[1.5px] md:-rotate-0 -rotate-90 md:w-[620px] lg:w-[767px]  lg:my-[-10px] md:my-[158px] md:ml-[570px] lg:ml-[770px]' />
                    <pre><h1 className=' absolute text-2xl md:ml-[600px] lg:ml-[800px] md:mt-[100px] lg:mt-[-70px] font-normal font-satoshi'>Director General of Aeronautical Sytems</h1> </pre>
                    <div className="absolute  justify-center items-center md:w-[430px] w-[490px] sm:text-base  font-satoshi lg:mx-[170px] md:mx-[120px] lg:my-[-100px] md:my-[70px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className='absolute w-[300px] md:mx-[270px] lg:mx-[470px] md:my-[320px] lg:my-[138px]'>
                    <img src={right_tree} alt='right tree' className='absolute z-10 lg:mt-[10px]'  />
                    <img src={pattern} alt='pattern'/>
                    <div className=' lg:mx-[220px]  md:my-[-120px]  flex justify-center items-center'>
                    <h1 className="lg:text-3xl  japanese">
                    Tessy <br/>Thomas
                    </h1>
                    </div>
                    </div>
                    <hr className='absolute border-[1.5px] md:rotate-0 rotate-90 md:h-[700px] lg:h-[3000px] lg:mt-[-135px] md:mt-[45px]  lg:ml-[770px] md:ml-[570px] ' />
                    <div className=' relative md:w-[310px] lg:w-[305px]  '>
                        <img src={tessy1} alt='tessy1' className='absolute md:ml-[571px]  lg:ml-[770px] md:mt-[134px] lg:mt-[-35px]' />
                        <img src={tessy2} alt='tessy1' className='absolute md:ml-[570px]  lg:ml-[770px] md:mt-[376px] lg:mt-[200px]' />
                    </div>
                    <pre><h1 className=' absolute text-2xl md:mx-[990px] lg:mx-[1190px] md:mt-[200px] lg:mt-[50px] font-normal font-satoshi'>Kerala, India</h1> </pre>
                    <div className=' relative w-[150px]  md:ml-[960px] lg:ml-[1150px] md:mt-[230px] lg:mt-[80px]'>
                        <img src={kerala} alt='kerala' />
                    </div>
                </div>
            
        

    )
}

export default Slide3