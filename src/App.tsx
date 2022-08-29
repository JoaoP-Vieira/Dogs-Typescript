import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import LoginCreate from './Components/Login/LoginCreate'
import LoginLayout from './Components/Login/LoginLayout'
import UserLayout from './Components/User/UserLayout'
import { UserContext, UserStorage } from './UserContext'

const App: React.FC = () => {
  const context = React.useContext(UserContext)

  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LoginLayout />}>
              <Route index element={<Login />} />
              <Route path="criar" element={<LoginCreate />} />
              <Route path="perdeu" element={<div>perdeu</div>} />
              <Route path="resetar" element={<div>resetar</div>} />
            </Route>
            <Route path="conta" element={<UserLayout />}>
              <Route index element={<div>feed</div>} />
              <Route path="postar" element={<div>postar</div>} />
              <Route path="estatisticas" element={<div>estatisticas</div>} />
            </Route>
          </Routes>
        </UserStorage>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App

