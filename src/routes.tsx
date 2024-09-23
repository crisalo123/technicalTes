import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import { LoginPage } from './auth/pages'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  )
}

export default AppRoutes
