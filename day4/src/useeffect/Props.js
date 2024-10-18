import React from 'react'
import { Chiid } from './Chiid'

export const Props = () => {
    const name='akash';
    const mgs='hi'
  return (
    <div>
        <h1>parent</h1>
        <Chiid value={name} msg={mgs}/>
    </div>
  )
}



const Prop = () => {
  return (
    <div>Props</div>
  )
}

export default Prop

export const Pro = () => {
  return (
    <div>Props</div>
  )
}

// export {Pro}