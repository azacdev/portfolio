// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV1viRaLWCRhfT26RGRYAcyBa7SFXUWIo",
  authDomain: "portfolio-4361f.firebaseapp.com",
  projectId: "portfolio-4361f",
  storageBucket: "portfolio-4361f.appspot.com",
  messagingSenderId: "522438855635",
  appId: "1:522438855635:web:ba650fb33a69a74e8dfd26",
  measurementId: "G-HYYF4Z461V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
