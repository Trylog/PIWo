import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBt2ZSkclZbykv5_8sRMcn06z-jAGSIG64",
    authDomain: "piwo-react-mbj-1.firebaseapp.com",
    projectId: "piwo-react-mbj-1",
    storageBucket: "piwo-react-mbj-1.appspot.com",
    messagingSenderId: "282650495786",
    appId: "1:282650495786:web:60d977e63a90f39463ac53"
  };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const firestore = getFirestore(app);

export { auth, googleProvider, firestore, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };
