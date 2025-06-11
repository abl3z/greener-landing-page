// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

// إعداد Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBV0Z6EpCuykQJMyWUQkdiGvVRdXUvNRlA",
  authDomain: "gws360-5ee08.firebaseapp.com",
  databaseURL: "https://gws360-5ee08-default-rtdb.firebaseio.com",
  projectId: "gws360-5ee08",
  storageBucket: "gws360-5ee08.appspot.com",
  messagingSenderId: "884231057768",
  appId: "1:884231057768:web:40cf55109b60d746c066dd",
  measurementId: "G-XY1ZBYDLPW"
};

// تفعيل Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// ✅ تصدير كل ما نحتاجه دفعة واحدة
export { database, ref, push };
