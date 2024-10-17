import React from 'react'

const Style = () => {
const textColor={
    backgroundColor:'black',
    color:'white'
}

    return (

        <>
            <div>
                <Header/>
                <p style={textColor}>hello</p>
            <Fooder/>
            </div>
        </>

    )
}

export default Style



const Header = () => {
  return (
    <div>header</div>
  )
}



const Fooder = () => {
  return (
    <div>Fooder</div>
  )
}



