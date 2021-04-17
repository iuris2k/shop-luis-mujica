// Initialize Cloud Firestore through Firebase
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

export function getFirebase() {
  return app
}

export function getFirestore() {
  return firebase.firestore(app)
}
