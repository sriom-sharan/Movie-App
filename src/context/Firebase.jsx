/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import dotenv from 'dotenv';
dotenv.config();


const firebaseConfig = {
  apiKey: 'AIzaSyAjOQKEm-X7-ali5wyWtO6bdneJR2myiug',
  authDomain: "cinova-movie-app.firebaseapp.com",
  projectId: "cinova-movie-app",
  storageBucket: "cinova-movie-app.appspot.com",
  messagingSenderId: "460907990756",
  appId: "1:460907990756:web:ec0b7ccfdfc7d7507ae6f1",
  databaseURL: "https://cinova-movie-app-default-rtdb.firebaseio.com/",
};
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const signupUserWithEmailAndPassword = (email, password) => {
  createUserWithEmailAndPassword(firebaseAuth, email, password).catch(
    (error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    }
  );
};

const putData = (key, data) => set(ref(database, key), data);

export const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
