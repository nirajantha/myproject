import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [address,setAddress] = useState('');
const [number,setNumber] = useState('');
const [landmark,setLandmark] = useState('');
const [resId,setResId] = useState('');
const [total,setTotal] = useState('');


 async function handleSubmit(e){
  e.preventDefault();
  try {
    let data = {
      customerName:name,
      customerEmail:email,
      customerAddress:address,
      customerNumber:number,
      nearestLandmark:landmark,
      restaurantId:resId,
      total:total
    }
     await axios.post("")
    
    
  } catch (err) {
    console.log("error while submitting data",err)
    
  }

}


  return (
    <div className="App">
    <form className='request-form' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Customer Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={(e)=>setName(e.target.value)}/>
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Customer Email</label>
    <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)}/>
  </div>

  <div className="mb-3">
    <label htmlFor="address" className="form-label">Customer Address</label>
    <input type="text" className="form-control" id="address" onChange={(e)=>setAddress(e.target.value)}/>
  </div>

  <div className="mb-3">
    <label htmlFor="number" className="form-label">Customer Number</label>
    <input type="number" className="form-control" id="number" onChange={(e)=>setNumber(e.target.value)}/>
  </div>

   <div className="mb-3">
    <label htmlFor="landmark" className="form-label">Nearest Landmark</label>
    <input type="text" className="form-control" id="landmark" onChange={(e)=>setLandmark(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="id" className="form-label">Restaurant Id</label>
    <input type="number" className="form-control" id="id" onChange={(e)=>setResId(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="total" className="form-label">Total</label>
    <input type="number" className="form-control" id="total" onChange={(e)=>setTotal(e.target.value)}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  
    </div>
  );
}

export default App;
