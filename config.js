 import firebase from "firebase";

//initialize your database
 
const firebaseConfig = {
  apiKey: "AIzaSyCgVM8y2M6m9yACj0nHGrE9ca9M7LLuYvE",
  authDomain: "class-attendence-reporter.firebaseapp.com",
  databaseURL: "https://class-attendence-reporter-default-rtdb.firebaseio.com",
  projectId: "class-attendence-reporter",
  storageBucket: "class-attendence-reporter.appspot.com",
  messagingSenderId: "1007331666405",
  appId: "1:1007331666405:web:aa1abb43f0275b77f5e70c"
};
firebase.initializeApp(firebaseConfig);
  export default firebase.database();
 

  