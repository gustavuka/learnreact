import * as firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyBkYCKFp18TS3-awCXn8iv1oaUyI3FnJLY",
  authDomain: "expensify-b6700.firebaseapp.com",
  databaseURL: "https://expensify-b6700.firebaseio.com",
  projectId: "expensify-b6700",
  storageBucket: "expensify-b6700.appspot.com",
  messagingSenderId: "134242045326",
  appId: "1:134242045326:web:11c1def612e81e8ea568df",
  measurementId: "G-ZDTBXP8FQ1",
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

database
  .ref()
  .set({
    name: "Gus",
    age: 29,
    isSingle: false,
    location: {
      city: "Floripa",
      country: "Brasil",
    },
  })
  .then(() => {
    console.log("data is saved")
  })
  .catch((error) => {
    console.log("This failed:", error)
  })

database
  .ref("attributes")
  .set({ height: 1.8, weight: 75 })
  .then(() => {
    console.log("hello")
  })
  .catch((error) => {
    console.log("asdasdsa", error)
  })
