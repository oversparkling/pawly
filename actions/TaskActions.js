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
        firebase.firestore().collection("task").doc(type).get().then(doc => resolve(doc.data().description)
        )
        .catch(error =>{
            console.log(error)
            console.log("getTaskByType error")
        })
    })
}
    

export const getTaskByUser = (username) =>{
    return new Promise((resolve,reject) =>{
        
        firebase.firestore().collection("UserTasks").where("userID","==",username).get().then((querySnapShot)=>{
            let UserTasks = []
            querySnapShot.forEach((doc)=>{
                console.log(doc.data())
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

export const insertTaskByUser = (type,time) =>{
    getTaskByType(type).then( description =>{
        firebase.firestore().collection("UserTasks").add({
            TaskTime : time,
            cardImageUrl:"https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            userID:"2r6du4nvDvUcOGgMzMce",
            description:description
        })
    }
    )
    
}