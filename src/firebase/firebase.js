import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCSdB6bdQxS7cln4GG8aj3XTYTHv4A7cV8",
  authDomain: "stock-c5b2c.firebaseapp.com",
  projectId: "stock-c5b2c",
  storageBucket: "stock-c5b2c.appspot.com",
  messagingSenderId: "665734095203",
  appId: "1:665734095203:web:7810f5af5b67977d4a7356"
};



/*const firebaseConfig = {
    apiKey: "AIzaSyBfsHj0YlXuV9Q7ehbE-ZT_mpOQ5MrW0fQ",
    authDomain: "viniloscom-d1251.firebaseapp.com",
    projectId: "viniloscom-d1251",
    storageBucket: "viniloscom-d1251.appspot.com",
    messagingSenderId: "820825700718",
    appId: "1:820825700718:web:bc78999fb1b8e25f4a297f"
  };
*/
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {auth}

export function getFirebase(){
return firebaseApp;
}
export const database = firebase.firestore();