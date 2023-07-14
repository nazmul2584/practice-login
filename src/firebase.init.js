// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCokwpW7YJJlSpAJQ49-NNioAy90hSr94A",
  authDomain: "practic-elogin.firebaseapp.com",
  projectId: "practic-elogin",
  storageBucket: "practic-elogin.appspot.com",
  messagingSenderId: "197947930615",
  appId: "1:197947930615:web:369b9786f11728eb8be0f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;