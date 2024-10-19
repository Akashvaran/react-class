import React, { useContext } from 'react'
import { Child4 } from './Child4'
import Context from './Context'

export const Child3 = () => {
const{value}=useContext(Context)
  return (
    <div>Child3
        <h1>{value}</h1>
        <Child4/>
    </div>
  )
}
