import React, { createContext } from 'react'


export const StoreContext = createContext()

export default function StoreContextProvider({children}) {


  return (
    <StoreContext.Provider value={"store working"}>
        {children}
    </StoreContext.Provider>
  )
}
