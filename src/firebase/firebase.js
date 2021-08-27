import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCEogIEGK-4CCODUqLGo4QIbadov7KNqko",
  authDomain: "vinilos-b131a.firebaseapp.com",
  projectId: "vinilos-b131a",
  storageBucket: "vinilos-b131a.appspot.com",
  messagingSenderId: "1063878215161",
  appId: "1:1063878215161:web:ad42e27e0a5d45f4032928"
};


  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {auth}

export function getFirebase(){
return firebaseApp;
}
export const database = firebase.firestore();