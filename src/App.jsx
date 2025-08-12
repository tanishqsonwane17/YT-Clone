import React from 'react'
import Mainscreen from './screens/Mainscreen'
import Nav from './components/Nav'
import Video from './components/Video'
import { Route, Routes } from 'react-router'
import Details from './screens/Details'

const App = () => {
  return (
    <>
    
    <Nav />
    <Routes>
      <Route path="/" element={<Mainscreen />} />
      <Route path="/details" element={<Details />} />
    </Routes>
      
    </>
  )
}

export default App