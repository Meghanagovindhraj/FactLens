import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYzFCYC7qOdcHZm92SuYLKWIkaYJelZ1s",
  authDomain: "login-auth-3e148.firebaseapp.com",
  projectId: "login-auth-3e148",
  storageBucket: "login-auth-3e148.appspot.com",
  messagingSenderId: "760161249629",
  appId: "1:760161249629:web:49135fb66f27813cdb60b4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const submit = document.getElementById("submit");
submit.addEventListener("click",function(event){
  event.preventDefault();
  alert(5)
})

// Email Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    alert("Login successful!");
  } catch (error) {
    console.error("Login error:", error.message);
    alert(error.message);
  }
});

// Google Login
document.getElementById("googleLoginBtn").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Google User logged in:", result.user);
    alert("Google login successful!");
  } catch (error) {
    console.error("Google Login error:", error.message);
    alert(error.message);
  }
});
