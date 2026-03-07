import AllTask from '../elements/AllTask'
import CreateTask from '../elements/CreateTask'
import Header from '../elements/Header'
import '../styles/adminDashboard.min.css'

const AdminDashboard = ({ handleLogout }) => {
  return (
      <div className='adminDashboard'>
        <Header handleLogout={handleLogout} />
        <CreateTask/>
        <AllTask/>
        
    </div>
  )
}

export default AdminDashboard