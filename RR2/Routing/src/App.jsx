
import './App.css'
import About from './components/About'
import Home from './components/Home'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'
import Login from './components/Login'
import PrivateComponents from './components/PrivateComponents'

function App() {
  

  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}>    </Route>
      
        <Route path="/about" element={<About/>}>    </Route>
        <Route path="/users" element={<UserList/>}>    </Route>
        <Route path="/users/:id" element={<PrivateComponents>  <UserDetails/> </PrivateComponents>}>    </Route>
        <Route path="/login" element={<Login/>}>    </Route>
      </Routes>
    
     
    </div>
  )
}

export default App
