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

export const saveNewDoctorAr = (data: any) => {
  addDoc(collection(db, "doctorAr"), {
    ...data,
  });
};

export const saveNewDoctorPr = (data: any) => {
  addDoc(collection(db, "doctorPr"), {
    ...data,
  });
};

export const contactForm = (data: any) => {
  addDoc(collection(db, "ContactForm"), {
    ...data,
  });
};
