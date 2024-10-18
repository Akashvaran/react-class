// import React, { useState,useEffect } from 'react'

// export const UseEffect = () => {
// const[count,setCount]=useState(0)
// const[message,setMessage]=useState('')

// useEffect(()=>{
//     console.log("useEffect is run")
//     if(count>10){
//        setMessage('value is define') 
//     }
// },[count])

//   return (
//     <>
//         <div>
//             {message}
//             <h1>hello {count}</h1>
            
//             <button onClick={()=>setCount(100)}>click</button>
//         </div>
    
//     </>
//   )
// }

// import React, { useEffect, useState } from 'react'

// export const UseEffect = () => {
// const[data,setData]=useState([])

// useEffect(()=>{
//     const apicall=async()=>{
//         const responce=await fetch('https://fakestoreapi.com/products');
//         const values=await responce.json()
//         setData(values)
//     }
// apicall()
// },[])
//   return (
//     <>
//        <h1>get the data</h1>

//         <div>
//             {data.map((item)=>(
//                 <ul key={item.id}>{item.title}</ul>
//             )

//             )}
             
//         </div>

//     </>
//   )
// }


// import React, { useEffect, useState } from 'react'

// export const UseEffect = () => {
// const[data,setData]=useState([])

// const apicall=async()=>{
//     const responce=await fetch('https://fakestoreapi.com/products');
//     const values=await responce.json()
//     setData(values)
// }
// useEffect(()=>{
// apicall()
// },[])
//   return (
//     <>
//        <h1>get the data</h1>

//         <div>
//             {data.map((item)=>(
//                 <ul key={item.id}>{item.title}</ul>
//             )

//             )}
             
//         </div>

//     </>
//   )
// }

//class components

// import React, { Component } from 'react'

// export default class UseEffect extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             count:0
//         }
//     }
//   render() {
//     return (
//       <div>
//             {this.state.count}
//             <button onClick={()=>this.setState({count:this.state.count+1})}>click</button>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'
// export default class UseEffect extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             count:0
//         }
//         this.increment=this.increment.bind(this)
//     }
//     increment(){
//         this.setState({count:this.state.count+1})
//     }
//   render() {
//     return (
//       <div>
//             {this.state.count}
//             <button onClick={this.increment}>click</button>
//       </div>
//     )
//   }
// }
