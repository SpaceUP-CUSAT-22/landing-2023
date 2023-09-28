import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Sidebar from "./components/Sidebar"
import { useStateContext } from "./context/SateContext"

function App() {
  const {slide} = useStateContext()
  return (
    <>
      <div className="w-screen h-screen bg-black absolute z-50 animate-curtain animate-curtain ease-in-out"></div>
      <div className="grid grid-cols-6">
        <div className={`${slide == '#events' ? 'bg-[#080605]' : 'bg-white'} fixed z-40 col-span-1 h-screen`}>
          <Sidebar />
        </div>
        <div className="col-span-5 md:mt-0 mt-20">
          <BrowserRouter>
            <Routes>
              <Route element={<Home />} path="/" />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
