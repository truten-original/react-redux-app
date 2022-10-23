import { taskDeleted, taskUpdated } from "./actionTypes"
function taskReducer(state, action) {
    switch (action.type) {
      case taskUpdated: {
        const newArray = [...state]
        const elementIndex = newArray.findIndex(
          (el) => el.id === action.payload.id
        )
        newArray[elementIndex] = {...newArray[elementIndex], ...action.payload}
        return newArray
      }
      case taskDeleted: {
        const newArray = [...state].filter(el => el.id !== action.payload.id)
        return newArray
      }
      default:
       return state
    }
  }
  export default taskReducer