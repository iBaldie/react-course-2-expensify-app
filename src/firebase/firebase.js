import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASe_API_KEY,
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// on()
// chld_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// const onExpensesChange = database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "Food",
//   note: "I bought some food",
//   amount: 100,
//   createdAt: 1000,
// });

// database.ref("notes/-M43i3BNtKcoFzSCjIKQ").remove();

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React Native, Python",
// });

//Once
// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Liam Baldwin",
//     age: 39,
//     stressLevel: 6,
//     job: {
//       title: "Software Developer",
//       company: "Google",
//     },
//     location: {
//       city: "Heathfield",
//       country: "United Kingdom",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((e) => {
//     console.log("This failed", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seatle",
// });

// Same as remove
// database.ref("isSingle").set(null);

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded.");
//   })
//   .catch((e) => {
//     console.log("Remove failed: " + e.message);
//   });
