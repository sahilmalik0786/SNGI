import { initializeApp } from "firebaseConfig";
import{ }  from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAXwPxJkZIlNnawJkd4tmk1Pigo1D0IRsQ",
    authDomain: "sngi-1b0e2.firebaseapp.com",
    projectId: "sngi-1b0e2",
    storageBucket: "sngi-1b0e2.appspot.com",
    messagingSenderId: "670184629265",
    appId: "1:670184629265:web:9cf5217efce51fb9ad7db0"
};


firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();

console.log("hwllo world");
