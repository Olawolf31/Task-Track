import Header from "./components/Header";
import React, { useState, useEffect } from 'react'
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";



function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

/*   useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()

      console.log(data)
    }

    fetchTasks()
  }, []) */


  //Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }



  //delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
  }

  // Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title={"Task Tracker"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'no tasks to show'}
    </div>
  );
}

export default App;
