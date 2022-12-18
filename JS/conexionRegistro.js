// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const regUs = document.querySelector('#register-form');
regUs.addEventListener('submit', (a) => {
  a.preventDefault();
  const email = document.querySelector('#email-reg').value;
  const psw = document.querySelector('#pssw-reg').value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, psw)
    .then((userCredential) => {
      window.alert('Registrado exitosamente')
      const user = userCredential.user;
      window.location.href = "login.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert('Este usuario ya existe, pruebe iniciando sesión.')
      window.location.href = "registrar.html"
    });
})