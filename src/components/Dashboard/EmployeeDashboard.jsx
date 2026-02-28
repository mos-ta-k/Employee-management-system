import React from 'react'
import '../styles/employeeDashboard.min.css'
import Header from '../elements/Header.jsx'
import TaskListNumber from '../elements/TaskListNumber.jsx'
import TaskList from '../elements/TaskList.jsx'

const EmployeeDashboard = () => {
  return (
    <div className='employeeDashboard'>
        <div>
            <Header/>
            <TaskListNumber/>
            <TaskList/>
        </div>
    </div>
  )
}

export default EmployeeDashboard