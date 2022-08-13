
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDXZbPhJoP4duGT1SmxFVYsaQH8rkmrBYk",
    authDomain: "eliessen.firebaseapp.com",
    projectId: "eliessen",
    storageBucket: "eliessen.appspot.com",
    messagingSenderId: "554455122690",
    appId: "1:554455122690:web:dea9bf01b2a7c44e49381b",
    measurementId: "G-X4000NLLNR"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);