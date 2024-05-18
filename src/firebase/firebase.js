import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  // Your Firebase config goes here
  apiKey: "AIzaSyA-tkQ5pB_aZlCGTjQ_bpIKP1OSnYlu5gQ",
  authDomain: "test-983e0.firebaseapp.com",
  projectId: "test-983e0",
  storageBucket: "test-983e0.appspot.com",
  messagingSenderId: "307296096144",
  appId: "1:307296096144:web:1800cb635912b0dcb4ad15"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
