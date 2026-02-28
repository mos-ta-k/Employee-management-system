import React from 'react'
import '../styles/adminDashboard.min.css'
import Header from '../elements/Header'
import CreateTask from '../elements/CreateTask'
import AllTask from '../elements/AllTask'

const AdminDashboard = () => {
  return (
      <div className='adminDashboard'>
        <Header/>
        <CreateTask/>
        <AllTask/>
        
    </div>
  )
}

export default AdminDashboard