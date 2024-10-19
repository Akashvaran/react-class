import React, { createContext } from 'react'
const Usercontaxt=createContext();
export default Usercontaxt


export const MainRouding = ({children}) => {
   const name='good morning'

  return (
    <div>
        <Usercontaxt.Provider value={{name}}>
        {children}
        </Usercontaxt.Provider>
    </div>
  )
}
