import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
//import Header from "./components/header.js";
//import Footer from './components/footer.js';
import Contact from './pages/contact';
import About from './pages/about';
export default function App() {
  return (
    <> 
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
    </Routes>
   
   
</>
 );
}
