import firebase from 'firebase/app';
import 'firebase/analytics'; // Include any other Firebase services you want to use

// Firebase configuration from your Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAAVydFUKcAI24ET-IleuYZ5qE20KjIhE8",
  authDomain: "outfitmaven-8af91.firebaseapp.com",
  projectId: "outfitmaven-8af91",
  storageBucket: "outfitmaven-8af91.firebasestorage.app",
  messagingSenderId: "222404101745",
  appId: "1:222404101745:android:44fc7e7e7420d64ac57dd0",
};

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized
}

export default firebase;  // Export the firebase instance
