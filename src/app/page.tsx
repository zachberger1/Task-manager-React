'use client'

import { useState } from 'react'
import Task from './task'
import { TaskType } from './Types/task-type'
import Header from './header'

const INIT_STATE: TaskType[] = [
 // Task List
]

export default function Page() {
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState(INIT_STATE)

  function addTask() {
    if (value == "") {
      alert("No Task in text box")
    }
    else {
      setTasks([
        ...tasks,
        {
          title: value,
          didComplete: false,
          id: tasks.length + 1,
        },
      ])

      
    }
    setValue('')
  }



  return (
    <div>
      <Header />
      <br />
      

      <br />

      <div className="flex gap-3 left ml-4 ">
        <input
          onChange={e => setValue(e.target.value)}
          value={value}
          type="text"
          className="border border-pink-200 p-1.5 rounded-xl text-black  "
        />
        <button
          onClick={addTask}
          className="bg-blue-600 p-2 rounded-lg"
        >
          Add
        </button>
      </div>

      <br />

      <div className="flex gap-4 flex-col p-5">
        {tasks.map(task => (
          <Task task={task} key={task.id}
            toggle={function () {
              setTasks(
                tasks.map(t =>
                  t.id != task.id
                    ? t
                    : { ...t, didComplete: !t.didComplete }
                )
              )
            }}
            delete={function () {
              setTasks(tasks.filter(t => t.id != task.id))
            }}
          />
        ))}

      </div>
    </div>
  )
}