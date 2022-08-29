import { INSERT_NEW_TASK, MODIFY_TASK, PURCHASE_CHANGE } from './constants'

const initialState = {
  currentID: 0,
  tasks: [],
}

const shoppingReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case INSERT_NEW_TASK:
      return {
        currentID: state.currentID + 1,
        tasks: {
          ...state.tasks,
          [state.currentID]: {
            ...payload.task,
            purchased: false,
          },
        },
      }
    
    case MODIFY_TASK:
      return {
        currentID: state.currentID,
        tasks: {
          ...state.tasks,
          [payload.id]: {
            ...payload.task,
          },
        },
      }
      
    case PURCHASE_CHANGE:
        return {
          currentID: state.currentID,
          tasks: {
            ...state.tasks,
            [payload.id]: {
              ...state.tasks[payload.id],
              purchased: !state.tasks[payload.id].purchased
            }
          }
        }

    default:
      return {
        ...state,
      }
  }
}

export default shoppingReducer
