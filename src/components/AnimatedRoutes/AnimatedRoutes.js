import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import Home from '../../pages/Home'
import CountryDetail from '../../pages/CountryDetail'

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/:countryName" element={<CountryDetail />} />
    </Routes>
  )
}

export default AnimatedRoutes