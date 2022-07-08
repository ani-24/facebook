import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjvYw-LeBy57Ur92hwaNSCA64n1qy4Ilc",
  authDomain: "facebook-128ab.firebaseapp.com",
  projectId: "facebook-128ab",
  storageBucket: "facebook-128ab.appspot.com",
  messagingSenderId: "375794407055",
  appId: "1:375794407055:web:772bffa9e7acf020bb82fa",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
