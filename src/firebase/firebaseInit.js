import firebase from 'firebase/app';
import "firebase/firestore";

// nuestras configuraciones
var firebaseConfig = {
    apiKey: "AIzaSyAnfoN3SJ4dbeosVy23Ugt9vM-PqtcrAiU",
    authDomain: "invoice-app-vuejs.firebaseapp.com",
    projectId: "invoice-app-vuejs",
    storageBucket: "invoice-app-vuejs.appspot.com",
    messagingSenderId: "754785146925",
    appId: "1:754785146925:web:7bdda8f8d6d92efbbf00a4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();