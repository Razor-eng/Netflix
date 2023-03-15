import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCM4M1VrUsYUyRvPYFXT33N8bNJW-Mi-C0",
    authDomain: "netflixclone-r.firebaseapp.com",
    projectId: "netflixclone-r",
    storageBucket: "netflixclone-r.appspot.com",
    messagingSenderId: "734598239532",
    appId: "1:734598239532:web:b3ea119e49fb805a5fc889",
    measurementId: "G-8121RPPFDR"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export { auth };
export default db;
