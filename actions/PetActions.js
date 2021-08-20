import firebase from "../firebaseConfig"
import "firebase/storage";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";


export const getUsers = async () => {
    let Users = []
    await firebase.firestore().collection("users").get().then((querySnapShot)=>{
        querySnapShot.forEach((doc)=>{
            console.log(doc.data())
            Users.push(doc.data().name)
        })
    })
    return Users;
  };

export const getPets = (username) =>{
    return new Promise((resolve,reject) =>{
        
        firebase.firestore().collection("pets").where("ownerID","array-contains",username).get().then((querySnapShot)=>{
            let Pets = []
            querySnapShot.forEach((doc)=>{
                Pets.push(doc)
            })
            resolve(Pets);
        })
        .catch(error =>{
            console.log(error)
            console.log("getPets error")
        })
 
    }
    )
    
}

export const addPet = (petName,gender,species,breed,birthday,weight,neutered,microchipped,microchipNo,notes,username) =>{
  firebase.firestore().collection("pets").add({
    name:petName,
    gender:gender,
    species:species,
    breed:breed,
    birthday:birthday,
    weight:weight,
    neutered:neutered,
    microchipped:microchipped,
    microchipNo:microchipNo,
    ownerID: firebase.firestore.FieldValue.arrayUnion(username),
    notes: notes
})
}

export const getPetDetails = (id) =>{
    
    return new Promise((resolve,reject) =>{
        firebase.firestore().collection("pets").doc(id).get().then((querySnapShot)=>{
            querySnapShot.forEach((doc)=>{
              resolve(doc)
            })
        }).catch(error =>{
            console.log(error)
            console.log("getPetDetails error")
        })
    })
}

//TODO if pets does not have a single photo
export const getPetProfilePicture = (petname,username) =>{
  return new Promise((resolve,reject) =>{
    firebase.firestore().collection("pets").where("ownerID","array-contains",username).where("name","==",petname).get().then((querySnapShot)=>{  
      querySnapShot.forEach((doc)=>{
        resolve(doc.data().photos[0]);
      })
    }).catch(error =>{
        console.log(error)
        console.log("getPetDetails error")
    })
})
}

export const uploadPetImage = async (id,imageUri) =>{
    const response = await fetch(imageUri);
    const blob = await response.blob();
    var fileExtension = imageUri.split('.').pop()
    var uuid4 = uuidv4();
    var fileName = `${uuid4}.${fileExtension}`
    var storageRef = firebase.storage().ref()

//     uploadTask.on('state_changed', 
//     (snapshot) => {
//       // Observe state change events such as progress, pause, and resume
//       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log('Upload is ' + progress + '% done');
//       switch (snapshot.state) {
//         case firebase.storage.TaskState.PAUSED: // or 'paused'
//           console.log('Upload is paused');
//           break;
//         case firebase.storage.TaskState.RUNNING: // or 'running'
//           console.log('Upload is running');
//           break;
//       }
//     }, 
//     (error) => {
//       // Handle unsuccessful uploads
//     }, 
//     () => {
//       // Handle successful uploads on complete
//       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//         console.log('File available at', downloadURL);
//       });
//     }
//   );
    console.log(imageUri)
    var uploadTask = storageRef.child(`pets/images/${fileName}`).put(blob);
    uploadTask
      .on('state_changed', 
          (snapshot) => {
            
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            // Handle unsuccessful uploads
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                firebase.firestore().collection("pets").doc(id).update({
                photos: firebase.firestore.FieldValue.arrayUnion(downloadURL)
                })
              console.log('File available at', downloadURL);
            });
          }
        );}
        // firebase.storage.TaskEvent.STATE_CHANGED,
        // snapshot => {
        //   console.log("snapshot: " + snapshot.state);
        //   console.log("progress: " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100);

        //   if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
        //     console.log("Success");
        //   }
        // },
        // error => {
        //   unsubscribe();
        //   console.log("image upload error: " + error.toString());
        // },
        // () => {
        //   storageRef.getDownloadURL()
        //     .then((downloadUrl) => {
        //       console.log("File available at: " + downloadUrl);
        //       firebase.firestore().collection("pets").doc(id).update({
        //         photos: firebase.firestore.FieldValue.arrayUnion(downloadUrl)
        //     })
        // })})}
