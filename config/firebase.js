import firebase from "@react-native-firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCSEFIA-NGaemU8P5tumHo1KIztzxbgwLQ",
    authDomain: "pawly-40e17.firebaseapp.com",
    projectId: "pawly-40e17",
    storageBucket: "pawly-40e17.appspot.com",
    messagingSenderId: "895474516699",
    appId: "1:895474516699:web:23b9e5931f7a13ee58c2fe",
    measurementId: "G-0R0PC68MSX"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase