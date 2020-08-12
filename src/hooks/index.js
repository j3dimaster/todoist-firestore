import { useState, useEffect } from 'react'
import moment from 'moment'
import { firebase } from '../firebase'
import { collatedTasksExists } from '../helpers'

const collections = {
  tasks: 'tasks'
}

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    let unsubscribe = firebase
    .firestore()
    .collection(collections.tasks)
    .where('userId', '==', 'CE3BF38D-8BC0-4E6D-95F7-9184DB87EE2D')

    if (selectedProject && !collatedTasksExists(selectedProject)) {
      unsubscribe = unsubscribe.where('projectId', '==', selectedProject)
    } else if (selectedProject === 'TODAY')  {
      unsubscribe = unsubscribe.where('projectId', '==', moment().format('DD/MM/YYYY'))
    } else if (selectedProject === 'INBOX' || selectedProject === 0) {
      unsubscribe = unsubscribe.where('projectId', '==', 0)
    } else {
      unsubscribe
    }
    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id, 
        ...task.data()
      }))
      setTasks(selectedProject === 'NEXT_7' ? newTasks.filter(task => moment(task.date, 'DD-MM-YYYY')) : )
    }) 
  }, [])
}