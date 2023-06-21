
import { 
  BrowserRouter,
  RouterProvider,
 
  Outlet,
  Router,
  Route,
  Routes,
} from "react-router-dom"
import Admin from './pages/Admin';
import Customer from './pages/Customer';
import Login from './pages/Login';
import Home from "./pages/Home";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";


function App() {

  const {currentUser} = useContext(AuthContext);
  return (
   <BrowserRouter>
    <Routes>
     <Route path="/login" element={<Login />} >

     </Route>
     <Route path="/" element={currentUser?<Home />:<Login />} >

</Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
