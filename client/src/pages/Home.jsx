import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext';
import Admin from './Admin';
import Customer from './Customer';

const Home = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div>
      { currentUser.isAdmin==1 ?<Admin />: <Customer />}
     
    </div>
  )
}

export default Home
