import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'; 
import Home from './components/pages/Home';
import Footer from './components/pages/Footer'; 
import Shop from './components/pages/Shop'; 

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes> 
      <Route path='/' exact element= {<Home/>} /> 
      <Route path='/' exact element= {<Footer/>} /> 
      <Route path='/shop' exact element= {<Shop/>}/> 
      {/* <Route path='/'exact element= {</>}/> */}
    </Routes>
    <Footer/> 
    </Router> 
    </>  
  );
}

export default App;
