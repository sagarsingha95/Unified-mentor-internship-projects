import React, { useContext } from 'react'
import Login from './pages/Login'
import { AuthContext } from './context/AuthContext'
import Dashboard from './pages/Dashboard'

const App = () => {
  const {isLoggedIn} = useContext(AuthContext)

  if (!isLoggedIn) return (<>
    <Login />
  </>)


  return (
    <>
      <Dashboard />
    </>
  )
}

export default App