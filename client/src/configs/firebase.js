import firebase from 'firebase';
//import "firebase/auth";

const app = {
    apiKey: "AIzaSyBJ92MLbKfKKHIQYzvpCY-frcLlHB4D7TE",
    authDomain: "crichead-5e6a4.firebaseapp.com",
    projectId: "crichead-5e6a4",
    storageBucket: "crichead-5e6a4.appspot.com",
    messagingSenderId: "223351237458",
    appId: "1:223351237458:web:72af08f46785c1b970288b"
};
// Initialize Firebase export const auth=
firebase.initializeApp(app);

//export const auth=firebase.initializeApp(app).auth();

export default firebase;