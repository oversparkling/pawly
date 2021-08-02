import firebase from "../firebaseConfig"

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
                console.log(doc.data())
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

export const getPetDetails = (id) =>{
    
    return new Promise((resolve,reject) =>{
        firebase.firestore().collection("pets").doc(id).collection('photos').get().then((querySnapShot)=>{
            let PetsImage = []
            querySnapShot.forEach((doc)=>{
                PetsImage.push(doc.data())
                console.log(doc.data())
            })
            resolve(PetsImage);
        }).catch(error =>{
            console.log(error)
            console.log("getPetDetails error")
        })
    })
    


}