import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDc5V2Kzmo37C4p5ZXUCuxSatL6V4MBBDI",
  authDomain: "registration-form-4abd9.firebaseapp.com",
  projectId: "registration-form-4abd9",
  storageBucket: "registration-form-4abd9.appspot.com",
  messagingSenderId: "624651758907",
  appId: "1:624651758907:web:64ecae56808a87460b5b1e",
  measurementId: "G-4VC05L3QF3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
