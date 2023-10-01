import React from 'react'

const Booked = () => {
    const [code, setCode] = React.useState()
    React.useEffect(() => {
        setCode(localStorage.getItem('code'))
    }, [])
  return (
    <div className='ml-10 bg-white h-screen w-screen'>
        <div className='px-10 py-10'>
            <a href="/">
                <button className='bg-[#E51F24] text-white px-5 py-3 rounded-[10px] font-semibold'>Back</button>
            </a>
        </div>  
        <div className='flex flex-col justify-center'>
            <h1 className='text-center text-black text-6xl my-10'>You've successfully booked a ticket!</h1>
            <p className='text-center text-black text-5xl'><span className='text-[#E51F24] font-bold'>{code}</span> is your code, keep it safely!</p>
        </div>
    </div>
  )
}

export default Booked