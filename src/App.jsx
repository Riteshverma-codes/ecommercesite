import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Error from './Components/Error'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path ="" element={<Home/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="*" element={<Error/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
