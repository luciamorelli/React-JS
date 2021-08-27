import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDugUXCB97vi0w8hCSuGJ5o5Xc1kOlCAs0",
  authDomain: "vinilos--com.firebaseapp.com",
  projectId: "vinilos--com",
  storageBucket: "vinilos--com.appspot.com",
  messagingSenderId: "410617585872",
  appId: "1:410617585872:web:464733ce24baa03e9b7ed5"
};


  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {auth}

export function getFirebase(){
return firebaseApp;
}
export const database = firebase.firestore();