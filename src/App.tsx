import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CreatePackage from './pages/CreatePackage';
import NavBar from './pages/NavBar';
import User from './pages/User';
import PackagePage from './pages/PackagePage';
import EditPackage from './pages/EditPackage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { getUser } from "./utils/user"; 
import { getUserData } from './types/types.ts'; 
import { useState, useEffect, createContext} from 'react'

export const UserContext = createContext<getUserData | null>(null);

function App() {
  const [user, setUser] = useState<getUserData | null>(null); 

  useEffect(() => {
    const fetchedUser = getUser();
    setUser(fetchedUser);
  }, []);
  const setLoggedInUser = (userData: getUserData | null ) => {
    setUser(userData);
  };
  function handleLogOut() {
    localStorage.removeItem("token");
    setUser(null);
  }
  
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
            {!user && <Route path="/create" element={<Navigate to="/login" />} />}
            {!user && <Route path="/user" element={<Navigate to="/login" />} />}
            {!user && <Route path="/edit-user" element={<Navigate to="/login" />} />}
            {!user && <Route path="/package" element={<Navigate to="/login" />} />}
            {!user && <Route path="/editpackage/:packageId" element={<Navigate to="/login" />} />}
            {user && <Route path="/signup" element={<Navigate to="/package" />} />}
            {user && <Route path="/login" element={<Navigate to="/package" />} />}
            <Route path="/signup" element={<SignUp />} />   
            <Route 
              path="/login" 
              element={<Login setLoggedInUser={setLoggedInUser} />} 
            />  
            <Route path="/" element={<Navigate to={user ? '/package' : '/login'} />} />   
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
