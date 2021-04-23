import firebase from 'firebase/app'
import { getFirestore } from '../firebase'
import { removeFromStocks } from './productsService'

const db = getFirestore()
const ordersCollection = db.collection('orders')

export function getOrders() {
  return ordersCollection.get().then((snapshot) => {
    if (snapshot.size > 0) {
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    }
    return []
  })
}

export function getOrder(orderId) {
  return ordersCollection
    .doc(orderId)
    .get()
    .then((order) => {
      if (order.exists) {
        return order.data()
      }
      return {}
    })
}

export function createOrder(orderInfo) {
  const date = firebase.firestore.Timestamp.fromDate(new Date())
  const newOrder = {...orderInfo, date }
  return ordersCollection.add(newOrder).then((orderCreated) => removeFromStocks({...orderInfo, id: orderCreated.id }))
}
