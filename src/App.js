import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Services from './Components/Services'
import Contact from './Components/Contact'
import Error from './Components/Error'
import Menu from './Components/Menu'
const App = () => {
  
  return (
   <>
   <Menu/>
   
   <Routes>
<Route path='/' element={<Home pera="welcome to my world" headline="home" />}/>
<Route path='/about' element={<About pera="welcome to my world" headline="About"/>}/>
<Route path='/service' element={<Services pera="welcome to my world" headline="Services"/>}/> 
<Route path='/contact' element={<Contact pera="welcome to my world" headline="Contact"/>}/>
<Route path="*"  element={<Error name="error"/>}/>

   </Routes>

   </> )
}

export default App