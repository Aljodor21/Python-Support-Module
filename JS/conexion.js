import { getFirestore, collection, addDoc, setDoc, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCx2xIYBj2sQwkne61iFidKqWF3Ku7t1_I",
    authDomain: "pythonsupportmodule-a77e6.firebaseapp.com",
    databaseURL: "https://pythonsupportmodule-a77e6-default-rtdb.firebaseio.com",
    projectId: "pythonsupportmodule-a77e6",
    storageBucket: "pythonsupportmodule-a77e6.appspot.com",
    messagingSenderId: "636138953229",
    appId: "1:636138953229:web:0f10f4655a90e522629344"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


export const saveProgress = (resp) => setDoc(doc(db, 'progress', resp),{estado: 'completado'});
export const getList = () => getDocs(collection( db, 'content'));
export const getProgress = () => getDocs(collection( db, 'progress'));
export const getResp = (rsp) => getDoc(doc(db, 'quiz', rsp));