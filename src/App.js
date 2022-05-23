import axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {
  const [val, setVal] = useState({ task: '', isDone: false })
  const [task, setTask] = useState([])

  function addTask(e) {
    e.preventDefault()
    const newTask = [...task, { val }]
    console.log(newTask)
    setTask(newTask)
    setVal('')
  }

  function taskCompleted(index) {
    const newTask = [...task]
    newTask[index].val.isDone = true
    console.log(newTask)
    setTask(newTask)
  }

  function delTask(index) {
    const newTask = [...task]
    newTask.splice(index, 1)
    setTask(newTask)
  }

  return (
    <div className='App'>
      <input
        onChange={(e) => setVal({ task: e.target.value, isDone: false })}
      />
      <button onClick={addTask}>Add</button>
      {task &&
        task.map((task, index) => {
          return (
            <div key={index} className={task.val.isDone ? 'cdiv' : 'div'}>
              <div>{task.val.task}</div>
              <button onClick={() => taskCompleted(index)}>
                {task.val.isDone ? 'Completed' : 'InComplete'}
              </button>
              <button onClick={() => delTask(index)}>Delete</button>
            </div>
          )
        })}
    </div>
  )
}

export default App
