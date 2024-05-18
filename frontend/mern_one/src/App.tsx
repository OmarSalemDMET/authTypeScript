import NavbarX from "./NavBar"

import { Route,Routes } from 'react-router-dom';
import RegisterU from "./pages/Register"
import LogingIn from "./pages/LogIn"
function App() {


  return (
    <>
      <NavbarX/>
      <div>
    <Routes>        
      <Route path="/LogIn"  element={<LogingIn/>} />
      <Route path="/Register"  element={<RegisterU />}/>
      <Route path="/LogOut"  element={<LogingIn/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
