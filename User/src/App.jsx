<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
=======
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Landing from './pages/Landing'
>>>>>>> 4cf78a3058c53cf85b2685f4af7b7b396478041c

export default function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
=======
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path = '/' element={<Signin/>}/> 
    </Routes>
    </BrowserRouter>
    {/* <Landing/> */}
    </>
  )
>>>>>>> 4cf78a3058c53cf85b2685f4af7b7b396478041c
}
