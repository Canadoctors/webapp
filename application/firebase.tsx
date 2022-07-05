import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLYABSjc1aWlAFJjuL8dYLiDP4nkpFbtc",
  authDomain: "canadoctordb.firebaseapp.com",
  projectId: "canadoctordb",
  storageBucket: "canadoctordb.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
