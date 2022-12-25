// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJwy88xun8s-vYy2XUqcRbda_j2asWRnA",
    authDomain: "personal-project-b8aa6.firebaseapp.com",
    projectId: "personal-project-b8aa6",
    storageBucket: "personal-project-b8aa6.appspot.com",
    messagingSenderId: "560202510873",
    appId: "1:560202510873:web:970e7a1b3e4156c7303088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)