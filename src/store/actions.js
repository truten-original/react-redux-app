import { taskUpdated, taskDeleted } from './actionTypes'

export function taskCompleted(id) {
  return {
    type: taskUpdated,
    payload: { id, completed: true },
  }
}
export function titleChanged(id) {
  return {
    type: taskUpdated,
    payload: { id, title: `New title for ${id}` },
  }
}

export function taskDistructed(id) {
  return {
    type: taskDeleted,
    payload: {id},
  }
}
