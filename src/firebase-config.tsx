import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore" ;
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD7Fsor_Kic4jhkA4XMYhxrfi0vJ2ZuICQ",
  authDomain: "dashbox-13889.firebaseapp.com",
  projectId: "dashbox-13889",
  storageBucket: "dashbox-13889.appspot.com",
  messagingSenderId: "450385409692",
  appId: "1:450385409692:web:bf20548a1d03eeec421f59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);

export {
    auth,
    database,
    storage
}