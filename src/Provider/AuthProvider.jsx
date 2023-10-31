import { createContext, useState } from "react";
import PropTypes from 'prop-types'; //
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

const [user ,setUser] = useState(null);

const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email,password);
}


    const authinfo = {user , createUser}

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.node
}