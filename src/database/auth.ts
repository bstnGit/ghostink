import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeDatabase } from "../database/config";

initializeDatabase();

// Initialize Firebase Auth
const auth = getAuth();

// Create a new user with email and password
export async function createUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error("Error creating new user:", error);
    throw error;
  }
}

// Sign in a user with email and password
export async function signInUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error("Error signing in user:", error);
    throw error;
  }
}

// Sign out the currently signed-in user
export async function signOutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out user:", error);
    throw error;
  }
}
