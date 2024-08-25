import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Testing from './Testing';



const NotFound = () => <h2>404 Not Found  (login)</h2>;


export default function Login() {



  return (
    <>   

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/testing" element={<Testing />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  </>
  )
}
