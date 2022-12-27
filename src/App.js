// import React, { useEffect,useState } from 'react';
// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Register from './Register';
import Dashboard from './Dashboard';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <h1>Bulk orders</h1>
      
     <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/AddProduct' element={<AddProduct />} />
      <Route path="/UpdateProduct" element={<UpdateProduct />} />
     </Routes>
        </BrowserRouter>
      
    </div>
  );

}

export default App;
