import { collatedTasksExists } from '../constants'

export const collatedTasksExists = (selectedProject) => {
  collatedTasksExists.find(task => task.key === selectedProject)
}