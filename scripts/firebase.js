import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXyb94zGNBh9z4lg_jQYzbUoI2EDQ5rJs",
  authDomain: "rp3cd-9c37b.firebaseapp.com",
  projectId: "rp3cd-9c37b",
  storageBucket: "rp3cd-9c37b.appspot.com",
  messagingSenderId: "749174695525",
  appId: "1:749174695525:web:1a899ccf7c9a8cb35ac88c",
  measurementId: "G-845SC2N1F5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fetch news data from Firestore
export async function fetchNews() {
  const newsCol = collection(db, "news");
  const newsSnapshot = await getDocs(newsCol);
  const newsList = newsSnapshot.docs.map((doc) => doc.data());
  return newsList;
}
