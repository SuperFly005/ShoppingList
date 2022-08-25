import { INSERT_NEW_TASK, PURCHASE_CHANGE } from './constants'

const initialState = {
  tasks: [],
}

const shoppingReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case INSERT_NEW_TASK:
      return {
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length,
            ...payload.task,
            purchased: false,
          },
        ],
      }
      
    case PURCHASE_CHANGE:
        const newTasks = [...state.tasks]
        newTasks[payload.id].purchased = !newTasks[payload.id].purchased

        return { tasks : newTasks }

    default:
      return {
        ...state,
      }
  }
}

export default shoppingReducer
