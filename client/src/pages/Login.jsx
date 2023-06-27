import React, { useContext, useState } from 'react'
import axios from 'axios';
import "./login.css"
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [inputs,setInputs] = useState({
        ID:"",
        password:"",
      })
    const [err,setErr] = useState();
    const {login} =useContext(AuthContext);
const navigate = useNavigate();

    const handleChange = (e) =>{
        setInputs(prev =>({...prev,[e.target.name]:e.target.value}));
          }
          

          const handleSubmit = async e =>{
            e.preventDefault();
            try{
               //const res= await axios.post("auth/login",inputs);
          // console.log(res.data);
          await login(inputs);
          navigate("/page1");
            }catch(err){
             setErr(err.response.data);
            }
            
              }      
 

  return (
    <div className='container'>
        <form className='login'>
            <div className='elements'>
   <label htmlFor="ID">ID</label>
               <input type='text' name='ID' id='ID'  onChange={handleChange}/>
            </div>
            <div className='elements'>
                  <label htmlFor="password">Password</label>
            <input type='password' name='password' id='password'  onChange={handleChange}/>
                </div>
            <button className="buttonLogin" onClick={handleSubmit}>Sign In</button>
        </form>
      
    </div>
    
  )
}

export default Login
