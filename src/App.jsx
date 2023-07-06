
import React from 'react'
import './App.css'
import Nav from './component/Nav'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Homepage/cart-project'
import Select from './pages/Select/Select'
import ShopeContextProvider from './context/ShopeContext'
import View from './pages/Homepage/View'


function App() {
  return (
    <ShopeContextProvider>
      <Router basename='/carte'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/select' element={<Select />} />
          <Route path='/viewpage/:id' element={<View/>} />
  
        </Routes>
      </Router>
    </ShopeContextProvider>
  )
};

export default App
