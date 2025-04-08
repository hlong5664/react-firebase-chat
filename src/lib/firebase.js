import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactchat-538fd.firebaseapp.com",
    projectId: "reactchat-538fd",
    storageBucket: "reactchat-538fd.firebasestorage.app",
    messagingSenderId: "1078515390773",
    appId: "1:1078515390773:web:0d91ef45b114884619d47c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
