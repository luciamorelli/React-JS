import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBSekiTc49wd4Z9I9P76nBHyIrHoR7JXN8",
  authDomain: "vinilos-6396b.firebaseapp.com",
  projectId: "vinilos-6396b",
  storageBucket: "vinilos-6396b.appspot.com",
  messagingSenderId: "901623551666",
  appId: "1:901623551666:web:58528416a563f3881a5bab"
};


  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {auth}

export function getFirebase(){
return firebaseApp;
}
export const database = firebase.firestore();