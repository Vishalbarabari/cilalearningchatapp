import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBMCgprjkUOlu8rkqhmsu-QhQkW3-mtjss",
    authDomain: "vuex-chatapp.firebaseapp.com",
    projectId: "vuex-chatapp",
    storageBucket: "vuex-chatapp.appspot.com",
    messagingSenderId: "47790109120",
    appId: "1:47790109120:web:3587412c2fab156f6dd825"
}

const db = firebase.initializeApp(config);
export default db;
