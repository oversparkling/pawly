import firebase from "../config/firebaseConfig"
import { getPetProfilePicture } from "./PetActions"

export const getTaskPage = () =>{
    return new Promise((resolve,reject) =>{
        
        firebase.firestore().collection("task").get().then((querySnapShot)=>{
            let Tasks = []
            querySnapShot.forEach((doc)=>{
                let temp = doc
                temp.iconUrl = doc.data().iconUrl
                Tasks.push(temp)
            })
            resolve(Tasks);
        })
        .catch(error =>{
            console.log(error)
            console.log("getTaskPage error")
        })
 
    }
    )
    
}

export const getTaskByType = (type) =>{
    return new Promise((resolve,reject) =>{
        firebase.firestore().collection("task").doc(type).get().then(doc => {
            let details = []
            details.push(doc.data().title)
            details.push(doc.data().photoUrl)
            resolve(details)}
        )
        .catch(error =>{
            console.log(error)
            console.log("getTaskByType error")
        })
    })
}
    

export const getTaskByUser = (username) =>{
    return new Promise((resolve,reject) =>{
        var beginningDate = Date.now() + 604800000;
        var beginningDateObject = new Date(beginningDate);
        console.log(beginningDateObject)
        firebase.firestore().collection("UserTasks").where("userID","==",username).where("TaskTime","<",beginningDateObject).orderBy("TaskTime").get().then((querySnapShot)=>{
            let UserTasks = []
            querySnapShot.forEach((doc)=>{
                // console.log(doc.data())
                UserTasks.push(doc.data())
            })
            resolve(UserTasks);
        })
        .catch(error =>{
            console.log(error)
            console.log("getTaskByUser error")
        })
 
    }
    )
    
}

export const insertTaskByUser = async (type,time,username,notes,petName) =>{

    // petName.forEach(element =>{
    //     console.log(element)
    //     await getPetProfilePicture(petName,element).then(response =>{
    //         console.log("yo")
    //         profilePics.push(response)
    //     })
    // })

    const promises = await petName.map(async element =>{
        const profilePic = await getPetProfilePicture(element,username)
        return profilePic
    })

    const profilePics = await Promise.all(promises)
    console.log(profilePics)
    getTaskByType(type).then( result =>{
        console.log("here")
        firebase.firestore().collection("UserTasks").add({
            TaskTime : time,
            cardImageUrl:result[1],
            userID:username,
            description:result[0],
            notes: notes,
            pets: firebase.firestore.FieldValue.arrayUnion(...petName),
            profilePics: firebase.firestore.FieldValue.arrayUnion(...profilePics)
        })
    }
    )
    
}

export const deleteTaskByID = (id) =>{
    return new Promise((resolve,reject)=>{
        firebase.firestore().collection("UserTasks").doc(id).delete().then(()=>{
            console.log("Successfully Deleted")
            resolve(true)
        }).catch((error)=>{
            console.log(error)
            reject(false)
        })
    })
}