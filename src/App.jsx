import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Sidebar from "./components/Sidebar"
import { useStateContext } from "./context/SateContext"
import Booked from "./pages/Booked"

function App() {
  const {slide, setBlack, black} = useStateContext()
  React.useEffect(() => {
    console.log(slide)
    if(slide == '#events' || slide == '#info' || slide == '#plan'){
      setBlack(true)
    }else{
      setBlack(false)
    }

  }, [slide])
  return (
    <>
      <div className="w-screen h-screen bg-black absolute z-50 animate-curtain animate-curtain ease-in-out"></div>
      <div className="grid grid-cols-6">
        <div className={`${black ? 'bg-[#080605]' : 'bg-white'} transition-background-color duration-500 ease-in-out fixed z-40 col-span-1 h-screen`}>
          <Sidebar />
        </div>
        <div className="col-span-6 md:mt-0 mt-20 md:ml-20">
          <BrowserRouter>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Booked />} path="/booked" />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
