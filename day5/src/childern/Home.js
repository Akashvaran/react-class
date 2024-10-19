import React, { useContext } from 'react'
import Usercontaxt from './MainRouding'

export const Home = () => {
const {name}=useContext(Usercontaxt)
  return (
    <div>Home  {name}</div>
  )
}
