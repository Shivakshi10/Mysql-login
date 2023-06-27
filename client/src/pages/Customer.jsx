import React, { useContext, useState } from 'react'
import "./customer.css";
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Customer = () => {

  const {currentUser} = useContext(AuthContext);
  const [inputs,setInputs] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setInputs(prev =>({...prev,[e.target.name]:e.target.value}));
      }

      console.log(inputs);

const handleSubmit = async(e) =>{
  e.preventDefault();
await axios.post("/customer/",{
  inputs,
  uid:currentUser.uid,
});
setInputs({});
navigate("/");
}


  return (
    <div className='Customer'>
      <form className='customerDetails'>
        <div className='elements'>
        <label htmlFor="orderDate">Order Date</label>
        <input type="date" id="orderDate" name="orderDate" onChange={handleChange}></input>
        </div>
        <div className='elements'>
        <label htmlFor="company">Company</label>
        <input type="text" name="company" className='company' pattern="([^\s][A-z0-9À-ž\s]+)" onChange={handleChange}/>
        </div>
        <div className='elements'>
        <label htmlFor="owner">Owner</label>
        <input type='text' id='owner' name='owner' pattern="([^\s][A-z0-9À-ž\s]+)" onChange={handleChange}/>
        </div>
        <div className='elements'>
        <label htmlFor="item">Item</label>
        <input type='text' name='item' id='item' onChange={handleChange}/>
        </div>
        <div className='elements'>
        <label htmlFor="quantity">Quantity</label>
        <input type='number' id='quantity' name='quantity' onChange={handleChange}/>
        </div>
        <div className='elements'>
        <label htmlFor="weight">Weight</label>
        <input type="number" id='weight' name='weight' step="0.01" onChange={handleChange}></input>
        </div>
        <div className='elements'>
        <label htmlFor="shipment">Request for Shipment</label>
        <input type='text' name='shipment' id='shipment' onChange={handleChange}/>
        </div>
        <div className='elements'>
        <label htmlFor="trackingID">Tracking ID</label>
        <input type='text' name='trackingID' id='trackingID' onChange={handleChange}/>
        </div>
        <div className='elements'>
        <label htmlFor="size">Shipment Size</label>
        <input type='text' id='size' name='size'  pattern="[0-9]x[0-9]x[0-9]" onChange={handleChange}/>
        </div>
        <div className='elements'>
        <label htmlFor="boxCount">Box Count</label>
        <input type='number' id='boxCount' name='boxCount' onChange={handleChange}/>
        </div>
        <div className='elements'>
        <label htmlFor="specf">Specification</label>
        <input type='text' name='specification' id='specf' onChange={handleChange}/>
        </div>
        <div className='elements'>
        <label htmlFor="checklistQ">Checklist Quantity</label>
        <input type='text' name='checklistQ' id='checklistQ' onChange={handleChange}/>
        </div>
        <button className='buttoncustomer' onClick={handleSubmit}>SUBMIT</button>
      </form>
    </div>
  )
}

export default Customer
