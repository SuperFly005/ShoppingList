import { INSERT_NEW_TASK } from "./constants";

export const insertNewTask = (task) => {
    return {
        type: INSERT_NEW_TASK,
        payload: {
            task,
        }
    }
}