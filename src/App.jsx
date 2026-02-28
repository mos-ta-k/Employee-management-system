import React, { useEffect } from 'react'
import Login from './components/auth/Login'
import '../src/components/styles/main.min.css'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStarage, setLocalStorage } from './utils/LocalStorage'

const App = () => {

  useEffect(() => {
    // setLocalStorage()
    getLocalStarage()
  },)
  

  return (
    <div>
      <Login/>
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App