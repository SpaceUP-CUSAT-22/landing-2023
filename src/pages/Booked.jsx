import React from 'react'
import ticket from '../assets/ticket.png'

const Booked = () => {
    const [code, setCode] = React.useState()
    const [name, setName] = React.useState('')
    React.useEffect(() => {
        setCode(localStorage.getItem('code'))
        setName(localStorage.getItem('name'))
    }, [])
  return (
    <div className='ml-5 bg-white h-full w-screen'>
        <div className='px-10 py-10'>
            <a href="/">
                <button className='bg-[#E51F24] text-white px-5 py-3 rounded-[10px] font-semibold'>Back</button>
            </a>
        </div>  
            <h1 className='text-center font-semibold my-10 md:text-4xl text-3xl'>Keep a screenshot of this ticket and keet it safely!</h1>
        <div className='flex justify-center'>
            <img src={ticket} className='w-[500px]' />
            <p className='absolute md:top-[690px] top-[690px] font-bold text-4xl'>{name}</p>
            <p className='absolute md:top-[890px] top-[855px] md:left-[870px] left-[220px] text-red-500 font-bold text-4xl'>{code}</p>
        </div>
    </div>
  )
}

export default Booked