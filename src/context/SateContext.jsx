import React from 'react'

const StateContext = React.createContext()

export const StateContextProvider = ({ children }) => {
    const [slide, setSlide] = React.useState(0)
    const [black, setBlack] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
  return (
    <StateContext.Provider value={{
        slide,
        black,
        scrolled,
        setScrolled,
        setBlack,
        setSlide
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => React.useContext(StateContext)
