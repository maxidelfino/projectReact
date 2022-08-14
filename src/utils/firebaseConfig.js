import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOQH408WdRdk5z_G9D-meCYd6ItTN3wXQ",
  authDomain: "ropdes-7eb40.firebaseapp.com",
  projectId: "ropdes-7eb40",
  storageBucket: "ropdes-7eb40.appspot.com",
  messagingSenderId: "1090411031641",
  appId: "1:1090411031641:web:f8360ee1c5b1b5a37b5548"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);