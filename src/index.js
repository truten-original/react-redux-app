import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { getError } from './store/errors'
import configureStore from './store/store'
import {
  titleChanged,
  taskDistructed,
  getTasks,
  loadTasks,
  getTasksLoadingStatus,
  createTask
} from './store/task'
import { completeTask } from './store/task'
const store = configureStore()
const App = (params) => {
  const state = useSelector(getTasks())
  const isLoading = useSelector(getTasksLoadingStatus())
  const error = useSelector(getError())
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadTasks())
  }, [])
 
  // const completeTask = (taskId) => {
  //  dispatch(taskCompleted(taskId))
  // }

  const changeTitle = (taskId) => {
    dispatch(titleChanged(taskId))
  }

  const deleteTask = (taskId) => {
    dispatch(taskDistructed(taskId))
  }
  const addTask = () => {
    const generateTitle = () => {
      return {title:`task_${Date.now()}`}
    }
    const content = generateTitle()
    console.log(content)
    dispatch(createTask(content))
  }
  if (error) {
    return <p>{error}</p>
   }
 
  if (isLoading) {
    return <h1>Loading</h1>
  }

  return (
    <>
      <h1>App</h1>
      <button onClick={addTask}>add task</button>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Completed:${el.completed}`}</p>
            <button onClick={() => dispatch(completeTask(el.id))}>
              complete task
            </button>
            <button
              onClick={() => {
                changeTitle(el.id)
              }}
            >
              change Title
            </button>
            <button
              onClick={() => {
                deleteTask(el.id)
              }}
            >
              delete Task
            </button>
            <hr></hr>
          </li>
        ))}
      </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
