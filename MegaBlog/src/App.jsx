import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import authService from "../Appwrite/Auth"
import {login, logout} from "./Store/AuthSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className="flex flex-col min-h-screen">
      
      
      <header className="sticky top-0 z-50 shadow-md">
        <Header />
      </header>

      
      <main className="flex-1 bg-gray-500">
        <Outlet />
      </main>

      
      <Footer />
    </div>
  ) : null;
}

export default App