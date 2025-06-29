
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import AppRouter from './router/AppRouter'
import Footer from './components/Footer'


function App() {

  return (

    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
      

  )
}

export default App
