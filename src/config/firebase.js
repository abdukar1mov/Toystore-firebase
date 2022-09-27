import firebase from "firebase/app";
import "firebase/auth";

const config = firebase.initializeApp({
    apiKey: "AIzaSyDCJ3Hup9UANDMy-KezBC-TiPybUT6s5lE",
    authDomain: "toystore-fb.firebaseapp.com",
    projectId: "toystore-fb",
    storageBucket: "toystore-fb.appspot.com",
    messagingSenderId: "357781013947",
    appId: "1:357781013947:web:da0975f524074b22a7f09e",
    measurementId: "G-2GR1NHVMFF"

});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;