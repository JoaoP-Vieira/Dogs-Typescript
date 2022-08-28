import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import LoginLayout from './Components/Login/LoginLayout'
import { UserStorage } from './UserContext'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LoginLayout />}>
              <Route index element={<Login />} />
              <Route path="criar" element={<div>criar</div>} />
              <Route path="perdeu" element={<div>perdeu</div>} />
              <Route path="resetar" element={<div>resetar</div>} />
            </Route>
          </Routes>
        </UserStorage>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App

