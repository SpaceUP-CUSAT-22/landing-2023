import React from 'react'

const StateContext = React.createContext()

export const StateContextProvider = ({ children }) => {
    const [slide, setSlide] = React.useState(0)

  return (
    <StateContext.Provider value={{
        slide,
        setSlide
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => React.useContext(StateContext)
