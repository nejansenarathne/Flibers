import { firebase, db } from "./firebase";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const auth = getAuth(firebase)//getting auth from module
const provider = new GoogleAuthProvider()//defining google as provider 
let logged = false

const signInWithGoogle = () => {
    signInWithPopup(auth,provider)//implementing popup
    .then((result) => {//adding data to variables

        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profPic", profilePic)
        localStorage.setItem("logged", true)
        // setLoggedIn(true)

        //uploading to database
        const userRef = doc(db , 'users', email)
        setDoc(userRef, {
            name: name,
            email: email,
            profPic: profilePic
        })
        window.location.reload()
    })
    .catch((error) => {
        console.log(error)
    })
}


export default signInWithGoogle