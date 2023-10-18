// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPIdmi3Nm5FwhJM3yVfv6u0aXfNYZPMN0",
  authDomain: "sales-app-2a26b.firebaseapp.com",
  projectId: "sales-app-2a26b",
  storageBucket: "sales-app-2a26b.appspot.com",
  messagingSenderId: "604102594130",
  appId: "1:604102594130:web:ea4f4bfed97483e61a598b",
  measurementId: "G-SQXDKQ0NWH",
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth };
export default db;
