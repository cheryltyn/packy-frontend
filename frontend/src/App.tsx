import { useState } from 'react'
import CreatePackage from './pages/CreatePackage'
import NavBar from './pages/NavBar'
import NewUser from './pages/NewUser'
import EditUser from './pages/EditUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar /> 
    {/* <CreatePackage />  */}
    {/* <NewUser />  */}
    <EditUser /> 
    </>
  )
}

export default App
