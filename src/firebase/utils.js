import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBC1EvDFDCyTlv08uSbrmiNjfbug6B86Xc",
    authDomain: "efashion-f3fcd.firebaseapp.com",
    databaseURL: "https://efashion-f3fcd.firebaseio.com",
    projectId: "efashion-f3fcd",
    storageBucket: "efashion-f3fcd.appspot.com",
    messagingSenderId: "415359794929",
    appId: "1:415359794929:web:de02e43d4c766dee20f350"
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({promt: 'select_account'});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;