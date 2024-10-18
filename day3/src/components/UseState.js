// import React, { useState } from 'react'
import './useState.css'

// const UseState = () => {
// const[number,setNumber]=useState([]);
// const[inputval,setInputval]=useState('')

//     function addItem(){
//         setNumber([...number,inputval])
         
//     }

//   return (
//     <>
//         <input type='text' placeholder='enter value' onChange={(e)=>setInputval(e.target.value)} />
//         <button onClick={addItem}>add</button>

//         {
//             number.map((item,value)=>{
//                 return(
//                     <div key={value}>{item}</div>
//                 )
//             })
//         }

//     </>
//   )
// }

// export default UseState




//  const UseState = () => {

// const[input,setInputval]=useState({
//     uname:'',
//     email:''
// })

// function handleChange(e){
//     const{name,value}=e.target;

//     setInputval({
//         ...input,
//         [name]:value
//     })
// }
//   return (
//     <>
//     <input type='text' name='uname' value={input.uname} onChange={handleChange} />
//     <input type='email' name='email' value={input.email} onChange={handleChange} />
//         <div>name {input.uname}</div>
//         <div>name {input.email}</div>
        
//     </>
//   )
// }
// export default UseState


// import React, { useState } from 'react'


// const UseState = () => {
//     const[open,setOpen]=useState(false)


//   return (
//     <div>
//         <div>hi</div>
//         <button onClick={()=>setOpen(true)}>click</button>


//         {open&&(
//             <>
//             <div className='model'>
//             <button onClick={()=>setOpen(false)}>close</button>
//             <div>hi</div>
//             </div>
//             </>
            
//         )}

//     </div>
//   )
// }

// export default UseState


// import React, { useEffect } from 'react'

// const UseState = () => {

//     useEffect(()=>{
//        console.log('hi');
//     },[])

//   return (
//     <div>
//         <p>
//             akas
//         </p>
        
//         </div>
//   )
// }

// export default UseState


// export const Use = () => {
//   return (
//     <div>UseState

//         yiy7gs
//     </div>

//   )
// }

// secont medhod
import React, { Component } from 'react';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
export default Counter;
