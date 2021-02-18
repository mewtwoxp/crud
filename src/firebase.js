import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyATFdhkYdBRCVD5oGnRMKFbq2k7DXHDiRw",
    authDomain: "crud-bee28.firebaseapp.com",
    projectId: "crud-bee28",
    storageBucket: "crud-bee28.appspot.com",
    messagingSenderId: "199909180151",
    appId: "1:199909180151:web:882a0002f1938be0c2c9f2"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)