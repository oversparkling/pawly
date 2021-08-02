import firebase from "../firebaseConfig"

export const getTaskPage = () =>{
    return new Promise((resolve,reject) =>{
        
        firebase.firestore().collection("task").get().then((querySnapShot)=>{
            let Tasks = []
            querySnapShot.forEach((doc)=>{
                Tasks.push(doc)
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
            details.push(doc.data().description)
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

export const insertTaskByUser = (type,time,username,notes) =>{
    getTaskByType(type).then( result =>{
        firebase.firestore().collection("UserTasks").add({
            TaskTime : time,
            cardImageUrl:result[1],
            userID:username,
            description:result[0],
            notes: notes
        })
    }
    )
    
}