// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {getDatabase, ref, get} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {firebaseConfig} from "../firebase.js"


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

// function to get user unique ID
function getuseruid() {
    
    let user = auth.currentUser
    return user.uid
}


function userRoleIdentifikcation() {
    
    const userRole = get(ref(database, 'Users/' + getuseruid())).then((snapshot) => {
        return snapshot.val().role;
    })
    .catch((error) => {
        console.log(error)
    })

    return userRole
}

export {userRoleIdentifikcation}