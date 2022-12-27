import Header from "./Header";
import AddProduct from "./AddProduct";
import { useState } from "react";


function UpdateProduct()
{
    
    const [parentname, setParentName]= useState()

    return(
        <div>
            <Header />
            <h1>parent </h1>
            <label>Enter your parent  name: </label><br /><br />
            <input type="text" value={parentname} onChange={((e)=>setParentName(e.target.value))} placeholder='name' className='form-control' /><br /><br />
            



            <AddProduct data={parentname} />

        </div>
    )
}
export default UpdateProduct;