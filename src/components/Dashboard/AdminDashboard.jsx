import React from 'react'
import '../styles/adminDashboard.min.css'
import Header from '../elements/Header'
import CreateTask from '../elements/CreateTask'

const AdminDashboard = () => {
  return (
      <div className='adminDashboard'>
        <Header/>
        <CreateTask/>
        
    </div>
  )
}

export default AdminDashboard