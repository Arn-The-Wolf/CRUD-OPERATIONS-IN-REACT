import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import Create from './Create'
import Update from './Update'
import Read from './Read'
import 'bootstrap/dist/css/bootstrap.min.css'
React



function App
  () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = { <Home /> }></Route>
        <Route path="/create" element={<Create />} />
        <Route path='/update/:id' element = { <Update /> }></Route>
        <Route path='/read/:id' element = { <Read /> }></Route>
              
      </Routes>
    </BrowserRouter>
  )
}

export default App
