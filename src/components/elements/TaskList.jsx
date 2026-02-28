import React from 'react'
import '../styles/tasklist.min.css'

const TaskList = () => {
  return (
    <div className='tasklist'>
        <div className='tasks'>
            <div className="task">
                <div className='top'>
                    <p className='priority'>High</p>
                    <p className="date">20 Feb 2026</p>
                </div>
                <h1 className='task-title'>Make a youtube video</h1>
                <p className='task-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quam iste. Commodi, totam ducimus? Illum.</p>
            </div>

            <div className="task">
                <div className='top'>
                    <p className='priority'>High</p>
                    <p className="date">20 Feb 2026</p>
                </div>
                <h1 className='task-title'>Make a youtube video</h1>
                <p className='task-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quam iste. Commodi, totam ducimus? Illum.</p>
            </div>

            <div className="task">
                <div className='top'>
                    <p className='priority'>High</p>
                    <p className="date">20 Feb 2026</p>
                </div>
                <h1 className='task-title'>Make a youtube video</h1>
                <p className='task-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quam iste. Commodi, totam ducimus? Illum.</p>
            </div>

            <div className="task">
                <div className='top'>
                    <p className='priority'>High</p>
                    <p className="date">20 Feb 2026</p>
                </div>
                <h1 className='task-title'>Make a youtube video</h1>
                <p className='task-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quam iste. Commodi, totam ducimus? Illum.</p>
            </div>
        </div>
    </div>
  )
}

export default TaskList