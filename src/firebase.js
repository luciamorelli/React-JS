import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBfsHj0YlXuV9Q7ehbE-ZT_mpOQ5MrW0fQ",
    authDomain: "viniloscom-d1251.firebaseapp.com",
    projectId: "viniloscom-d1251",
    storageBucket: "viniloscom-d1251.appspot.com",
    messagingSenderId: "820825700718",
    appId: "1:820825700718:web:bc78999fb1b8e25f4a297f"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {auth}