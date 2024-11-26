import firebase, { db } from "./firebase";
import {
  collection,
  addDoc,
} from "firebase/firestore";

// Helper para obtener la fecha en formato YYYY/MM/DD
const getDatePath = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Meses van de 0-11
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};

export const saveNewDoctorAr = async (data: any) => {
  const datePath = getDatePath();
  await addDoc(collection(db, `doctorAr/${datePath}`), {
    ...data,
  });
};

export const saveNewDoctorPr = async (data: any) => {
  const datePath = getDatePath();
  await addDoc(collection(db, `doctorPr/${datePath}`), {
    ...data,
  });
};

export const contactForm = async (data: any) => {
  const datePath = getDatePath();
  await addDoc(collection(db, `ContactForm/${datePath}`), {
    ...data,
  });
};

export const saveDispensaryPr = async (datos: any) => {
  const datePath = getDatePath();
  await addDoc(collection(db, `dispensaryPr/${datePath}`), {
    ...datos,
  });
};
