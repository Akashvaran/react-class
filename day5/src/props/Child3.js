import React from 'react'
import { Child4 } from './Child4'

export const Child3 = ({value}) => {
  return (
    <div>Child3
        <h1>{value}</h1>
        <Child4 value={value}/>
    </div>
  )
}
