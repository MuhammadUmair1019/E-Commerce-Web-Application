import React, { useState, createContext } from "react";
import firebase from "firebase";
import { signInWithGoogle } from "../firebase/firebase";
//initialInputValuesForCheckoutPage
const initailValues = {
  firstName: "",
  lastName: "",
  address: "",
  phone: "",
  city: "",
  email: "",
};

export const AuthContext = createContext();

export default function AuthProvider(props) {
  //checkOutPageInputState
  const [values, setValues] = useState(initailValues);
  //accountLoginLogoutRegisterInitialState
  const [user, setUser] = useState(null);
  //accountLoginLogoutRegisterErrorState
  const [error, setError] = useState(null);
  //accountLoginLogoutRegisterLoadingState
  const [isloading, setIsLoading] = useState(false);

  //checkout page
  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // signInWithEmailAndPassword
  const onLogin = (email, password) => {
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("Login Success : userCradential = ", user);
        setUser(user);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`Login Error : Code=${e.code}, Message=${e.message}`);
        setIsLoading(false);
      });
  };

  //signInWithGoogle
  const onLoginWIthGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((user) => {
        setIsLoading(true);
        console.log("Login Success : userCradential = ", user);
        setUser(user);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`Login Error : Code=${e.code}, Message=${e.message}`);
        setIsLoading(false);
        setError(e.toString());
      });
  };

  //createUserWithEmailAndPassword
  const onRegister = (email, password, repeatPassowrd) => {
    setIsLoading(true);
    if (password !== repeatPassowrd) {
      setError("Error : Password does not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("Register Success: userCradential = ", user);
        setUser(user);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`Register Error: Code=${e.code} Message=${e.message}`);
        setError(`${e.code} ${e.message}`);
      });
  };

  //signOut
  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Logout Success ");
        setUser(null);
        setError("");
      })
      .catch((e) => {
        console.log(`Logout Error: Code=${e.code} Message=${e.message}`);
      });
  };

  //checkIsUserLoggedIn
  const isLoggedIn = user !== null;

  return (
    <AuthContext.Provider
      value={{
        ...props,
        values,
        handleInputChange,
        onLoginWIthGoogle,
        onLogin,
        user,
        error,
        onRegister,
        onLogout,
        isLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
