  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    doc,
    getDoc,
    deleteDoc,
  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
  import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD7DSYmE-S2RR6JSSYqEuceSKTUu68V41Q",
    authDomain: "my-first-project-907b4.firebaseapp.com",
    projectId: "my-first-project-907b4",
    storageBucket: "my-first-project-907b4.appspot.com",
    messagingSenderId: "766062875553",
    appId: "1:766062875553:web:7756038c2a2dd81b80b1e0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Initialize Firestore
  const db = getFirestore();

  //Initialize Collection reference for users db
  const colUserRef = collection(db, 'users');

  //Initialize auth
  const auth = getAuth();
