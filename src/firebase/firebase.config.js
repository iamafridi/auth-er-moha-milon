// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgJ912pdKpnPKIW9MDltWji3K0MItmh5M",
  authDomain: "auth-er-moha-milon.firebaseapp.com",
  projectId: "auth-er-moha-milon",
  storageBucket: "auth-er-moha-milon.appspot.com",
  messagingSenderId: "147996328526",
  appId: "1:147996328526:web:0b9b1842474d40f7acb91f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;