
import { useState } from "react";

// function AddProduct(props)
const AddProduct = ({data})=>
{
    const [name, setMessage] = useState(data);
    
    
    
    return(
        <div>
           
            
            <div class="col-md-6 offset-sm-3">
           
            <label>Enter your child  name: {data}</label><br /><br />
            <input type="text" placeholder='name' value={data} onChange={(e)=>setMessage(e.target.value)} className='form-control' /><br /><br />
           
            </div>
            
        </div>
    )
}


// -------- test sample -----

// import React, { useState } from 'react';
  
// const AddProduct = () => {
//   let [Fullname, setFullname] = useState({
//     fname: '',
//     lname: ''
//   })
  
//   const handleChange = (event) => {
//     let value = event.target.value;
//     let name = event.target.name;
  
//     setFullname((prevalue) => {
//       return {
//         ...prevalue,   // Spread Operator               
//         [name]: value
//       }
//     })
//   }
  
//   return (
//     <>
//       <form>
//         <div>
//           <h1>Hello <span style={{ color: 'red' }}>{Fullname.fname}</span>
//             <span style={{ color: 'green' }}>{Fullname.lname}</span></h1>
//           <input type='text' placeholder='Enter Your FirstName'
//             onChange={handleChange} name='fname' />
//           <input type='text' placeholder='Enter Your LastName'
//             onChange={handleChange} name='lname' />
//         </div>
//       </form>
//     </>
//   )
// }
export default AddProduct; 