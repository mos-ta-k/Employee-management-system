import React from 'react'
import Login from './components/auth/Login'
import '../src/components/styles/main.min.css'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'

const App = () => {
  return (
    <div>
      {/* <Login/> */}
      <EmployeeDashboard/>
    </div>
  )
}

export default App