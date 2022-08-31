import firebase, { db } from "./firebase";
import {
  collection,
  getDocs,
  getDoc,
  query,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

export const saveNewDoctor = (data: any) => {
  addDoc(collection(db, "doctor"), {
    ...data,
  });
};
