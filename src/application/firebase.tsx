import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDoDPfzFvh4GpEMEEC5p6A7qq3V7OL8SqQ",
  authDomain: "canadoctordb-b98e0.firebaseapp.com",
  projectId: "canadoctordb-b98e0",
  storageBucket: "canadoctordb-b98e0.appspot.com",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export default app

