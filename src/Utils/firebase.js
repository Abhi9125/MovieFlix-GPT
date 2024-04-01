// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi7kD_h7lwz9KDCdJj6ZzQS30xr_D9vG0",
  authDomain: "moviesflix-gpt-3c2f6.firebaseapp.com",
  projectId: "moviesflix-gpt-3c2f6",
  storageBucket: "moviesflix-gpt-3c2f6.appspot.com",
  messagingSenderId: "684452800816",
  appId: "1:684452800816:web:d8c9bad243cc1549ca40f5",
  measurementId: "G-VD80V6Q0XF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
