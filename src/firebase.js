import firebase from 'firebase'


const firebaseConfig = {
 apiKey: "AIzaSyDL4hxyiurOJgpJ8-qFjdz2KB4aP6ziHSU",
 authDomain: "clone-8d246.firebaseapp.com",
 projectId: "clone-8d246",
 storageBucket: "clone-8d246.appspot.com",
 messagingSenderId: "118169884037",
 appId: "1:118169884037:web:d6b8ff09ca4373640520ec"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
//by enable myself gmail account
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {
 db,
 auth,
 provider
}