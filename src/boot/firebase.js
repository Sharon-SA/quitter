// import { boot } from 'quasar/wrappers'

// // "async" is optional;
// // more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
//   // something to do
// })

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAr9yEBkhb2uNsCZ3TgkWrhT2Kk5txmaQQ",
  authDomain: "quitter2-cd35a.firebaseapp.com",
  projectId: "quitter2-cd35a",
  storageBucket: "quitter2-cd35a.appspot.com",
  messagingSenderId: "990552137499",
  appId: "1:990552137499:web:95f0df494202e51bdb3dbe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db

