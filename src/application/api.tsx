import { db } from "./firebase"
import { doc, collection, addDoc } from "firebase/firestore"

// Helper para obtener la fecha en formato YYYY-MM-DD
const getDatePath = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, "0") // Meses van de 0-11
  const day = String(now.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export const saveNewDoctorAr = async (data: any) => {
  const datePath = getDatePath()

  // Crear documento intermedio basado en la fecha
  const docRef = doc(db, "doctorAr", datePath)
  const collectionRef = collection(docRef, "submissions")

  // Agregar datos a la subcolección
  await addDoc(collectionRef, {
    ...data,
    timestamp: new Date().toISOString(),
  })
}

export const saveNewDoctorPr = async (data: any) => {
  const datePath = getDatePath()

  const docRef = doc(db, "doctorPr", datePath)
  const collectionRef = collection(docRef, "submissions")

  await addDoc(collectionRef, {
    ...data,
    timestamp: new Date().toISOString(),
  })
}

export const contactForm = async (data: any) => {
  const datePath = getDatePath()

  const docRef = doc(db, "ContactForm", datePath)
  const collectionRef = collection(docRef, "submissions")

  await addDoc(collectionRef, {
    ...data,
    timestamp: new Date().toISOString(),
  })
}

export const saveDispensaryPr = async (datos: any) => {
  const datePath = getDatePath()

  const docRef = doc(db, "dispensaryPr", datePath)
  const collectionRef = collection(docRef, "submissions")

  await addDoc(collectionRef, {
    ...datos,
    timestamp: new Date().toISOString(),
  })
}

export const saveCannMed = async (datos: any) => {
  const datePath = getDatePath()

  const docRef = doc(db, "Cannmed", datePath)
  const collectionRef = collection(docRef, "submissions")

  await addDoc(collectionRef, {
    ...datos,
    timestamp: new Date().toISOString(),
  })
}
