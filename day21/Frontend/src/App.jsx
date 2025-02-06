import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Camponet/Navbar';
import Home from './Camponet/Home';
import About from './Camponet/About';


function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>

          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App