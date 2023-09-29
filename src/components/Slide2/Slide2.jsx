import React from 'react'
import './style.css'

const Slide2 = () => {
  return (
    <div id="events" className='mt-20 h-[100%] absolute z-30'>
      <div className='grid grid-cols-5'>
        <div className='col-span-1 h-[100%] bg-black px-40 py-10'>
          <h1 class="text-white japanese flex flex-col items-center mt-[20vh]">
            <hr className='border-[1.5px] w-[100px] my-5' />
            <span class="text-3xl">E</span>
            <span class="text-3xl">V</span>
            <span class="text-3xl">E</span>
            <span class="text-3xl">N</span>
            <span class="text-3xl">T</span>
            <span class="text-3xl">S</span>
            <hr className='border-[1.5px] w-[100px] my-5' />
          </h1>
        </div>
        <div className='bg-stone-950 w-screen h-[100%]'>
          <div className='flex flex-wrap'>
            <div className='eventBox slideDown bg-black h-[250px] w-[150px]'></div>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2022</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px]'></div>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2022</h1>
            </div>
            <div className='eventBox slideDown bg-black h-[250px] w-[150px]'></div>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2023</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px]'></div>
          </div>
          <div className='flex flex-wrap'>
            <div className='bg-black h-[250px] w-[150px]'></div>
            <div className='eventBox bg-black h-[250px] w-[150px]'></div>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2022</h1>
            </div>
            <div className='eventBox bg-black h-[250px] w-[150px]'></div>
            <div className='bg-black h-[250px] w-[150px]'></div>
            <div className='eventBox bg-black h-[250px] w-[150px]'></div>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2023</h1>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2019</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px]'></div>
            <div className='eventBox slideDown bg-black h-[250px] w-[150px]'></div>
            <div className='bg-black h-[250px] w-[150px]'></div>
            <div className='bg-black h-[250px] w-[150px] flex items-center border-l-[1px] border-r-[1.5px] border-[#4d4d4d]'>
              <h1 className='text-[#828282] text-6xl -rotate-90 japanese'>2023</h1>
            </div>
            <div className='bg-black h-[250px] w-[150px]'></div>
            <div className='eventBox slideDown bg-black h-[250px] w-[150px]'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide2