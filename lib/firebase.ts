import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAQOLeDDYuMUVlZIwelXq6KsFfPs7Z9JQw",
  authDomain: "trymov-32a1e.firebaseapp.com",
  projectId: "trymov-32a1e",
  storageBucket: "trymov-32a1e.firebasestorage.app",
  messagingSenderId: "948836653322",
  appId: "1:948836653322:web:51d224aa7a4200d94042f3"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db};

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// }