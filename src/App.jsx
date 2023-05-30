
import React from 'react'
import './App.css'
import Nav from './component/Nav'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Homepage/cart-project'
import Select from './pages/Select/Select'
import ShopeContextProvider from './context/ShopeContext'



function App() {
  return (
    <ShopeContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/select/' element={<Select />} />
        </Routes>
      </Router>
    </ShopeContextProvider>
  )
};

export default App
