import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAwBxkacg0_4BvRoNTEBWc8Hl_lALachQE',
  authDomain: 'iuris-tech.firebaseapp.com',
  projectId: 'iuris-tech',
  storageBucket: 'iuris-tech.appspot.com',
  messagingSenderId: '862120358758',
  appId: '1:862120358758:web:0a913b70d0c4243a85cea7',
})

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)
