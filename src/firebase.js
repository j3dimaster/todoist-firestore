import firebase from 'firebase'

import 'firebase/firestore'

const test = 'test'

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'dev-todoist.firebaseapp.com',
  databaseURL: 'https://dev-todoist.firebaseio.com',
  projectId: 'dev-todoist',
  storagBucket: 'dev-todoist.appspot.com',
  messgingSenderId: '376495254545',
  appId: '1:376495254545:web:466c328cb1b385ebdf95b0',
})

export { firebaseConfig as firebase }
