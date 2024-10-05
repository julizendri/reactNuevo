import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD12fGAiV7UkB_NUIloydhptcjDY58gCdM",
    authDomain: "kaia-46603.firebaseapp.com",
    projectId: "kaia-46603",
    storageBucket: "kaia-46603.appspot.com",
    messagingSenderId: "610145177389",
    appId: "1:610145177389:web:c35cbce46a7c3d3f58cda4",
    measurementId: "G-K3LKFXRRDY"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);