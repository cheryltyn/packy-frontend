import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePackage from './pages/CreatePackage';
import NavBar from './pages/NavBar';
import User from './pages/User';
import EditUser from './pages/EditUser';
import PackageCard from './pages/PackageCard';
import PackagePage from './pages/PackagePage';
import EditPackage from './pages/EditPackage'

function App() {
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
          <Route path="/editpackage" element={<EditPackage />} />   
        </Routes>
      </div>
    </Router>
  );
}

export default App;