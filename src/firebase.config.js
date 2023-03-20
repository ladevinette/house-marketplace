import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZvX85oHadSN9QXiVE1RFdQKxYfo_tF8w",
  authDomain: "house-marketplace-app-f5896.firebaseapp.com",
  projectId: "house-marketplace-app-f5896",
  storageBucket: "house-marketplace-app-f5896.appspot.com",
  messagingSenderId: "321359770956",
  appId: "1:321359770956:web:fb60c3b771c2ccdde9cbe9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
