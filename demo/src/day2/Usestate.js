import React, { useState } from 'react'

// export const Usestate = () => {
//     let value=0

//     const incerment=()=>{
//         value+=1
//         console.log("incermet" +value);

//     }
//     const decrement=()=>{
//         value-=1
//         console.log("decriment" +value);
//     }

//   return (
//     <>
//         {value}

//         <button onClick={()=>incerment()}>incer</button>
//         <button onClick={()=>decrement()}> dec</button>

//     </>
//   )
// }




// export const Usestate = () => {
//     const [incer, setIncer] = useState({})

//     const incerment=()=>{
//         setIncer(incer+1)
//     }
//     const decrement=()=>{
//         setIncer(incer-1)
//     }

//     return (
//         <div>
//             {incer}
//             <button onClick={()=>incerment()}>incer</button>
//             <button onClick={decrement}>dec</button>
//         </div>
//     )
// }




// export const Usestate=()=>{

//   const [user, setUser] = useState({
//     name: '',
//     age: '',
//   });
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   return (
//     <div>
//       <input type="text"
//         name="name"
//         value={user.name}
//         onChange={handleInputChange}
//         placeholder="Enter name"
//       />
//       <input type="text"
//         name="age"
//         value={user.age}
//         onChange={handleInputChange}
//         placeholder="Enter age"
//       />
//       <div> 
//         <h3>User Details</h3>
//         <p>Name: {user.name}</p>
//         <p>Age: {user.age}</p>
//         <p>Email: {user.email}</p>
//       </div>
//     </div>
//   );
// }




// Main Component
export const Usestate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={styles.container}>
      <h1>Simple Modal Example</h1>
      <button onClick={openModal}>Open Modal 1</button>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>Modal Title</h2>
            <p>This is a simple modal window.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};


const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
};
