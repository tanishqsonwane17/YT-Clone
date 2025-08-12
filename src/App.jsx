import React from 'react'
import Mainscreen from './screens/Mainscreen'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router' // ✅ react-router-dom se
import Details from './screens/Details'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Mainscreen />} />
        {/* :id param use karo */}
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
