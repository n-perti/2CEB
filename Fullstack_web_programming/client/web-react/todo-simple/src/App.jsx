
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './assets/components/Form'
import List from './assets/components/List'
import { useState } from 'react'

function App() {
  const [newTask, setNewTask] = useState({})

  const hanldeSendData = (task) => {
    setNewTask(task)
    console.log(task)
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <br />
        <h1>TODO tasks</h1>
      </div>
      <Form sendData= {hanldeSendData}/>
      <List task= {newTask}/>
    </>
  )
}

export default App
