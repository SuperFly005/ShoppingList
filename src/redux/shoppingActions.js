import { INSERT_NEW_TASK, MODIFY_TASK, PURCHASE_CHANGE } from "./constants";

export const insertNewTask = (task) => {
    return {
        type: INSERT_NEW_TASK,
        payload: {
            task,
        }
    }
}

export const modifyTask = (id, task) => {
    return {
        type: MODIFY_TASK,
        payload: {
            id,
            task,
        }
    }
}

export const changePurchased = (id) => {
    return {
        type: PURCHASE_CHANGE,
        payload: {
            id,
        }
    }
}