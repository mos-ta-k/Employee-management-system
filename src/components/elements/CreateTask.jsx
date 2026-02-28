import React from 'react'
import '../styles/createTask.min.css'

const CreateTask = () => {
  return (
    <div>
        <form action="">
            <h1 className='add-task-title'>Add a new task</h1>
            <div className='container'>
                <div className='left'>
                <div>
                    <label htmlFor="taskTitle">Task title:</label>
                    <input type="text" placeholder='Enter your task title'/>
                </div>
                <div>
                    <label htmlFor="Date">Date:</label>
                    <input type="date" />
                </div>
                <div>
                    <label htmlFor="AssignTo">Assign to:</label>
                    <input type="text" placeholder='Enter the name of the person '/>
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input type="text" placeholder='Enter the category'/>
                </div>
            </div>

            <div className="right">
                <label htmlFor="description" className='description-label'>Description:</label>
                <textarea name="" id="" cols="20" rows="10" placeholder='Enter the description'></textarea>
            <button className='button add-task-button' type='submit'>Add Task</button>
            </div>
        </div>

        </form>
    </div>
  )
}

export default CreateTask