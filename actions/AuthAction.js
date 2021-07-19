import firebase from "../firebaseConfig";
import { v4 as uuidv4 } from "uuid";
import "firebase/auth";

export const createUser = (username, email, password) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(), password.trim())
        .then((userCredential) => {
            userCredential.user
                .updateProfile({
                    displayName: username,
                })
                .then(() => {
                    registerUser(username);
                })
                .catch((error) => {
                    console.log(error);
                    console.log("Error with createUser");
                    // ..
                });
        });
};
export const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
                // ...
                resolve(true);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                reject(false);
            });
    });
};

export const registerUser = (username) => {
    firebase.firestore().collection("users").doc(username).set({
        _id: uuidv4(),
        registeredAt: new Date().getTime(),
    });
};
