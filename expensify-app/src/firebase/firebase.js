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

//child removed
database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

//child changed
database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

//child added
database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// database.ref("expenses").on("value", (snapshshot) => {
//   const expenses = []

//   snapshshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     })

//     console.log(expenses)
//   })
// })

// database.ref("expenses").push({
//   description: "Rent",
//   note: "May 11th",
//   amount: 300,
//   createdAt: "11-02-2020",
// })

// database
//   .ref()
//   .set({
//     name: "Gus",
//     age: 29,
//     stressLevel: 6,
//     job: {
//       title: "Software Developer",
//       company: "Google",
//     },
//     location: {
//       city: "Floripa",
//       country: "Brasil",
//     },
//   })
//   .then(() => {
//     console.log("data is saved")
//   })
//   .catch((error) => {
//     console.log("This failed:", error)
//   })

// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     const data = snapshot.val()
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
//   },
//   (e) => {
//     console.log("Error:", e)
//   }
// )

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
// })
