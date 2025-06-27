import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

const AppRouter = () => {
  return (
    <Routes>
      {/* Redirección desde /servitecolombia al home */}
      <Route path="/servitecolombia" element={<Navigate to="/servitecolombia/home" replace />} />

      {/* Rutas principales */}
      <Route path="/servitecolombia/" element={<Home />} />
      <Route path="/servitecolombia/about" element={<About />} />
      <Route path="/servitecolombia/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRouter
