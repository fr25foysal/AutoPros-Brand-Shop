import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAa26AdFa0GjHKCQhZj86RZoGXYNzvp4XU",
  authDomain: "autopros-7c6da.firebaseapp.com",
  projectId: "autopros-7c6da",
  storageBucket: "autopros-7c6da.appspot.com",
  messagingSenderId: "881586183596",
  appId: "1:881586183596:web:45d7fef56ee35781da2e09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)