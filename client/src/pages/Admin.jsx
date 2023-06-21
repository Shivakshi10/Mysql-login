import React, { useEffect, useState } from 'react'
import "./admin.css"
import axios from 'axios';

const Admin = () => {

const [elements,setElements] = useState([]);
const [values,setValues] = useState([]);


  useEffect(() =>{
    const fetchData = async () =>{
      try{
        const res = await axios.get("/admin/");
        const res2 = await axios.get("/admin/sum");
        setElements(res.data);
        setValues(res2.data);
      }catch(err){
        console.log(err);
      }
    };
    fetchData();
  
  },[elements]);




  

  return (
    <div className='adminTable'>
<table className="GeneratedTable">
  <thead>
    <tr>
    <th className='name'>Name/Customer</th>
    { elements?.map((item) => {
      return (item.username!="admin" && <th key={item.uid} className='head'>{item.username}</th>
       )
    }) }
      <th className='head'>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='headers'>Quantity</td>
      {elements?.map((item) => {
      return (item.username!=="admin" && <td >{item.totalQuantity}</td>)
    }) }
      <td>{values[0]?.Q}</td>
    </tr>
    <tr>
      <td className='headers'>Weight</td>
      {elements?.map((item) => {
      return (item.username!=="admin" &&  <td >{item.totalweight}</td>)
    }) }
      <td>{values[0]?.W}</td>
    </tr>
    <tr>
      <td className='headers'>Box Count</td>
      {elements?.map((item) => {
      return (item.username!=="admin" &&  <td>{item.totalbox}</td>)
    }) }
      <td>{values[0]?.B}</td>
    </tr>
  </tbody>
</table>


    </div>
  )
}

export default Admin
