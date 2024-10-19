import React, { useContext } from 'react'
import Context from './Context'

export const Child5 = () => {
    const {value}=useContext(Context)
  return (
    <div>Child5
        <h1>{value}</h1>
        
    </div>
  )
}
