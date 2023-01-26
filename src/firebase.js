import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIstz9nB8i0CyYgNkkn8IlnOM9SrRKhso",
  authDomain: "gchat-48bb7.firebaseapp.com",
  projectId: "gchat-48bb7",
  storageBucket: "gchat-48bb7.appspot.com",
  messagingSenderId: "421259570624",
  appId: "1:421259570624:web:c1f17dfb11d5497a76ac25",
  measurementId: "G-Z6EX3FV7P0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()