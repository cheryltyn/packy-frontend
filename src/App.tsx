import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePackage from './pages/CreatePackage';
import NavBar from './pages/NavBar';
import User from './pages/User';
import EditUser from './pages/EditUser';
import PackagePage from './pages/PackagePage';
import EditPackage from './pages/EditPackage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { getUser } from "./utils/user";
import { useState } from 'react'

function App() {

  // const [user, setUser] = useState();
  // setUser(getUser())
  // console.log(getUser())

  return (
    <Router>
      <div>
        <NavBar /> 
        <Routes>
          <Route path="/create" element={<CreatePackage />} />
          <Route path="/user" element={<User />} />
          <Route path="/edit-user" element={<EditUser />} />
          <Route path="/" element={<PackagePage />} />
          <Route path="/package" element={<PackagePage />} />   
          <Route path="/signup" element={<SignUp />} />   
          <Route path="/login" element={<Login />} />   
          <Route path="/editpackage/:packageId" element={<EditPackage />} />     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
