import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CreatePackage from './pages/CreatePackage';
import NavBar from './pages/NavBar';
import User from './pages/User';
import EditUser from './pages/EditUser';
import PackagePage from './pages/PackagePage';
import EditPackage from './pages/EditPackage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { getUser } from "./utils/user";
import { useState, useEffect, createContext} from 'react'

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchedUser = getUser();
    setUser(fetchedUser);
  }, []);

  function handleLogOut() {
    localStorage.removeItem("token");
    setUser(null);
  }

  console.log(user)
  
  return (
    <UserContext.Provider value={user}>
      <Router>
        <div>
          <NavBar onLogOut={handleLogOut} /> 
          <Routes>
            {user && (
              <>
                <Route path="/create" element={<CreatePackage />} />
                <Route path="/user" element={<User />} />
                <Route path="/edit-user" element={<EditUser />} />
                <Route path="/package" element={<PackagePage />} /> 
                <Route path="/editpackage/:packageId" element={<EditPackage />} />   
              </>
            )}
            <Route path="/signup" element={<SignUp />} />   
            <Route path="/login" element={<Login />} />   
            <Route path="/" element={<Navigate to={user ? '/package' : '/login'} />} />   
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
