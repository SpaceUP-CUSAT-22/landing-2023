import React from 'react'
import './style.css'
import { useStateContext } from '../../context/SateContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Slide2 = () => {
  const {setSlide} = useStateContext()
  const componentRef = React.useRef(null);
  const [animate, setAnimate] = React.useState(false)
  const [details, setDetails] = React.useState(false)
  const [chosenEvent, setChosenEvent] = React.useState(0)
  const isMobile = window.innerWidth <= 575;
  React.useEffect(() => {
    const handleScroll = () => {
      const element = componentRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight-500 && rect.bottom >= 0) {
          setAnimate(true)
          setSlide('#events')
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

  const events = [
    {
      title: 'Space on Wheels',
      desc: "We are delighted to announce that Space on Wheels, the mobile space exhibition by the Vikram Sarabhai Space Centre (VSSC), will be a captivating highlight of SpaceUp CUSAT 2023. This extraordinary exhibition offers a comprehensive glimpse into the realm of space exploration, featuring an impressive array of models showcasing not only satellites but also rockets and various space-related technologies. From the towering rockets that have propelled India into space to intricate satellite models, Space on Wheels provides an immersive and educational experience for all ages. Attendees will have the unique opportunity to interact with these space artifacts, gaining a deeper understanding of India's remarkable contributions to space science and technology. Join us in exploring the wonders of the cosmos at SpaceUp CUSAT on October 14, 2023, where Space on Wheels promises to inspire and awe.",
      eventNo: 1
    },
    {
      title: 'WESAT',
      desc: "Are you someone interested in creating a satellite by your own skill? Wesat (women-engineered satellite ) Is a satellite exclusively made by women space enthusiasts of the LBS ENGINEERING COLLEGE THIRUVANANTHAPURAM  space club.  The satellite is expected to measure the extent of ultraviolet radiation in space and on Earth's surface. Isn't it crazy that some of our students, like our fellow classmates, manufactured them? The satellite will reportedly measure how far UV radiation reaches both the Earth's surface and space. It is also known that the satellite is anticipated to receive a launch slot by PSLV starting in November if it meets the criteria provided by ISRO. On the day of space-up, they will be delivering an excellent hands-on workshop as part of this intensive program. Their half-hour talk will be excellent for aspiring space enthusiasts what if we get a 2 hour session? So grab this opportunity as soon as possible",
      eventNo: 2
    },
    {
      title: 'Cansat Workshop',
      desc: "Are designing satellites and aerospace engineering your two most favourite topics of study?We are thrilled to introduce the CANSAT workshop by Aero.In, where innovation meets the sky. This immersive program is designed to ignite your passion for space exploration and satellite technology. Join us for an exciting journey that will empower you with hands-on experience in building and launching your very own CanSat,. Led by experts in the field, this workshop promises to expand your horizons and equip you with the skills needed to thrive in the fast-paced aerospace industry. Don't miss this opportunity to soar to new heights – register now and become part of the future of space technology!",
      eventNo: 3
    },
    {
      title: 'Popsicle Bridge Challenge',
      desc: "Join the ultimate Popsicle Bridge Building Challenge! Gather your team and put your engineering skills to the test as you design and construct bridges using popsicle sticks and glue. The thrill lies in building a bridge that can handle the highest weight in our intense load-bearing competition. Show off your creativity, teamwork, and problem-solving abilities in this exciting event. Will your bridge reign supreme? Book your event tickets Today to embark on this engaging and educational adventure, and let's see whose bridge stands tall under the weight of the challenge!",
      eventNo: 4
    },
    {
      title: 'Horizon',
      desc: "Have you heard about a team that secured 19th place in the world in the European rover challenge and 4th in India? It is none other than CUSATS multidisciplinary engineering club HORIZON. The team aims to create a platform for those passionate and industrious engineering students an opportunity to fulfill their dream of entering the space field mainly focused on constructing and manufacturing Mars rovers. Are you someone included in those passionate minds ?? Then  HORIZON is the perfect option for you. Join for a workshop session on the day of SpaceUP. Reserve your SpaceUP tickets as earliest as you can",
      eventNo: 5
    },
    {
      title: 'Astro Challenge',
      desc: "Welcome to the Egg Drop Challenge, where creativity and engineering prowess unite to conquer the strength of gravity and impact! In this thrilling contest, teams will embark on a mission to safely land an egg intact from a dizzying height, emulating the critical principles of soft landings for satellites and spacecraft. Assemble your dream team, put on your thinking caps, and design a protective arrangement that will keep your egg from cracking. Join us in this adventure to learn the art of precision engineering and experience the excitement of space technology firsthand. Book your tickets to crack the code of a successful soft landing and compete for glory!",
      eventNo: 6
    },
  ]
  return (
    <div ref={componentRef} id="events" className={`component md:mt-20 md:h-[100%] md:min-h-screen relative z-30 max-w-full overflow-hidden`}>
      <div className='grid md:grid-cols-5 grid-cols-1'>
        <div className={`${animate && !isMobile ? 'fade' : 'md:hidden' } md:fixed top-0 z-20 col-span-1 h-[100%] bg-black md:px-40 py-10 bg-vector`}>
          <h1 class={`${animate ? 'fade' : 'hidden' } text-white japanese flex justify-center md:flex-col items-center md:mt-[20vh]`}>
            <hr className='border-[1.5px] md:rotate-0 rotate-90 md:w-[100px] w-[50px] my-5' />
            <span class="text-3xl">E</span>
            <span class="text-3xl">V</span>
            <span class="text-3xl">E</span>
            <span class="text-3xl">N</span>
            <span class="text-3xl">T</span>
            <span class="text-3xl">S</span>
            <hr className='border-[1.5px] md:rotate-0 rotate-90 md:w-[100px] w-[50px] my-5' />
          </h1>
        </div>
        {
          details &&
          <div className='md:ml-[420px] relative py-10 z-50 w-screen h-[100%] min-h-screen bg-black'>
            <div className='grid md:grid-cols-5 md:mt-[0vh] grid-cols-1'>
              <div>
                <ArrowBackIcon onClick={() => setDetails(false)} className='text-white ml-10 hover:cursor-pointer !text-4xl my-10' />
                <div className={`col-span-1 hover:cursor-pointer eventBox${events[chosenEvent].eventNo} flex items-center bg-black h-[350px] w-[200px]`}>
                  <h1 className='text-white text-4xl -rotate-90 japanese'>{events[chosenEvent].title}</h1>
                </div>
              </div>
              <div className='px-5 col-span-2 flex flex-col mt-20'>
                <h1 className='text-3xl text-white quicksand text-left md:text-4xl my-7'>{events[chosenEvent].title}</h1>
                <p className='text-white text-left quicksand'>{events[chosenEvent].desc}</p>
              </div>
            </div> 
          </div>
        }
        {!details && <div className='md:ml-[420px] bg-black w-screen h-[100%]'>
          <div className='hidden md:flex max-w-full overflow-x-auto overflow-y-hidden md:flex-wrap'>
            <div onClick={() => {
              setDetails(true)
              setChosenEvent(0)
            }} className={`hover:cursor-pointer eventBox1 flex items-center ${animate ? 'slideDown' : 'scale-y-0'} bg-black h-[250px] w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>SPACE ON WHEELS</h1>
            </div>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
            <div onClick={() => {
              setDetails(true)
              setChosenEvent(1)
            }} className={`hover:cursor-pointer eventBox2 flex items-center ${animate ? 'slideDown' : 'scale-y-0'} bg-black h-[250px] w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>WESAT</h1>
            </div>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
          </div>
          <div className='hidden md:flex max-w-full overflow-x-auto overflow-y-hidden md:flex-wrap'>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
            <div onClick={() => {
              setDetails(true)
              setChosenEvent(2)
            }} className={`hover:cursor-pointer eventBox3 flex items-center ${animate ? 'slideUp' : 'scale-y-0'} bg-black h-[250px] w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>CANSAT WORKSHOP</h1>
            </div>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
            <div onClick={() => {
              setDetails(true)
              setChosenEvent(3)
            }} className={`hover:cursor-pointer eventBox4 flex items-center ${animate ? 'slideUp' : 'scale-y-0'} bg-black h-[250px] w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>POPSICLE BRIDGE CHALLENGE</h1>
            </div>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
            <div onClick={() => {
              setDetails(true)
              setChosenEvent(4)
            }} className={`hover:cursor-pointer eventBox5 flex items-center ${animate ? 'slideUp' : 'scale-y-0'} bg-black h-[250px] w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>HORIZON</h1>
            </div>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
          </div>
          <div className='hidden md:flex max-w-full overflow-x-auto overflow-y-hidden md:flex-wrap'>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
            <div onClick={() => {
              setDetails(true)
              setChosenEvent(5)
            }} className={`hover:cursor-pointer eventBox6 flex items-center ${animate ? 'slideDown' : 'scale-y-0'} bg-black h-[250px] w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>ASTROCHACK</h1>
            </div>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
            <div className='bg-black border-l-[0.3px] border-r-[0.3px] border-[#4d4d4d] h-[250px] w-[150px]'>
              <h1 className='text-black text-6xl -rotate-90 japanese'>1940</h1>
            </div>
          </div>
          <div className='flex max-w-full overflow-x-auto overflow-y-hidden md:flex-wrap'>
            <div onClick={() => {
              setDetails(true)
              setChosenEvent(0)
            }} className={`hover:cursor-pointer eventBox1 flex items-center ${animate ? 'slideDown' : 'scale-y-0'} bg-black h-[250px] min-w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>SPACE ON WHEELS</h1>
            </div>
            <div onClick={() => {
              setDetails(true)
              setChosenEvent(1)
            }} className={`hover:cursor-pointer eventBox2 flex items-center ${animate ? 'slideDown' : 'scale-y-0'} bg-black h-[250px] min-w-[150px] pl-5`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>WESAT</h1>
            </div>
            <div onClick={() => {
              setDetails(true)
              setChosenEvent(2)
            }} className={`hover:cursor-pointer eventBox3 flex items-center ${animate ? 'slideUp' : 'scale-y-0'} bg-black h-[250px] min-w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>CANSAT WORKSHOP</h1>
            </div>
            <div onClick={() => {
              setDetails(true)
              setChosenEvent(3)
            }} className={`hover:cursor-pointer eventBox4 flex items-center ${animate ? 'slideUp' : 'scale-y-0'} bg-black h-[250px] min-w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>POPSICLE BRIDGE CHALLENGE</h1>
            </div>
            <div onClick={() => {
              setDetails(true)
              setChosenEvent(4)
            }} className={`hover:cursor-pointer eventBox5 flex items-center ${animate ? 'slideUp' : 'scale-y-0'} bg-black h-[250px] min-w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>HORIZON</h1>
            </div>
            <div onClick={() => {
              setDetails(true)
              setChosenEvent(5)
            }} className={`hover:cursor-pointer eventBox6 flex items-center ${animate ? 'slideDown' : 'scale-y-0'} bg-black h-[250px] min-w-[150px]`}>
              <h1 className='text-white text-3xl -rotate-90 japanese'>ASTROCHACK</h1>
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Slide2